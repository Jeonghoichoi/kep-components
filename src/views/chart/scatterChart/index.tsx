import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeScatterChart from './iframeScatterChart';

const ScatterChart = () => {
  const ScatterChartCode = `import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

  const ScatterChart = () => {
    // 차트 등록
    ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

    // 옵션 설정
    const options: ChartOptions<'scatter'> = {
      plugins: {
        legend: {
          display: true, // 범례 표시 여부
          position: 'top', // 범례 위치 (top, bottom, left, right)
        },
      },
      scales: {
        x: {
          type: 'linear', // X-축 유형
          position: 'bottom', // X-축 위치
          title: {
            display: true, // X-축 제목 표시 여부
            text: 'X-Axis Title', // X-축 제목 텍스트
          },
        },
        y: {
          type: 'linear', // Y-축 유형
          position: 'left', // Y-축 위치
          title: {
            display: true, // Y-축 제목 표시 여부
            text: 'Y-Axis Title', // Y-축 제목 텍스트
          },
          beginAtZero: true, // Y-축을 0에서 시작하도록 설정
        },
      },
    };
  
    // 더미 데이터 
    const ScatterChartData = {
      // datasets Json 묶음.
      datasets: [
        {
          label: 'A dataset',
          data: Array.from({ length: 100 }, () => ({
            x: faker.datatype.number({ min: -100, max: 100 }) as number,
            y: faker.datatype.number({ min: -100, max: 100 }) as number,
          })),
          backgroundColor: 'rgba(255, 99, 132, 1)',
        },
        {
          label: 'B dataset',
          data: Array.from({ length: 100 }, () => ({
            x: faker.datatype.number({ min: -100, max: 100 }) as number,
            y: faker.datatype.number({ min: -100, max: 100 }) as number,
          })),
          backgroundColor: '#1c90fb',
        },
      ],
    };

    return (
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        // 차트 등록
        <Scatter options={options} data={ScatterChartData} />
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
          path: '/chart/scatterChart',
          children: [
            {
              label: 'ScatterChart',
              path: '/chart/scatterChart',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: 'ScatterChart',
    description: `Scatter Chart(분산형 차트)는 X축을 직선축으로 변경한 기본적인 직선 차트를 기반으로 만든다. 사용하기 위해서는 X와 Y의 속성을 포함하는 객체로 데이터를 전달해야한다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full w-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={ScatterChartCode} />
      <IframeScatterChart />
    </div>
  );
};

export default ScatterChart;
