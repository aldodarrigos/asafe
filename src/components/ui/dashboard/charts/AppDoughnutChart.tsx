'use client'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

interface DoughnutChartProps {
  data: number[];
  labels: string[];
  title?: string;
  className?: string;
}


export function AppDoughnutChart({ data, labels, title = 'Chart', className }: DoughnutChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: [
          'rgba(41, 73, 96, 0.8)',
          'rgba(78, 110, 141, 0.8)',
          'rgba(127, 157, 189, 0.8)',
          'rgba(176, 196, 216, 0.8)',
          'rgba(228,232, 245, 0.8)',
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    width: '100%',
    height: '100%',
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title
      }
    }
  };

  return <div className={`h-full w-full ${className}`}>
            <Doughnut options={options} data={chartData} />
          </div>;
}
