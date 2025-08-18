import {
  ComplexEventSchema,
  type DataItem,
  type HitCount,
  type QueryId,
  type QueryIdToQueryInfoMap,
  type QueryIdToQueryStatMap,
  type QueryIdToQueryWebSocketMap,
  type StreamInfo,
} from '@/types';
import { getCoreCPPBaseUrl } from '@/utils/api';
import { formatHit } from '@/utils/formatHit';
import { useEffect, useRef, useState } from 'react';

export const useWebSocketManager = (selectedQueryIds: Set<QueryId>, queryIdToQueryInfoMap: QueryIdToQueryInfoMap, streamsInfo: StreamInfo[]) => {
  const [queryIdToQueryWebSocket, setQueryIdToQueryWebSocket] = useState<QueryIdToQueryWebSocketMap>(new Map());
  const queryIdToQueryWebSocketRef = useRef<QueryIdToQueryWebSocketMap>(queryIdToQueryWebSocket);
  const [data, setData] = useState<DataItem[]>([]);
  const [eventInterval, setEventInterval] = useState<number>(0);
  const [queryIdToQueryStat, setQueryIdToQueryStat] = useState<QueryIdToQueryStatMap>(new Map());

  const currentQid2HitRef = useRef<Map<QueryId, HitCount>>(new Map());
  const dataBuffer = useRef<DataItem[]>([]);

  const clearData = () => {
    setData([]);
    dataBuffer.current = [];
    // Reset stats
    setQueryIdToQueryStat((prev) => {
      const next = new Map(prev);
      for (const [qid] of next) {
        next.set(qid, {
          perSec: [],
          hitStats: { max: 0, total: 0 },
          complexEventStats: { max: 0, total: 0 },
        });
      }
      return next;
    });
    // Reset hit counts
    for (const [qid] of currentQid2HitRef.current) {
      currentQid2HitRef.current.set(qid, {
        numHits: 0,
        numComplexEvents: 0,
      });
    }
  };

  // Handle opening/closing ws connections
  useEffect(() => {
    setQueryIdToQueryWebSocket((prev) => {
      const next: QueryIdToQueryWebSocketMap = new Map();
      const baseUrl = getCoreCPPBaseUrl();

      // Close connections only for removed qids
      for (const [queryId, ws] of prev) {
        // Keep the existing connection
        if (selectedQueryIds.has(queryId)) {
          next.set(queryId, ws);
          continue;
        }

        console.info('Closing connection for queryId', queryId);
        ws.close();
      }

      // Add the new connections
      for (const queryId of selectedQueryIds) {
        // Do not add the existing connection
        if (next.has(queryId)) {
          continue;
        }

        const ws = new WebSocket(baseUrl + '/' + queryId.toString());
        next.set(queryId, ws);
        ws.onopen = () => {
          console.info('Connected to queryId', queryId);
          currentQid2HitRef.current.set(queryId, {
            numHits: 0,
            numComplexEvents: 0,
          });
          setQueryIdToQueryStat((prev) => {
            const next = new Map(prev);
            next.set(queryId, {
              perSec: [],
              hitStats: {
                max: 0,
                total: 0,
              },
              complexEventStats: {
                max: 0,
                total: 0,
              },
            });
            return next;
          });
        };
        ws.onclose = () => {
          console.info('Disconnected from queryId', queryId);
          currentQid2HitRef.current.delete(queryId);
          setQueryIdToQueryStat((prev) => {
            const next = new Map(prev);
            next.delete(queryId);
            return next;
          });
        };
        ws.onerror = () => {
          console.error('Error on queryId', queryId);
        };
      }

      return next;
    });
  }, [selectedQueryIds]);

  // Message handlers for queries
  useEffect(() => {
    if (eventInterval > 0) {
      // Buffered updates
      for (const [qid, ws] of queryIdToQueryWebSocket.entries()) {
        ws.onmessage = (event) => {
          const queryInfo = queryIdToQueryInfoMap.get(qid);
          if (!queryInfo) {
            console.error(`No query info found for qid ${qid.toString()}`);
            return;
          }

          if (typeof event.data !== 'string') {
            return;
          }

          const eventJsonParse = ComplexEventSchema.array().safeParse(JSON.parse(event.data));
          if (!eventJsonParse.success) {
            console.error('Failed to parse complex event:', eventJsonParse.error);
            return;
          }
          const eventJson = eventJsonParse.data;
          const transformedHits = formatHit(eventJson, queryInfo, streamsInfo);

          const currentQid2Hit = currentQid2HitRef.current.get(qid);
          if (!currentQid2Hit) {
            console.error(`No hit count found for qid ${qid.toString()}`);
            return;
          }

          currentQid2Hit.numHits += 1;
          currentQid2Hit.numComplexEvents += transformedHits.complexEvents.length;

          dataBuffer.current.push({ qid, data: transformedHits });
        };
      }
    } else {
      // Real-time updates. Flush buffer
      let currentBuffer = dataBuffer.current;
      dataBuffer.current = [];
      currentBuffer = currentBuffer.filter((item) => item.qid in queryIdToQueryWebSocket);
      setData((prevData) => [...prevData, ...currentBuffer]);

      for (const [qid, ws] of queryIdToQueryWebSocket.entries()) {
        ws.onmessage = (event) => {
          const queryInfo = queryIdToQueryInfoMap.get(qid);
          if (!queryInfo) {
            console.error(`No query info found for qid ${qid.toString()}`);
            return;
          }
          setData((prevData) => {
            if (typeof event.data !== 'string') {
              return prevData;
            }
            const eventJsonParse = ComplexEventSchema.array().safeParse(JSON.parse(event.data));
            if (!eventJsonParse.success) {
              console.error('Failed to parse complex event:', eventJsonParse.error);
              return prevData;
            }
            const eventJson = eventJsonParse.data;
            const transformedHits = formatHit(eventJson, queryInfo, streamsInfo);

            const currentQid2Hit = currentQid2HitRef.current.get(qid);
            if (!currentQid2Hit) {
              console.error(`No hit count found for qid ${qid.toString()}`);
              return prevData;
            }

            currentQid2Hit.numHits += 1;
            currentQid2Hit.numComplexEvents += transformedHits.complexEvents.length;

            return [...prevData, { qid, data: transformedHits }];
          });
        };
      }
    }
  }, [eventInterval, queryIdToQueryWebSocket, setData, queryIdToQueryInfoMap, streamsInfo]);

  // Cleanup WebSockets on unmount
  useEffect(() => {
    return () => {
      queryIdToQueryWebSocketRef.current = queryIdToQueryWebSocket;
    };
  }, [queryIdToQueryWebSocket]);

  // Cleanup WebSockets on unmount
  useEffect(() => {
    return () => {
      console.info('Disconnecting from all websockets...');
      for (const ws of queryIdToQueryWebSocketRef.current.values()) {
        ws.close();
      }
    };
  }, []);

  // Stats update interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentQid2HitRef.current.size === 0) {
        return;
      }

      const currentCounts = new Map(currentQid2HitRef.current);

      for (const queryId of currentCounts.keys()) {
        currentQid2HitRef.current.set(queryId, {
          numHits: 0,
          numComplexEvents: 0,
        });
      }

      setQueryIdToQueryStat((prev) => {
        const next = new Map(prev);
        const time = new Date();
        for (const qid of next.keys()) {
          const curr = next.get(qid);
          const counts = currentCounts.get(qid);
          if (!curr || !counts) continue;

          curr.perSec.push({
            ...counts,
            time,
          });

          // increase total
          curr.hitStats.total += counts.numHits;
          curr.complexEventStats.total += counts.numComplexEvents;

          // update max
          curr.hitStats.max = Math.max(curr.hitStats.max, counts.numHits);
          curr.complexEventStats.max = Math.max(curr.complexEventStats.max, counts.numComplexEvents);
        }
        return next;
      });
    }, 1000);
    return () => {
      console.log('Clearing stats update interval');
      clearInterval(interval);
    };
  }, [setQueryIdToQueryStat]);

  // Buffered interval
  useEffect(() => {
    if (eventInterval === 0) return;

    console.info('Setting up buffered interval with', eventInterval, 'ms');
    const bufferedInterval = setInterval(() => {
      while (dataBuffer.current.length > 0) {
        const first = dataBuffer.current.shift();
        if (first && selectedQueryIds.has(first.qid)) {
          setData((prevData) => {
            return [...prevData, first];
          });
          break;
        }
      }
    }, eventInterval);

    return () => {
      console.info('Clearing buffered interval');
      clearInterval(bufferedInterval);
    };
  }, [eventInterval, selectedQueryIds, setData]);

  return {
    qid2Websockets: queryIdToQueryWebSocket,
    currentQid2HitRef,
    data,
    queryIdToQueryStat,
    eventInterval,
    setEventInterval,
    clearData,
  };
};
