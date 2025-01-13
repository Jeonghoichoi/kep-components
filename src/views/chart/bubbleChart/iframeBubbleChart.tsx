import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
const IframeBubbleChart = () => {
  ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const BubbleChartData = {
    datasets: [
      {
        label: 'Red dataset',
        data: Array.from({ length: 50 }, () => ({
          x: faker.datatype.number({ min: -100, max: 100 }) as number,
          y: faker.datatype.number({ min: -100, max: 100 }) as number,
          r: faker.datatype.number({ min: 5, max: 20 }) as number,
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Blue dataset',
        data: Array.from({ length: 50 }, () => ({
          x: faker.datatype.number({ min: -100, max: 100 }) as number,
          y: faker.datatype.number({ min: -100, max: 100 }) as number,
          r: faker.datatype.number({ min: 5, max: 20 }) as number,
        })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
      <Bubble options={options} data={BubbleChartData} />
    </div>
  );
};

export default IframeBubbleChart;
