import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

const iframeRadarChart = () => {
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

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

  const ScatterChartData = {
    // datasets Json 묶음
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
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Scatter Chart Example</div>
      </div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <Scatter options={options} data={ScatterChartData} />
      </div>
    </div>
  );
};

export default iframeRadarChart;
