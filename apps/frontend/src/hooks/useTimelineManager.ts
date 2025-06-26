import type { DataItem, QueryId, TimelineConfig, TimelineEvent } from '@/types';
import { useEffect, useRef, useState } from 'react';

const DEFAULT_TIME_HORIZON_SECONDS = 10;
const DEFAULT_MAX_EVENTS_PER_QUERY = 10000; // Customizable constant for max historical events

export function useTimelineManager(data: DataItem[], selectedQueryIds: Set<QueryId>) {
  const [timelineConfig, setTimelineConfig] = useState<TimelineConfig>({
    timeHorizonSeconds: DEFAULT_TIME_HORIZON_SECONDS,
    maxEventsPerQuery: DEFAULT_MAX_EVENTS_PER_QUERY,
  });

  // Store all timeline events, keyed by query ID
  const timelineEventsRef = useRef<Map<QueryId, TimelineEvent[]>>(new Map());
  const eventIdCounterRef = useRef(0);
  const processedDataLengthRef = useRef(0);

  // Process new data and create timeline events
  useEffect(() => {
    if (data.length === 0) {
      processedDataLengthRef.current = 0;
      return;
    }

    // Process only new data items that haven't been processed yet
    const newDataItems = data.slice(processedDataLengthRef.current);
    if (newDataItems.length === 0) return;

    // Update the processed length
    processedDataLengthRef.current = data.length;

    // Process each new data item
    for (const dataItem of newDataItems) {
      if (!selectedQueryIds.has(dataItem.qid)) continue;

      const queryId = dataItem.qid;
      const receivedAt = new Date();

      // Get or create the events array for this query
      let queryEvents = timelineEventsRef.current.get(queryId);
      if (!queryEvents) {
        queryEvents = [];
        timelineEventsRef.current.set(queryId, queryEvents);
      }

      // Create timeline events for each hit in the current data item
      const newEvents: TimelineEvent[] = dataItem.data.complexEvents.map((complexEvent) => ({
        id: `event-${(eventIdCounterRef.current++).toString()}`,
        queryId,
        receivedAt,
        data: complexEvent,
      }));

      // Add new events to the beginning (most recent first)
      queryEvents.unshift(...newEvents);

      // Limit the number of events per query to the customizable constant
      if (queryEvents.length > timelineConfig.maxEventsPerQuery) {
        queryEvents.splice(timelineConfig.maxEventsPerQuery);
      }

      timelineEventsRef.current.set(queryId, queryEvents);
    }
  }, [data, selectedQueryIds, timelineConfig.maxEventsPerQuery]);

  // Clean up events for unselected queries
  useEffect(() => {
    const currentEvents = timelineEventsRef.current;
    for (const queryId of currentEvents.keys()) {
      if (!selectedQueryIds.has(queryId)) {
        currentEvents.delete(queryId);
      }
    }
  }, [selectedQueryIds]);

  // Reset processed length when data is cleared
  useEffect(() => {
    if (data.length === 0) {
      processedDataLengthRef.current = 0;
    }
  }, [data.length]);

  const updateTimeHorizon = (seconds: number) => {
    setTimelineConfig((prev) => ({ ...prev, timeHorizonSeconds: seconds }));
  };

  const updateMaxEventsPerQuery = (maxEvents: number) => {
    setTimelineConfig((prev) => ({ ...prev, maxEventsPerQuery: maxEvents }));

    // Trim existing events if new limit is smaller
    for (const [queryId, events] of timelineEventsRef.current) {
      if (events.length > maxEvents) {
        events.splice(maxEvents);
        timelineEventsRef.current.set(queryId, events);
      }
    }
  };

  const getEventsInTimeRange = (queryId: QueryId): TimelineEvent[] => {
    const queryEvents = timelineEventsRef.current.get(queryId) ?? [];
    const now = new Date();
    const cutoffTime = new Date(now.getTime() - timelineConfig.timeHorizonSeconds * 1000);

    return queryEvents.filter((event) => event.receivedAt >= cutoffTime);
  };

  const getAllActiveQueryEvents = (): Map<QueryId, TimelineEvent[]> => {
    const result = new Map<QueryId, TimelineEvent[]>();
    for (const queryId of selectedQueryIds) {
      const events = getEventsInTimeRange(queryId);
      if (events.length > 0) {
        result.set(queryId, events);
      }
    }
    return result;
  };

  const getStoredEventCount = (queryId?: QueryId): number => {
    if (queryId) {
      return timelineEventsRef.current.get(queryId)?.length ?? 0;
    }
    // Return total count across all queries
    let total = 0;
    for (const events of timelineEventsRef.current.values()) {
      total += events.length;
    }
    return total;
  };

  return {
    timelineConfig,
    updateTimeHorizon,
    updateMaxEventsPerQuery,
    getEventsInTimeRange,
    getAllActiveQueryEvents,
    getStoredEventCount,
  };
}
