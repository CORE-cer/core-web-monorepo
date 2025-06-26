import type { QueryId, ViewMode } from '@/types';
import { useEffect, useState } from 'react';

import { useQueryManager } from './useQueryManager';
import { useTimelineManager } from './useTimelineManager';
import { useWebSocketManager } from './useWebSocketManager';

export function useWatchPage() {
  const [selectedQueryIds, setSelectedQueryIds] = useState<Set<QueryId>>(new Set());
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  // Use the query manager hook for queries and streams
  const { queries, streamsInfo, handleInactivateQuery } = useQueryManager();

  // Use the WebSocket manager hook for data and stats
  const { data, queryIdToQueryStat, eventInterval, setEventInterval, clearData } = useWebSocketManager(selectedQueryIds, queries, streamsInfo);

  // Use the timeline manager hook for timeline-specific functionality
  const { timelineConfig, updateTimeHorizon, getAllActiveQueryEvents } = useTimelineManager(data, selectedQueryIds);

  // Remove queries that are no longer active
  useEffect(() => {
    setSelectedQueryIds((prev) => {
      const next = new Set(prev);
      for (const qid of prev) {
        if (!Array.from(queries.keys()).find((qid_) => qid_ === qid)) {
          next.delete(qid);
        }
      }
      return next;
    });
  }, [queries]);

  const handleViewModeChange = (_: React.MouseEvent<HTMLElement>, newValue: ViewMode) => {
    setViewMode(newValue);
  };

  return {
    queries,
    streamsInfo,
    selectedQueryIds,
    setSelectedQueryIds,
    data,
    queryIdToQueryStat,
    viewMode,
    eventInterval,
    setEventInterval,
    handleViewModeChange,
    handleInactivateQuery,
    // Timeline-specific exports
    timelineConfig,
    updateTimeHorizon,
    getAllActiveQueryEvents,
    clearData,
  };
}
