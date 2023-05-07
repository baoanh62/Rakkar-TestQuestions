import React, { useRef, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Utils
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface ChartProps {
  chartData: any
}

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Grid Line Settings'
    }
  }
};


export const LineChartCoin = (props: ChartProps) => {
  const chartRef = useRef<ChartJS>(null);

  useEffect(() => {
    const genChart = () => {
      const chart = chartRef.current;

      if (!chart) {
        return <><div>No data</div></>;
      }
    };
    genChart();

  }, []);

  return <Chart ref={chartRef} type='line' data={props?.chartData} options={options} />;
}