import React, { useRef, useEffect, useState } from 'react';
import type { ChartData, ChartArea } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
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
  chartData: unknown
}

export const LineChartCoin = (props: ChartProps) => {
  const chartRef = useRef<ChartJS>(null);
  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return <><div>No data</div></>;
    }
  }, []);

  return <Chart ref={chartRef} type='line' data={props?.chartData} />;
}