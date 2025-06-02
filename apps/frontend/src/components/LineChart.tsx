import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import type { Theme } from "@mui/material/styles";

interface SeriesData {
  name: string;
  data: Array<{ x: Date; y: number }>;
}

interface LineChartProps {
  series: SeriesData[];
  colors: string[];
}

interface ChartConfig {
  series: SeriesData[];
  options: ApexOptions;
}

const LineChart: React.FC<LineChartProps> = ({ series, colors }) => {
  const theme = useTheme() as Theme;

  const [config, setConfig] = useState<ChartConfig>({
    series,
    options: {
      stroke: {
        curve: "smooth",
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
      },
      theme: {
        mode: theme.palette.mode,
      },
      xaxis: {
        type: "datetime",
        range: 10 * 1000, // 10 seconds,
        labels: {
          datetimeUTC: false,
        },
      },
      tooltip: {
        enabled: false,
      },
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

  return (
    <ReactApexChart
      height={400}
      options={config.options}
      series={config.series}
      type="line"
    />
  );
};

export default LineChart;
