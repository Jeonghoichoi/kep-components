import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import IframeBarChart from './iframeBarChart';
import IframeHorizontalBarChart from './iframeHorizontalBarChart';
import IframeStackedBarChart from './iframeStackedBar';
import IframeGroupedBarChart from './iframeGroupedBarChart';
import CodeBoard from '@/components/common/CodeBoard';
const BarChart = () => {
  const codebar = `import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
  
const codebar = () => {
    ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart',
        },
      },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const BarChartData = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 }) as number),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 }) as number),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
    return(
      <div className="flex flex-col gap-5 mt-12">
          <Bar options={options} data={data} />
      </div>
    )
  }`;
  const codehorizontalbar = `const codehorizontalbar = () => {
    ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );
    const options = {
      indexAxis: 'y' as const,
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right' as const,
        },
        title: {
          display: true,
          text: 'Chart.js Horizontal Bar Chart',
        },
      },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const HorizontalChartData = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 }) as number),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 }) as number),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
    return(
      <div className="flex flex-col gap-5 mt-12">
          <Bar options={options} data={data} />
      </div>
    )
  }`;
  const codestackedbar = `const codestackedbar = () => {
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
    return(
      <div className="flex flex-col gap-5 mt-12">
          <Bar options={options} data={data} />
      </div>
    )
  }`;

  const codegroupedbar = `const codestackedbar = () => {
    ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );
  
    const options = {
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
          },
        },
        responsive: true,
        interaction: {
          mode: 'index' as const,
          intersect: false,
        },
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
    const GroupChartData = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -100, max: 100 }) as number),
            backgroundColor: 'rgb(255, 99, 132, 0.4)',
            stack: 'Stack 0',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -100, max: 100 }) as number),
            backgroundColor: 'rgb(75, 192, 192, 0.4)',
            stack: 'Stack 0',
          },
          {
            label: 'Dataset 3',
            data: labels.map(() => faker.datatype.number({ min: -100, max: 100 }) as number),
            backgroundColor: 'rgb(53, 162, 235, 0.4)',
            stack: 'Stack 1',
          },
        ],
    };
    return(
      <div className="flex flex-col gap-5 mt-12">
          <Bar options={options} data={data} />
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
          path: '/chart/barChart',
          children: [
            {
              label: 'BarChart',
              path: '/chart/barChart',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: 'BarChart',
    description: `막대 차트는 데이터 값을 세로 막대로 표시하는 방법을 제공합니다. 때로는 추세 데이터를 표시하고 여러 데이터 세트를 나란히 비교하는 데 사용됩니다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full w-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      {/* 수직 막대 그래프 */}
      <CodeBoard code={codebar} />
      <IframeBarChart />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 수평 막대 그래프*/}
      <CodeBoard code={codehorizontalbar} />
      <IframeHorizontalBarChart />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* staked 막대그래프 */}
      <CodeBoard code={codestackedbar} />
      <IframeStackedBarChart />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* staked 막대그래프 */}
      <CodeBoard code={codegroupedbar} />
      <IframeGroupedBarChart />
    </div>
  );
};

export default BarChart;
