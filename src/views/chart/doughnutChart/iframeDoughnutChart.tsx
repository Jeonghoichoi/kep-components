import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

const IframeDoughnutChart = () => {
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
        borderColor: ['rgba(123, 81, 246, .6)', 'rgba(213, 202, 251, .6)', 'rgba(177, 174, 187, .6)', 'rgba(217, 217, 217, .6)'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="flex flex-col items-center p-6 md:px-2 border-gray-200 border border-solid rounded-lg overflow-x-auto">
      <h3 className="text-base font-bold text-gray-500 mb-4">CX(고객 경험) 관리 인식 및 CS와 CX 차이 인지 여부</h3>
      <div className="w-96 h-96 mb-4">
        <Doughnut data={DoughnutChartData} />
      </div>
      <span className="text-xs text-blue-500">출처: 오픈서베이</span>
    </div>
  );
};

export default IframeDoughnutChart;
