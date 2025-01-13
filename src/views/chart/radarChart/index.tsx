import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import IframeRadarChart from './iframeRadarChart';
import CodeBoard from '@/components/common/CodeBoard';

const RadarChart = () => {
  const RadarChartCode = `import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

const ScatterChart = () => {
  // 차트 등록
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  const RadarChartData = {
    // 차트 레이블 
    labels: ['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5', 'Sample 6'],
    // datasets Json 묶음
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
    <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <Radar data={RadarChartData} />
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
          path: '/chart/radarChart',
          children: [
            {
              label: 'RadarChart',
              path: '/chart/radarChart',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: 'RadarChart',
    description: `RadarChart는 여러 데이터 포인트와 데이터 사이의 변화를 표시하는 차트입니다. 두 개 이상의 서로 다른 데이터 세트의 포인트를 비교하는 데 유용하게 사용할 수 있습니다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full w-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={RadarChartCode} />
      <IframeRadarChart />
    </div>
  );
};

export default RadarChart;
