import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

const iframePolarAreaChart = () => {
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

  const PolarAreaData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Chart Data',
        data: Array.from({ length: 6 }, () => faker.datatype.number({ min: 1, max: 100 }) as number),
        backgroundColor: [
          'rgba(241, 95, 95, 0.5)',
          'rgba(103, 153, 255, 0.5)',
          'rgba(229, 216, 92, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">PolarArea Chart Example</div>
      </div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <PolarArea data={PolarAreaData} />
      </div>
    </div>
  );
};

export default iframePolarAreaChart;
