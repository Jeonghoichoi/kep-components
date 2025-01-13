import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CovidType } from '@/interfaces/UtilityInterface';
// const IframeChartDoughnut =  ({covidData}: {covidData: Pick<CovidType, 'cases' | 'recovered' | 'deaths' >}) => { 
const IframeChartDoughnut =  ({covidData}:{covidData: Partial<CovidType>}) => { 
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['cases', 'recovered', 'deaths'],
        datasets: [
          {
            label: '',
            data: [covidData.cases, covidData.recovered, covidData.deaths],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
          },
        ],
      };
    return (
        <div className="flex flex-col gap-5 mt-12">
            <div className="flex items-center justify-between">
                <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Doughnut Chart</div>
            </div>
            <div className="flex justify-center p-6 md:px-2 border-gray-200 border border-solid rounded-lg overflow-x-auto">
                <div className="w-96 h-96">
                  <Doughnut data={data} />     
                </div> 
            </div>
        </div>
    );
};

export default IframeChartDoughnut;