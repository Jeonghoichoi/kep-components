import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeLineChart from './iframeLineChart';
const BarChart = () => {
  const codeline = `import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
  
  const codeline = () => {
    ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const LineData = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 }) as number) ,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 }) as number) ,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
    
    return(
      <div className="p-6 md:px-2 border-gray-200 border border-solid rounded-lg mt-12">
        <Line options={options} data={LineData} />
      </div>
    )
  }`;
  const items = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/chart/lineChart',
          children: [
            {
              label: 'LineChart',
              path: '/chart/lineChart',
            },
          ],
        },
      ],
    },
  ];
  const PageInfo = {
    title: 'LineChart',
    description: `꺾은선형 차트는 데이터 요소를 선으로 그리는 방법입니다. 종종 추세 데이터를 표시하거나 두 데이터 세트를 비교하는 데 사용됩니다. `,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full w-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={codeline} />
      <IframeLineChart />
    </div>
  );
};

export default BarChart;
