'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  data: number[];
  labels: string[];
  title?: string;
  className?: string;
}

export function AppLineChart({ data, labels, title = 'Chart', className }: LineChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data: data,
        borderColor: 'rgb(41, 73, 96)',
        tension: 0.5
      }
    ]
  };

  const options = {
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
            <Line options={options} data={chartData} />
          </div>;
}
