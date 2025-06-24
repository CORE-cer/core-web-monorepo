import { COLORS, MAX_COLORS } from '@/colors';
import type { QueryIdToQueryInfoMap, QueryIdToQueryStatMap } from '@/types';
import { Box } from '@mui/material';
import { type RefObject, useMemo, useRef, useState } from 'react';

import DonutChart from './DonutChart';
import DraggableChart from './DraggableChart';
import LineChart from './LineChart';
import ResponsiveChartWrapper from './ResponsiveChartWrapper';

type ChartsProps = {
  qid2Stats: QueryIdToQueryStatMap;
  queries: QueryIdToQueryInfoMap;
};

type ChartItem = {
  id: string;
  title: string;
  component: React.ReactNode;
  position: { x: number; y: number };
  size: { width: number; height: number };
};

const ChartsFreeform: React.FC<ChartsProps> = ({ qid2Stats, queries }) => {
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const justResizedRefs = useRef<Record<string, RefObject<boolean>>>({});

  const getJustResizedRef = (chartId: string) => {
    justResizedRefs.current[chartId] = { current: false };
    return justResizedRefs.current[chartId];
  };

  const common = useMemo(() => {
    const res = { colors: [] as string[], labels: [] as string[] };

    for (const qid of qid2Stats.keys()) {
      const queryInfo = queries.get(qid);
      if (!queryInfo) {
        continue;
      }
      let color = COLORS[Number(qid) % MAX_COLORS] as string;
      res.colors.push(color);
      res.labels.push(queryInfo.query_name);
    }

    return res;
  }, [qid2Stats, queries]);

  const donutSeries = useMemo(() => {
    const res = {
      totalHits: [] as number[],
      totalComplexEvents: [] as number[],
    };
    for (const queryStats of qid2Stats.values()) {
      res.totalHits.push(queryStats.hitStats.total);
      res.totalComplexEvents.push(queryStats.complexEventStats.total);
    }
    return res;
  }, [qid2Stats]);

  const lineSeries = useMemo(() => {
    const res = {
      hitsPerSec: [] as {
        name: string;
        data: { x: Date; y: number }[];
      }[],
      complexEventsPerSec: [] as {
        name: string;
        data: { x: Date; y: number }[];
      }[],
    };
    for (const [queryId, queryStats] of qid2Stats.entries()) {
      const queryInfo = queries.get(queryId);
      if (!queryInfo) {
        continue;
      }
      res.hitsPerSec.push({
        name: queryInfo.query_name,
        data: queryStats.perSec.map((s) => ({ x: s.time, y: s.numHits })),
      });
      res.complexEventsPerSec.push({
        name: queryInfo.query_name,
        data: queryStats.perSec.map((s) => ({ x: s.time, y: s.numComplexEvents })),
      });
    }
    return res;
  }, [qid2Stats, queries]);

  const initialCharts: ChartItem[] = useMemo(
    () => [
      {
        id: 'hits-per-sec',
        title: 'Hits per sec',
        component: (
          <ResponsiveChartWrapper>
            <LineChart series={lineSeries.hitsPerSec} colors={common.colors} />
          </ResponsiveChartWrapper>
        ),
        position: { x: 20, y: 20 },
        size: { width: 400, height: 300 },
      },
      {
        id: 'complex-events-per-sec',
        title: 'Complex events per sec',
        component: (
          <ResponsiveChartWrapper>
            <LineChart series={lineSeries.complexEventsPerSec} colors={common.colors} />
          </ResponsiveChartWrapper>
        ),
        position: { x: 440, y: 20 },
        size: { width: 400, height: 300 },
      },
      {
        id: 'total-hits',
        title: 'Total hits',
        component: (
          <ResponsiveChartWrapper>
            <DonutChart series={donutSeries.totalHits} labels={common.labels} colors={common.colors} />
          </ResponsiveChartWrapper>
        ),
        position: { x: 20, y: 400 },
        size: { width: 400, height: 300 },
      },
      {
        id: 'total-complex-events',
        title: 'Total Complex Events',
        component: (
          <ResponsiveChartWrapper>
            <DonutChart series={donutSeries.totalComplexEvents} labels={common.labels} colors={common.colors} />
          </ResponsiveChartWrapper>
        ),
        position: { x: 440, y: 400 },
        size: { width: 400, height: 300 },
      },
    ],
    [common.colors, common.labels, donutSeries.totalComplexEvents, donutSeries.totalHits, lineSeries.complexEventsPerSec, lineSeries.hitsPerSec]
  );

  const [charts, setCharts] = useState<ChartItem[]>(initialCharts);

  // Update chart components when data changes, but preserve positions
  useMemo(() => {
    setCharts((prevCharts) =>
      prevCharts.map((chart) => {
        switch (chart.id) {
          case 'hits-per-sec':
            return {
              ...chart,
              component: (
                <ResponsiveChartWrapper>
                  <LineChart series={lineSeries.hitsPerSec} colors={common.colors} />
                </ResponsiveChartWrapper>
              ),
            };
          case 'complex-events-per-sec':
            return {
              ...chart,
              component: (
                <ResponsiveChartWrapper>
                  <LineChart series={lineSeries.complexEventsPerSec} colors={common.colors} />
                </ResponsiveChartWrapper>
              ),
            };
          case 'total-hits':
            return {
              ...chart,
              component: (
                <ResponsiveChartWrapper>
                  <DonutChart series={donutSeries.totalHits} labels={common.labels} colors={common.colors} />
                </ResponsiveChartWrapper>
              ),
            };
          case 'total-complex-events':
            return {
              ...chart,
              component: (
                <ResponsiveChartWrapper>
                  <DonutChart series={donutSeries.totalComplexEvents} labels={common.labels} colors={common.colors} />
                </ResponsiveChartWrapper>
              ),
            };
          default:
            return chart;
        }
      })
    );
  }, [lineSeries, donutSeries, common]);

  const handleDragEnd = (id: string, newPosition: { x: number; y: number }) => {
    setCharts((prevCharts) => prevCharts.map((chart) => (chart.id === id ? { ...chart, position: newPosition } : chart)));
  };

  const handleResize = (id: string, newSize: { width: number; height: number }) => {
    setCharts((prevCharts) => prevCharts.map((chart) => (chart.id === id ? { ...chart, size: newSize } : chart)));
  };

  const handleDragStart = (id: string) => {
    setDraggingId(id);
  };

  const handleDragStop = () => {
    setDraggingId(null);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        p: 2,
      }}
    >
      {charts.map((chart) => (
        <DraggableChart
          key={chart.id}
          id={chart.id}
          title={chart.title}
          position={chart.position}
          size={chart.size}
          onDragEnd={handleDragEnd}
          onResize={handleResize}
          onDragStart={handleDragStart}
          onDragStop={handleDragStop}
          isDragging={draggingId === chart.id}
          justResizedRef={getJustResizedRef(chart.id)}
        >
          {chart.component}
        </DraggableChart>
      ))}
    </Box>
  );
};

export default ChartsFreeform;
