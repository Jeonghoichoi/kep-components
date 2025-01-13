import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

const IframeStackedBarChart = () => {
  ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );
  
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const StackedChartData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 }) as number),
        backgroundColor: 'rgb(255, 99, 132, 0.4)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 }) as number),
        backgroundColor: 'rgb(75, 192, 192, 0.4)',
      },
      {
        label: 'Dataset 3',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 }) as number),
        backgroundColor: 'rgb(53, 162, 235, 0.4)',
      },
    ],
  };
  return (
    <div className="p-6 md:px-2 border-gray-200 border border-solid rounded-lg mt-12">
        <Bar options={options} data={StackedChartData} />
    </div>
  );
};

export default IframeStackedBarChart;
