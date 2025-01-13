import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

const iframeRadarChart = () => {
  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

  const RadarChartData = {
    labels: ['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5', 'Sample 6'],
    datasets: [
      {
        label: 'Sample 1 DataSet',
        fill: true,
        data: Array.from({ length: 6 }, () => faker.datatype.number({ min: 10, max: 100 }) as number),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
      },
      {
        label: 'Sample 2 DataSet',
        fill: true,
        data: Array.from({ length: 6 }, () => faker.datatype.number({ min: 10, max: 100 }) as number),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
      },
      {
        label: 'Sample 3 DataSet',
        fill: true,
        data: Array.from({ length: 6 }, () => faker.datatype.number({ min: 10, max: 100 }) as number),
        backgroundColor: 'rgba(229, 216, 92, 0.2)',
        borderColor: 'rgb(229, 216, 92)',
        pointBackgroundColor: 'rgb(229, 216, 92)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(229, 216, 92)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Radar Chart Example</div>
      </div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <Radar data={RadarChartData} />
      </div>
    </div>
  );
};

export default iframeRadarChart;
