import { ChartOptions } from 'chart.js';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CovidTypeSample3 } from '@/interfaces/UtilityInterface';
import { numberFormatPerson } from '@/utils/util';

const RightComponents = (props: { data: CovidTypeSample3[]; selectedCountryName: string }) => {
  ChartJS.register(ArcElement, Title, Tooltip, Legend);

  const filteredData = props.data.filter((item) => item.countryNm === props.selectedCountryName);

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `${filteredData[0].countryNm} 지역 데이터 `,
      },
    },
  };

  const DounutChartData = {
    labels: ['국내 사망률', '전일대비 확진자', '전일대비 해외확진자', '전일대비 국내확진자', '코로나 19 발생률'],
    datasets: [
      {
        label: 'COVID 19 Temp Data',
        data: [
          filteredData[0].deathCnt,
          filteredData[0].incDec,
          filteredData[0].incDecF,
          filteredData[0].incDecK,
          filteredData[0].qurRate,
        ],
        hoverBackgroundColor: [
          'rgba(123, 81, 246, 1)',
          'rgba(213, 202, 251, 1)',
          'rgba(177, 174, 187, 1)',
          'rgba(217, 217, 217, 1)',
          'rgba(255, 217, 217, 1)',
        ],
        backgroundColor: [
          'rgba(123, 81, 246, 0.4)',
          'rgba(213, 202, 251, 0.4)',
          'rgba(177, 174, 187, 0.4)',
          'rgba(217, 217, 217, 0.4)',
          'rgba(255, 217, 217, 0.4)',
        ],
        borderColor: [
          'rgba(123, 81, 246, .6)',
          'rgba(213, 202, 251, .6)',
          'rgba(177, 174, 187, .6)',
          'rgba(217, 217, 217, .6)',
          'rgba(255, 217, 217, .6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 border border-gray-500 h-full overflow-y-auto w-full flex flex-col gap-y-4">
      <Doughnut data={DounutChartData} options={options} />
      {filteredData.map((item) => (
        <div key={item.countryNm} className="flex flex-wrap flex-grow gap-y-4 p-4 justify-between">
          <div className="flex items-center justify-center w-60 p-4 border border-solid border-gray-200 rounded-md">
            국내 사망자: {numberFormatPerson(item.deathCnt)}
          </div>
          <div className="flex items-center justify-center w-60 p-4 border border-solid border-gray-200 rounded-md">
            전일대비 확진자: {numberFormatPerson(item.incDec)}
          </div>
          <div className="flex items-center justify-center w-60 p-4 border border-solid border-gray-200 rounded-md">
            전일대비 해외확진자: {numberFormatPerson(item.incDecF)}
          </div>
          <div className="flex items-center justify-center w-60 p-4 border border-solid border-gray-200 rounded-md">
            전일대비 국내확진자: {numberFormatPerson(item.incDecK)}
          </div>
          <div className="flex items-center justify-center w-60 p-4 border border-solid border-gray-200 rounded-md">
            코로나 19 발생률: {item.qurRate}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightComponents;
