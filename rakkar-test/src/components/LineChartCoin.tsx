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
import { PriceChangeModel } from '@/services/getPriceChangeRange';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const colors = [
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'teal',
  'blue',
  'purple',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Price Chart',
      data: [],
    },
  ],
};

interface ChartProps {
    priceChangeModel: PriceChangeModel,
}

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, "#00ffff");
  gradient.addColorStop(0.5, "#00ff00");
  gradient.addColorStop(1, "#0000ff");

  return gradient;
}

export const LineChartCoin = (props: ChartProps) => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }
   
    const chartData = {
      ...data,
      datasets: data.datasets.map(dataset => ({
        ...dataset,
        borderColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);

  return <Chart ref={chartRef} type='line' data={chartData} />;
}
