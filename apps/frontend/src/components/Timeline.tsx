import type { QueryId, QueryIdToQueryInfoMap, TimelineEvent } from '@/types';
import { Box, Slider, Typography } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';

import './Timeline.css';
import TimelineEventComponent from './TimelineEvent';

// Maximum number of events to store per query (customizable constant)
const MAX_EVENTS_PER_QUERY = 10000;

type TimelineProps = {
  queryIdToQueryInfoMap: QueryIdToQueryInfoMap;
  selectedQueryIds: Set<QueryId>;
  getAllActiveQueryEvents: () => Map<QueryId, TimelineEvent[]>;
  timeHorizonSeconds: number;
  onTimeHorizonChange: (seconds: number) => void;
};

export default function Timeline({ queryIdToQueryInfoMap, selectedQueryIds, getAllActiveQueryEvents, timeHorizonSeconds, onTimeHorizonChange }: TimelineProps) {
  const [renderedEvents, setRenderedEvents] = useState<Map<QueryId, TimelineEvent[]>>(new Map());
  const queryColorIndexRef = useRef<Map<QueryId, number>>(new Map());
  const lastUpdateRef = useRef<number>(0);
  const processedEventIdsRef = useRef<Set<string>>(new Set());
  const animationFrameRef = useRef<number | null>(null);

  // Assign stable color indices to queries
  const getQueryColorIndex = useCallback((queryId: QueryId): number => {
    if (!queryColorIndexRef.current.has(queryId)) {
      const nextIndex = queryColorIndexRef.current.size + 1;
      queryColorIndexRef.current.set(queryId, nextIndex);
    }
    const queryColorIndex = queryColorIndexRef.current.get(queryId);
    if (queryColorIndex === undefined) {
      throw new Error(`Query color index not found for queryId: ${queryId.toString()}`);
    }
    return queryColorIndex;
  }, []);

  // Throttled update function using requestAnimationFrame
  const updateEvents = useCallback(() => {
    const now = Date.now();

    // Only update at most every 100ms to prevent lag
    if (now - lastUpdateRef.current < 100) return;
    lastUpdateRef.current = now;

    const newActiveEvents = getAllActiveQueryEvents();

    setRenderedEvents((prevRendered) => {
      const newRendered = new Map(prevRendered);
      let hasChanges = false;

      for (const [queryId, events] of newActiveEvents) {
        // Only process events for queries that are actually selected
        if (!selectedQueryIds.has(queryId)) continue;

        const currentRendered = newRendered.get(queryId) ?? [];
        const currentEventIds = new Set(currentRendered.map((e) => e.id));

        // Find new events that haven't been rendered yet
        const newEvents = events.filter((event) => {
          const timeSinceReceived = (now - event.receivedAt.getTime()) / 1000;
          return !currentEventIds.has(event.id) && !processedEventIdsRef.current.has(event.id) && timeSinceReceived < timeHorizonSeconds;
        });

        // Add new events to rendered list
        if (newEvents.length > 0) {
          newRendered.set(queryId, [...currentRendered, ...newEvents]);
          newEvents.forEach((event) => processedEventIdsRef.current.add(event.id));
          hasChanges = true;
        }
      }

      return hasChanges ? newRendered : prevRendered;
    });
  }, [getAllActiveQueryEvents, timeHorizonSeconds, selectedQueryIds]);

  // Use requestAnimationFrame for smooth updates
  useEffect(() => {
    const scheduleUpdate = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(() => {
        updateEvents();
        // Schedule next update
        setTimeout(() => {
          scheduleUpdate();
        }, 100);
      });
    };

    scheduleUpdate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateEvents]);

  // Clean up when time horizon changes
  useEffect(() => {
    setRenderedEvents(new Map());
    processedEventIdsRef.current.clear();
  }, [timeHorizonSeconds]);

  // Optimized event animation completion handler
  const handleEventAnimationComplete = useCallback((eventId: string, queryId: QueryId) => {
    setRenderedEvents((prev) => {
      const queryEvents = prev.get(queryId);
      if (!queryEvents) return prev;

      const filteredEvents = queryEvents.filter((event) => event.id !== eventId);
      const newRendered = new Map(prev);

      if (filteredEvents.length > 0) {
        newRendered.set(queryId, filteredEvents);
      } else {
        newRendered.delete(queryId);
      }

      return newRendered;
    });

    // Clean up in next tick to avoid sync state updates
    setTimeout(() => {
      processedEventIdsRef.current.delete(eventId);
    }, 0);
  }, []);

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
      {/* Controls */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Timeline Visualization
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography variant="body2" sx={{ minWidth: 120 }}>
            Time Horizon:
          </Typography>
          <Slider
            value={timeHorizonSeconds}
            onChange={(_, value) => {
              onTimeHorizonChange(value as number);
            }}
            min={1}
            max={60}
            step={1}
            valueLabelDisplay="on"
            valueLabelFormat={(value) => `${value.toString()}s`}
            sx={{ flex: 1, maxWidth: 300 }}
          />
        </Box>
        <Typography variant="caption" color="text.secondary">
          Maximum events per query: {MAX_EVENTS_PER_QUERY.toLocaleString()}
        </Typography>
      </Box>

      {/* Timeline Container */}
      <Box
        id="timeline-container"
        sx={{
          flex: 1,
          position: 'relative',
          border: 1,
          borderColor: 'divider',
          borderRadius: 1,
          overflow: 'hidden',
          backgroundColor: 'background.paper',
        }}
      >
        {/* Time axis */}
        <Box
          className="timeline-axis"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 30,
            borderBottom: 1,
            borderColor: 'divider',
            backgroundColor: 'background.default',
            display: 'flex',
            alignItems: 'center',
            px: 1,
          }}
        >
          <Typography variant="caption" sx={{ position: 'absolute', right: 8 }}>
            Now
          </Typography>
          <Typography variant="caption" sx={{ position: 'absolute', left: 8 }}>
            -{timeHorizonSeconds}s
          </Typography>
        </Box>

        {/* Query rows */}
        <Box sx={{ mt: 4, height: 'calc(100% - 30px)' }}>
          {selectedQueryIds.size === 0 ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                color: 'text.secondary',
              }}
            >
              <Typography variant="body2">Select queries from the left panel to see events on the timeline</Typography>
            </Box>
          ) : (
            Array.from(selectedQueryIds).map((queryId: QueryId, index: number) => {
              const queryInfo = queryIdToQueryInfoMap.get(queryId);

              return (
                <Box
                  key={queryId}
                  className="timeline-row"
                  sx={{
                    position: 'relative',
                    height: 60,
                    borderBottom: index < selectedQueryIds.size - 1 ? 1 : 0,
                    borderColor: 'divider',
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                  }}
                >
                  {/* Query label */}
                  <Typography
                    variant="body2"
                    sx={{
                      position: 'absolute',
                      left: 8,
                      zIndex: 2,
                      backgroundColor: 'background.paper',
                      px: 1,
                      borderRadius: 0.5,
                      maxWidth: 150,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Query {queryId} {queryInfo?.query_name && `(${queryInfo.query_name})`}
                  </Typography>

                  {/* Timeline line */}
                  <Box
                    className="timeline-line"
                    sx={{
                      position: 'absolute',
                      left: 160,
                      right: 20,
                      height: 2,
                      backgroundColor: 'divider',
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                  />

                  {/* Animated events for this query */}
                  <Box
                    className="timeline-events-container"
                    sx={{
                      position: 'absolute',
                      left: 160,
                      right: 20,
                      height: '100%',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Render timeline events as React components */}
                    {(renderedEvents.get(queryId) ?? []).map((event) => (
                      <TimelineEventComponent
                        key={event.id}
                        event={event}
                        timeHorizonSeconds={timeHorizonSeconds}
                        queryIndex={getQueryColorIndex(queryId) - 1}
                        onAnimationComplete={() => {
                          handleEventAnimationComplete(event.id, queryId);
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              );
            })
          )}
        </Box>
      </Box>
    </Box>
  );
}
