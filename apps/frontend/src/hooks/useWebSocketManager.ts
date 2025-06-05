import type { ComplexEvent, DataItem, FormattedHit, FormattedHitData, HitCount, QueryIdToQueryStatMap, QueryIdToQueryWebSocketMap, StreamInfo } from '@/types';
import { getCoreCPPBaseUrl } from '@/utils/api';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useWebSocketManager = (selectedQueryIds: Set<string>, streamsInfo: StreamInfo[]) => {
  const [queryIdToQueryWebSocket, setQueryIdToQueryWebSocket] = useState<QueryIdToQueryWebSocketMap>(new Map());
  const queryIdToQueryWebSocketRef = useRef<QueryIdToQueryWebSocketMap>(queryIdToQueryWebSocket);
  const [data, setData] = useState<DataItem[]>([]);
  const [eventInterval, setEventInterval] = useState<number>(0);
  const [queryIdToQueryStat, setQueryIdToQueryStat] = useState<QueryIdToQueryStatMap>(new Map());

  const currentQid2HitRef = useRef<Map<string, HitCount>>(new Map());
  const dataBuffer = useRef<DataItem[]>([]);

  const formatComplexEvents = useCallback(
    (complexEventsJson: ComplexEvent[]): FormattedHit[] => {
      // function getEventInfoFromEventId(eventId: string): EventInfo | undefined {
      //   for (const streamInfo of streamsInfo) {
      //     for (const eventInfo of streamInfo.events_info) {
      //       if (eventInfo.id === eventId) {
      //         return eventInfo;
      //       }
      //     }
      //   }
      //   return undefined;
      // }

      const outputHits: FormattedHit[] = [];
      for (const complexEvent of complexEventsJson) {
        const outputComplexEvent: FormattedHitData = {
          start: complexEvent.start,
          end: complexEvent.end,
          events: [],
        };

        for (const event of complexEvent.events) {
          // const eventData = event.event;
          // const eventInfo = getEventInfoFromEventId(eventData.event_type_id);
          //
          // if (eventInfo) {
          //   const eventOutput: { event_type: string; [key: string]: unknown } = {
          //     event_type: eventInfo.name,
          //   };
          //
          //   for (let i = 0; i < eventInfo.attributes_info.length; i++) {
          //     const attributeInfo = eventInfo.attributes_info[i];
          //     const attributeValue = eventData.attributes[i];
          //     eventOutput[attributeInfo.name] = attributeValue;
          //   }
          //   outputComplexEvent.events.push(eventOutput);
          // }
          outputComplexEvent.events.push({ dataString: JSON.stringify(event) });
        }

        const time = new Date(outputComplexEvent.end / 1000000);
        outputHits.push({
          time,
          data: outputComplexEvent,
        });
      }
      return outputHits;
    },
    [streamsInfo]
  );

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

        const ws = new WebSocket(baseUrl + '/' + queryId);
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
          const receivedData = event.data as string;
          const eventJson: ComplexEvent[] = JSON.parse(receivedData) as ComplexEvent[];
          const transformedHits = formatComplexEvents(eventJson);

          let currentComplexEvents = 0;
          for (const elem of transformedHits) {
            currentComplexEvents += elem.data.events.length;
          }

          const currentQid2Hit = currentQid2HitRef.current.get(qid);
          if (!currentQid2Hit) {
            console.error(`No hit count found for qid ${qid}`);
            return;
          }

          currentQid2Hit.numHits += transformedHits.length;
          currentQid2Hit.numComplexEvents += currentComplexEvents;

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
          setData((prevData) => {
            const receivedData: unknown = event.data;
            if (typeof receivedData !== 'string') {
              return prevData;
            }
            const eventJson: ComplexEvent[] = JSON.parse(receivedData) as ComplexEvent[];
            const transformedHits = formatComplexEvents(eventJson);

            let currentComplexEvents = 0;
            for (const elem of transformedHits) {
              currentComplexEvents += elem.data.events.length;
            }
            const currentQid2Hit = currentQid2HitRef.current.get(qid);
            if (!currentQid2Hit) {
              console.error(`No hit count found for qid ${qid}`);
              return prevData;
            }

            currentQid2Hit.numHits += transformedHits.length;
            currentQid2Hit.numComplexEvents += currentComplexEvents;

            return [...prevData, { qid, data: transformedHits }];
          });
        };
      }
    }
  }, [eventInterval, queryIdToQueryWebSocket, formatComplexEvents, setData]);

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
  };
};
