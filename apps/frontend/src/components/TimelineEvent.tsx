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

  // Calculate timing values only once
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

  // Memoize styles to prevent recreation
  const elementStyle = useMemo(
    () =>
      ({
        '--animation-duration': `${timeHorizonSeconds.toString()}s`,
        '--start-delay': `${timingData.timeSinceReceived.toString()}s`,
      }) as React.CSSProperties,
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

    // Set up cleanup timer
    timeoutRef.current = setTimeout(() => {
      onAnimationComplete();
    }, timingData.remainingTime * 1000);

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
      className={`timeline-event timeline-event-query-${(queryIndex + 1).toString()}`}
      title={`Query ${event.queryId.toString()} - Event at ${event.data.end.toLocaleTimeString()}`}
      style={elementStyle}
    />
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(TimelineEventComponent, (prevProps, nextProps) => {
  return (
    prevProps.event.id === nextProps.event.id && prevProps.timeHorizonSeconds === nextProps.timeHorizonSeconds && prevProps.queryIndex === nextProps.queryIndex
  );
});
