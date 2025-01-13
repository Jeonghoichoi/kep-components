import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframePieChart from './iframePieChart';
const BarChart = () => {
  const codepie = `import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'; 

const codepie = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const PieChartData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
        {
            label: '# of Votes',
            data: Array.from({ length: 6 }, () => faker.datatype.number({ min: 1, max: 100 }) as number),
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
        ],
    };
    return(
        <div className="flex justify-center p-6 md:px-2 border-gray-200 border border-solid rounded-lg mt-12">
            <div className="w-96 h-96">
              <Pie data={PieChartData} />
            </div>
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
          path: '/chart/pieChart',
          children: [
            {
              label: 'PieChart',
              path: '/chart/pieChart',
            },
          ],
        },
      ],
    },
  ];
  const PageInfo = {
    title: 'PieChart',
    description: `원형 및 도넛형 차트는 아마도 가장 일반적으로 사용되는 차트일 것입니다. 세그먼트로 나누어지며, 각 세그먼트의 원호는 각 데이터 조각의 비례 값을 표시합니다. 데이터 간의 관계 비율을 보여주는 효율적입니다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full w-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={codepie} />
      <IframePieChart />
    </div>
  );
};

export default BarChart;
