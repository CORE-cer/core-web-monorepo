import { Grid2 as Grid, Typography, Paper } from "@mui/material";
import { useMemo } from "react";
import DonutChart from "./DonutChart";
import { COLORS, MAX_COLORS } from "../colors";
import LineChart from "./LineChart";

interface HitStats {
  max: number;
  total: number;
}

interface PerSecStat {
  numHits: number;
  numComplexEvents: number;
  time: Date;
}

interface QueryStats {
  perSec: PerSecStat[];
  hitStats: HitStats;
  complexEventStats: HitStats;
}

interface QueryInfo {
  result_handler_identifier: string;
  query_name: string;
  active: boolean;
}

interface QueriesMap {
  [key: string]: QueryInfo;
}

interface Qid2Stats {
  [qid: string]: QueryStats;
}

interface ChartsProps {
  qid2Stats: Qid2Stats;
  queries: QueriesMap;
}

const Charts: React.FC<ChartsProps> = ({ qid2Stats, queries }) => {
  const common = useMemo(() => {
    const res = { colors: [] as string[], labels: [] as string[] };

    for (const qid in qid2Stats) {
      res.colors.push(COLORS[Number(qid) % MAX_COLORS]);
      res.labels.push(queries[qid]?.query_name || "");
    }

    return res;
  }, [qid2Stats, queries]);

  const donutSeries = useMemo(() => {
    const res = {
      totalHits: [] as number[],
      totalComplexEvents: [] as number[],
    };
    for (const qid in qid2Stats) {
      const stats = qid2Stats[qid];
      res.totalHits.push(stats.hitStats.total);
      res.totalComplexEvents.push(stats.complexEventStats.total);
    }
    return res;
  }, [qid2Stats]);

  const lineSeries = useMemo(() => {
    const res = {
      hitsPerSec: [] as Array<{
        name: string;
        data: Array<{ x: Date; y: number }>;
      }>,
      complexEventsPerSec: [] as Array<{
        name: string;
        data: Array<{ x: Date; y: number }>;
      }>,
    };
    for (const qid in qid2Stats) {
      const stats = qid2Stats[qid];
      res.hitsPerSec.push({
        name: queries[qid]?.query_name || "",
        data: stats.perSec.map((s) => ({ x: s.time, y: s.numHits })),
      });
      res.complexEventsPerSec.push({
        name: queries[qid]?.query_name || "",
        data: stats.perSec.map((s) => ({ x: s.time, y: s.numComplexEvents })),
      });
      console.log(stats);
    }
    return res;
  }, [qid2Stats, queries]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: 1,
      }}
    >
      <Grid size={{ xs: 12 }}>
        <Paper sx={{ p: 1 }}>
          <Typography variant="h6" textAlign="center">
            {"Hits per sec"}
          </Typography>
          <LineChart series={lineSeries.hitsPerSec} colors={common.colors} />
        </Paper>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Paper sx={{ p: 1 }}>
          <Typography variant="h6" textAlign="center">
            {"Complex events per sec"}
          </Typography>
          <LineChart
            series={lineSeries.complexEventsPerSec}
            colors={common.colors}
          />
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Paper sx={{ p: 1 }}>
          <Typography variant="h6" textAlign="center">
            {"Total hits"}
          </Typography>
          <DonutChart
            series={donutSeries.totalHits}
            labels={common.labels}
            colors={common.colors}
          />
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Paper sx={{ p: 1 }}>
          <Typography variant="h6" textAlign="center">
            {"Total Complex Events"}
          </Typography>
          <DonutChart
            series={donutSeries.totalComplexEvents}
            labels={common.labels}
            colors={common.colors}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Charts;
