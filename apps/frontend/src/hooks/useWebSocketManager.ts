import { useCallback, useEffect, useRef, useState } from 'react';

import type { ComplexEvent, DataItem, EventInfo, FormattedHit, HitCount, QueryStatsMap, StreamInfo, WebSocketMap } from '../types';

export const useWebSocketManager = (selectedQueryIds: Set<string>, streamsInfo: StreamInfo[]) => {
  const [qid2Websockets, setQid2Websockets] = useState<WebSocketMap>(new Map());
  const [data, setData] = useState<DataItem[]>([]);
  const [eventInterval, setEventInterval] = useState<number>(0);
  const [qid2Stats, setQid2Stats] = useState<QueryStatsMap>(new Map());

  const currentQid2HitRef = useRef<Map<string, HitCount>>(new Map());
  const dataBuffer = useRef<DataItem[]>([]);

  const formatComplexEvents = useCallback(
    (complexEventsJson: ComplexEvent[]): FormattedHit[] => {
      function getEventInfoFromEventId(eventId: string): EventInfo | undefined {
        for (const streamInfo of streamsInfo) {
          for (const eventInfo of streamInfo.events_info) {
            if (eventInfo.id === eventId) {
              return eventInfo;
            }
          }
        }
        return undefined;
      }

      const outputHits: FormattedHit[] = [];
      for (const complexEvent of complexEventsJson) {
        const outputComplexEvent = {
          start: complexEvent.start,
          end: complexEvent.end,
          events: [] as { event_type: string; [key: string]: unknown }[],
        };

        for (const event of complexEvent.eventss) {
          const eventData = event.event;
          const eventInfo = getEventInfoFromEventId(eventData.event_type_id);

          if (eventInfo) {
            const eventOutput: { event_type: string; [key: string]: unknown } = {
              event_type: eventInfo.name,
            };

            for (let i = 0; i < eventInfo.attributes_info.length; i++) {
              const attributeInfo = eventInfo.attributes_info[i];
              const attributeValue = eventData.attributes[i];
              eventOutput[attributeInfo.name] = attributeValue;
            }
            outputComplexEvent.events.push(eventOutput);
          }
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
    setQid2Websockets((prev) => {
      const next = structuredClone(prev);
      const baseUrl = import.meta.env.VITE_CORE_BACKEND_URL as string | undefined;
      if (!baseUrl) {
        console.error('Base URL is not defined');
        return next;
      }

      // Close connections only for removed qids
      for (const qid of Object.keys(next)) {
        // Keep the existing connection
        if (selectedQueryIds.has(qid)) continue;

        const ws = next.get(qid);
        if (!ws) continue;
        ws.close();
        next.delete(qid);
      }

      // Add the new connections
      for (const qid of selectedQueryIds) {
        // Do not add the existing connection
        if (next.has(qid)) continue;

        const ws = new WebSocket(baseUrl + '/' + qid);
        next.set(qid, ws);
        ws.onopen = () => {
          console.info('Connected to qid', qid);
          currentQid2HitRef.current.set(qid, {
            numHits: 0,
            numComplexEvents: 0,
          });
          setQid2Stats((prev) => {
            const next = structuredClone(prev);
            next.set(qid, {
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
          console.info('Disconnected from qid', qid);
          currentQid2HitRef.current.delete(qid);
          setQid2Stats((prev) => {
            const next = structuredClone(prev);
            next.delete(qid);
            return next;
          });
        };
        ws.onerror = () => {
          console.error('Error on qid', qid);
        };
      }

      return next;
    });
  }, [selectedQueryIds]);

  // Message handlers for queries
  useEffect(() => {
    if (eventInterval > 0) {
      // Buffered updates
      for (const [qid, ws] of qid2Websockets.entries()) {
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
      currentBuffer = currentBuffer.filter((item) => item.qid in qid2Websockets);
      setData((prevData) => [...prevData, ...currentBuffer]);

      for (const [qid, ws] of qid2Websockets.entries()) {
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
  }, [eventInterval, qid2Websockets, formatComplexEvents, setData]);

  // Cleanup WebSockets on unmount
  useEffect(() => {
    return () => {
      console.info('Disconnecting from all websockets...');
      for (const ws of qid2Websockets.values()) {
        ws.close();
      }
    };
  }, [qid2Websockets]);

  // Stats update interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentQid2HitRef.current.size === 0) {
        return;
      }

      const currentCounts = structuredClone(currentQid2HitRef);

      for (const qid in currentQid2HitRef.current) {
        currentQid2HitRef.current.set(qid, {
          numHits: 0,
          numComplexEvents: 0,
        });
      }

      setQid2Stats((prev) => {
        const next = structuredClone(prev);
        const time = new Date();
        for (const qid in next) {
          const curr = next.get(qid);
          const counts = currentCounts.current.get(qid);
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
  }, [setQid2Stats]);

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
    qid2Websockets,
    currentQid2HitRef,
    data,
    qid2Stats,
    eventInterval,
    setEventInterval,
  };
};
