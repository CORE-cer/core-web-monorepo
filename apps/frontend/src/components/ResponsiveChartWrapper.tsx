import React, { useEffect, useRef, useState } from 'react';

type ResponsiveChartWrapperProps = {
  children: React.ReactNode;
  onSizeChange?: (size: { width: number; height: number }) => void;
};

const ResponsiveChartWrapper: React.FC<ResponsiveChartWrapperProps> = ({ children, onSizeChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        onSizeChange?.({ width, height });
        // Force chart re-render by changing key
        setKey((prev) => prev + 1);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [onSizeChange]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '200px',
        position: 'relative',
      }}
      key={key}
    >
      {children}
    </div>
  );
};

export default ResponsiveChartWrapper;
