import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CovidType } from '@/interfaces/UtilityInterface';
// const IframeChartLine = ({covidData}: {covidData: Pick<CovidType, 'todayCases' | 'todayRecovered' | 'critical' | 'casesPerOneMillion'>}) => { 
const IframeChartLine = ({covidData}:{covidData: Partial<CovidType>}) => { 
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
        
      const labels = ['todayCases', 'todayRecovered', 'critical', 'casesPerOneMillion']; //x축 기준
        
      const data = {
        labels,
        datasets: [
          {
            label: '분류 1', //그래프 분류되는 항목
            data: [covidData.todayCases, covidData.todayRecovered,covidData.critical, covidData.casesPerOneMillion], //실제 그려지는 데이터(Y축 숫자)
            borderColor: 'rgb(255, 99, 132)', //그래프 선 color
            backgroundColor: 'rgba(255, 99, 132, 0.5)', //마우스 호버시 나타나는 분류네모 표시 bg
          },
        ], 
      };
    return (
        <div className="flex flex-col gap-5 mt-12">
            <div className="flex items-center justify-between">
                <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Line Chart</div>
            </div>
            <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg overflow-x-auto">
                  <Line options={options} data={data} />
            </div>
        </div>
    );
  };
  
  export default IframeChartLine;