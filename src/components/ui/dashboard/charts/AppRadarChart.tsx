'use client';

import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface AppRadarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  },
  className?: string;
}

export const AppRadarChart = ({ data, className }: AppRadarChartProps) => {
  const options = {
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 100,
        grid: {
            color: 'rgba(176, 196, 216, 0.6)',  // Color de las líneas de la cuadrícula
          },
          angleLines: {
            color: 'rgba(41, 73, 96, 0.8)',  // Color de las líneas que van del centro hacia afuera
          },
          pointLabels: {
            color: '#666',  // Color de las etiquetas de texto
          }
      },
    },
  };

  return <div className={`h-full w-full ${className}`}>
            <Radar data={data} options={options} />
          </div>;
};

