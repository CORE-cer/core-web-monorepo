import { COLORS, MAX_COLORS } from '@/colors';
import type { QueryIdToQueryInfoMap, QueryIdToQueryStatMap } from '@/types';
import { Box, Paper, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { Reorder } from 'framer-motion';

import DonutChart from './DonutChart';
import LineChart from './LineChart';

type ChartsProps = {
  qid2Stats: QueryIdToQueryStatMap;
  queries: QueryIdToQueryInfoMap;
};

type ChartItem = {
  id: string;
  title: string;
  component: React.ReactNode;
};

const Charts: React.FC<ChartsProps> = ({ qid2Stats, queries }) => {
  const common = useMemo(() => {
    const res = { colors: [] as string[], labels: [] as string[] };

    for (const qid of qid2Stats.keys()) {
      const queryInfo = queries.get(qid);
      if (!queryInfo) {
        continue;
      }
      res.colors.push(COLORS[Number(qid) % MAX_COLORS]);
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

  const initialCharts: ChartItem[] = useMemo(() => [
    {
      id: 'hits-per-sec',
      title: 'Hits per sec',
      component: <LineChart series={lineSeries.hitsPerSec} colors={common.colors} />,
    },
    {
      id: 'complex-events-per-sec',
      title: 'Complex events per sec',
      component: <LineChart series={lineSeries.complexEventsPerSec} colors={common.colors} />,
    },
    {
      id: 'total-hits',
      title: 'Total hits',
      component: <DonutChart series={donutSeries.totalHits} labels={common.labels} colors={common.colors} />,
    },
    {
      id: 'total-complex-events',
      title: 'Total Complex Events',
      component: <DonutChart series={donutSeries.totalComplexEvents} labels={common.labels} colors={common.colors} />,
    },
  ], [lineSeries, donutSeries, common]);

  const [charts, setCharts] = useState<ChartItem[]>(initialCharts);

  // Update charts when data changes
  useMemo(() => {
    const updatedCharts: ChartItem[] = [
      {
        id: 'hits-per-sec',
        title: 'Hits per sec',
        component: <LineChart series={lineSeries.hitsPerSec} colors={common.colors} />,
      },
      {
        id: 'complex-events-per-sec',
        title: 'Complex events per sec',
        component: <LineChart series={lineSeries.complexEventsPerSec} colors={common.colors} />,
      },
      {
        id: 'total-hits',
        title: 'Total hits',
        component: <DonutChart series={donutSeries.totalHits} labels={common.labels} colors={common.colors} />,
      },
      {
        id: 'total-complex-events',
        title: 'Total Complex Events',
        component: <DonutChart series={donutSeries.totalComplexEvents} labels={common.labels} colors={common.colors} />,
      },
    ];
    setCharts(updatedCharts);
  }, [lineSeries, donutSeries, common]);

  return (
    <Box sx={{ p: 1 }}>
      <Reorder.Group
        axis="y"
        values={charts}
        onReorder={setCharts}
        style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
        }}
      >
        {charts.map((chart) => (
          <Reorder.Item
            key={chart.id}
            value={chart}
            style={{
              marginBottom: '16px',
            }}
            whileDrag={{
              scale: 1.02,
              zIndex: 1000,
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.1}
          >
            <Paper 
              sx={{ 
                p: 1,
                cursor: 'grab',
                '&:active': {
                  cursor: 'grabbing',
                },
                userSelect: 'none',
                width: '100%',
              }}
            >
              <Typography variant="h6" textAlign="center" sx={{ mb: 1 }}>
                {chart.title}
              </Typography>
              {chart.component}
            </Paper>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </Box>
  );
};

export default Charts;
