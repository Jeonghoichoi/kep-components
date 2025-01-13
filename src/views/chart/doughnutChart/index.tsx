import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeDoughnutChart from './iframeDoughnutChart';
const BarChart = () => {
  const codedoughnut = `import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

  const codedoughnut = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const DoughnutChartData = {
        labels: ['차이를 알고, 설명 가능', '차이를 대략 알지만, 설명은 어려움', '차이를 모름', '기타'],
        datasets: [
          {
            label: '대기업',
            data: Array.from({ length: 4 }, () => faker.datatype.number({ min: 1, max: 100 }) as number),
            hoverBackgroundColor: [
              'rgba(123, 81, 246, 1)',
              'rgba(213, 202, 251, 1)',
              'rgba(177, 174, 187, 1)',
              'rgba(217, 217, 217, 1)',
            ],
            backgroundColor: [
              'rgba(123, 81, 246, 0.4)',
              'rgba(213, 202, 251, 0.4)',
              'rgba(177, 174, 187, 0.4)',
              'rgba(217, 217, 217, 0.4)', 
            ],
            borderColor: [
              'rgba(123, 81, 246, .6)',
              'rgba(213, 202, 251, .6)',
              'rgba(177, 174, 187, .6)',
              'rgba(217, 217, 217, .6)',
            ],
            borderWidth: 1,
          }
        ]
      };
		return (
      <div className="flex flex-col items-center p-6 md:px-2 border-gray-200 border border-solid rounded-lg overflow-x-auto">
          <h3 className="text-base font-bold text-gray-500 mb-4">CX(고객 경험) 관리 인식 및 CS와 CX 차이 인지 여부</h3>
          <div className="w-96 h-96 mb-4">
              <Doughnut data={DoughnutChartData} />     
          </div > 
          <span className="text-xs text-blue-500">출처: 오픈서베이</span>
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
          path: '/chart/doughnutChart',
          children: [
            {
              label: 'DoughnutChart',
              path: '/chart/doughnutChart',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: 'DoughnutChart',
    description: `원형 및 도넛형 차트는 아마도 가장 일반적으로 사용되는 차트일 것입니다. 
    세그먼트로 나누어지며, 각 세그먼트의 원호는 각 데이터 조각의 비례 값을 표시합니다. 데이터 간의 관계 비율을 보여주는 효율적입니다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full w-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={codedoughnut} />
      <IframeDoughnutChart />
    </div>
  );
};

export default BarChart;
