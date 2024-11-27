'use client';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface AppBarChartProps {
  data: number[];
  labels: string[];
  title?: string;
  className?: string;
}

export function AppBarChart({ data, labels, title = 'Bar Chart', className }: AppBarChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 1,
      },
    ],
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
        text: title,
      },
    },
  };

  return <div className={`h-full w-full ${className}`}>
            <Bar data={chartData} options={options} />
          </div>;
}
