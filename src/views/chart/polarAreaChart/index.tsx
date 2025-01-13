import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import IframePolarAreaChart from './iframePolarAreaChart';
import CodeBoard from '@/components/common/CodeBoard';

const PolarAreaChart = () => {
  const PolarAreaChartCode = `import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

  const PolarAreaData = {
    // 차트 전체 레이블
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    // 차트 데이터 셋
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
  }

  return (
    <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
      <PolarArea data={PolarAreaData} />
    </div>
  );`;

  const items = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/chart/polarAreaChart',
          children: [
            {
              label: 'PolarAreaChart',
              path: '/chart/polarAreaChart',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: 'PolarAreaChart',
    description: `PolarAreaChart는 원형 차트와 유사한 형식이며, 비교하려는 데이터를 각도(호) 형태로 시각화하고 컨텍스트에 대한 값의 척도를 표시하려는 경우에 유용하게 사용할 수 있습니다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full w-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={PolarAreaChartCode} />
      <IframePolarAreaChart />
    </div>
  );
};

export default PolarAreaChart;
