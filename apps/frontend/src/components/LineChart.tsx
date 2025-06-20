import { useTheme } from '@emotion/react';
import type { Theme } from '@mui/material/styles';
import type { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

type SeriesData = {
  name: string;
  data: { x: Date; y: number }[];
};

type LineChartProps = {
  series: SeriesData[];
  colors: string[];
};

type ChartConfig = {
  series: SeriesData[];
  options: ApexOptions;
};

const LineChart: React.FC<LineChartProps> = ({ series, colors }) => {
  const theme = useTheme() as Theme;

  const [config, setConfig] = useState<ChartConfig>({
    series,
    options: {
      stroke: {
        curve: 'smooth',
      },
      colors,
      chart: {
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: true,
          dynamicAnimation: {
            speed: 300,
          },
        },
        type: 'line',
        height: 'auto',
        redrawOnParentResize: true,
        redrawOnWindowResize: true,
      },
      theme: {
        mode: theme.palette.mode,
      },
      xaxis: {
        type: 'datetime',
        range: 10 * 1000, // 10 seconds,
        labels: {
          datetimeUTC: false,
        },
      },
      tooltip: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 200,
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    setConfig((prev) => ({
      ...prev,
      series,
      options: {
        ...prev.options,
        colors,
        theme: {
          ...prev.options.theme,
          mode: theme.palette.mode,
        },
      },
    }));
  }, [theme, series, colors]);

  return <ReactApexChart height="100%" width="100%" options={config.options} series={config.series} type="line" />;
};

export default LineChart;
