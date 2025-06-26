import type { TimelineEvent } from '@/types';
import { memo, useEffect, useMemo, useRef } from 'react';

type TimelineEventProps = {
  event: TimelineEvent;
  timeHorizonSeconds: number;
  queryIndex: number;
  onAnimationComplete: () => void;
};

function TimelineEventComponent({ event, timeHorizonSeconds, queryIndex, onAnimationComplete }: TimelineEventProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  // Calculate timing values only once and optimize for performance
  const timingData = useMemo(() => {
    const now = Date.now();
    const timeSinceReceived = (now - event.receivedAt.getTime()) / 1000;
    const shouldShow = timeSinceReceived < timeHorizonSeconds;
    const remainingTime = timeHorizonSeconds - timeSinceReceived;

    return {
      timeSinceReceived: Math.max(0, timeSinceReceived),
      shouldShow,
      remainingTime: Math.max(0, remainingTime),
    };
  }, [event.receivedAt, timeHorizonSeconds]);

  // Memoize styles to prevent recreation - simplified for performance
  const elementStyle = useMemo(
    () => {
      // Use simpler calculation for better performance
      const duration = Math.max(1, timeHorizonSeconds);
      const delay = Math.max(0, timingData.timeSinceReceived);
      
      return {
        '--animation-duration': `${duration.toString()}s`,
        '--start-delay': `${delay.toString()}s`,
      } as React.CSSProperties;
    },
    [timeHorizonSeconds, timingData.timeSinceReceived]
  );

  useEffect(() => {
    if (!timingData.shouldShow) {
      onAnimationComplete();
      return;
    }

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set up cleanup timer with some buffer to ensure smooth cleanup
    const cleanupDelay = Math.max(100, timingData.remainingTime * 1000);
    timeoutRef.current = setTimeout(() => {
      onAnimationComplete();
    }, cleanupDelay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [timingData.shouldShow, timingData.remainingTime, onAnimationComplete]);

  if (!timingData.shouldShow) {
    return null;
  }

  return (
    <div
      ref={elementRef}
      className={`timeline-event timeline-event-query-${Math.min(15, queryIndex + 1).toString()}`}
      title={`Query ${event.queryId.toString()} - Event at ${event.data.end.toLocaleTimeString()}`}
      style={elementStyle}
    />
  );
}

// Enhanced memoization to prevent unnecessary re-renders
export default memo(TimelineEventComponent, (prevProps, nextProps) => {
  // Only re-render if essential props changed
  return (
    prevProps.event.id === nextProps.event.id && 
    prevProps.timeHorizonSeconds === nextProps.timeHorizonSeconds && 
    prevProps.queryIndex === nextProps.queryIndex &&
    prevProps.event.receivedAt.getTime() === nextProps.event.receivedAt.getTime()
  );
});
