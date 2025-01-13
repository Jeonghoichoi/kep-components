import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeBubbleChart from './iframeBubbleChart';
const BarChart = () => {
  const codebubble = `import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

  const codedoughnut = () => {
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
      <div className="flex flex-col gap-5 mt-12">
        <Bubble options={options} data={BubbleChartData} />
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
          path: '/chart/bubbleChart',
          children: [
            {
              label: 'BubbleChart',
              path: '/chart/bubbleChart',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: 'BubbleChart',
    description: `버블 차트는 세 가지 차원의 데이터를 동시에 표시하는 데 사용됩니다. 
    거품의 위치는 처음 두 치수와 해당 수평 및 수직 축에 의해 결정됩니다. 세 번째 차원은 개별 거품의 크기로 표시됩니다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full w-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={codebubble} />
      <IframeBubbleChart />
    </div>
  );
};

export default BarChart;
