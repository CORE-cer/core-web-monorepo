import { useTheme } from '@emotion/react';
import type { Theme } from '@mui/material/styles';
import type { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

type DonutChartProps = {
  series: number[];
  labels: string[];
  colors: string[];
};

type ChartConfig = {
  series: number[];
  options: ApexOptions;
};

const DonutChart: React.FC<DonutChartProps> = ({ series, labels, colors }) => {
  const theme = useTheme() as Theme;

  const [config, setConfig] = useState<ChartConfig>({
    series,
    options: {
      chart: {
        animations: {
          enabled: true,
          dynamicAnimation: {
            speed: 300,
          },
        },
        type: 'donut',
        height: 'auto',
        redrawOnParentResize: true,
        redrawOnWindowResize: true,
      },
      theme: {
        mode: theme.palette.mode,
      },
      labels,
      colors,
      tooltip: {
        enabled: false,
      },
      legend: {
        position: 'bottom',
      },
      dataLabels: {
        formatter(val: number, opts: unknown) {
          if (!opts || typeof opts !== 'object' || !('seriesIndex' in opts) || typeof opts.seriesIndex !== 'number') {
            return '';
          }
          const str = `${series[opts.seriesIndex].toString()} (${val.toFixed(1)}%)`;
          return str;
        },
        style: {
          fontSize: '12px',
          fontFamily: 'Roboto',
        },
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          blur: 2,
          color: '#000',
          opacity: 1,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: '60%',
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
              },
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 200,
            },
            legend: {
              position: 'bottom',
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
        labels,
        colors,
        theme: {
          ...prev.options.theme,
          mode: theme.palette.mode,
        },
        dataLabels: {
          ...prev.options.dataLabels,
          formatter(val: number, opts: unknown) {
            if (!opts || typeof opts !== 'object' || !('seriesIndex' in opts) || typeof opts.seriesIndex !== 'number') {
              return '';
            }
            const str = `${series[opts.seriesIndex].toString()} (${val.toFixed(1)}%)`;
            return str;
          },
        },
      },
    }));
  }, [theme, series, labels, colors]);

  return <ReactApexChart height="100%" width="100%" options={config.options} series={config.series} type="donut" />;
};

export default DonutChart;
