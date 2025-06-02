import { useEffect, useState } from 'react';

import type { ViewMode } from '../types';
import { useQueryManager } from './useQueryManager';
import { useWebSocketManager } from './useWebSocketManager';

export function useWatchPage() {
  const [selectedQueryIds, setSelectedQueryIds] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  // Use the query manager hook for queries and streams
  const { queries, streamsInfo, handleInactivateQuery } = useQueryManager();

  // Use the WebSocket manager hook for data and stats
  const { data, qid2Stats, eventInterval, setEventInterval } = useWebSocketManager(selectedQueryIds, streamsInfo);

  // Remove queries that are no longer active
  useEffect(() => {
    setSelectedQueryIds((prev) => {
      const next = new Set(prev);
      for (const qid of prev) {
        if (!Object.keys(queries).find((qid_) => qid_ === qid)) {
          next.delete(qid);
        }
      }
      return next;
    });
  }, [JSON.stringify(queries)]);

  const handleViewModeChange = (_: React.MouseEvent<HTMLElement>, newValue: ViewMode) => {
    setViewMode(newValue);
  };

  return {
    queries,
    streamsInfo,
    selectedQueryIds,
    setSelectedQueryIds,
    data,
    qid2Stats,
    viewMode,
    eventInterval,
    setEventInterval,
    handleViewModeChange,
    handleInactivateQuery,
  };
}
