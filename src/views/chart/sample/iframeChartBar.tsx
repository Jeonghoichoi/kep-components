import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { CovidType } from '@/interfaces/UtilityInterface';
// const IframeChartBar =  ({covidData}: {covidData: Pick<CovidType, 'casesPerOneMillion' | 'todayRecovered' | 'critical' >}) => { 
const IframeChartBar = ({covidData}:{covidData: Partial<CovidType>}) => { 
    
    ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
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
    const labels = ['casesPerOneMillion', 'todayRecovered', 'critical',]; //x축 기준
    const data = {
        labels,
        datasets: [
            {
            label: '분류 1', //그래프 분류되는 항목
            data: [covidData.casesPerOneMillion, covidData.todayRecovered, covidData.critical], //실제 그려지는 데이터(Y축 숫자)
            borderColor: 'rgb(255, 255, 255)', //그래프 선 color
            backgroundColor: 'rgba(10, 99, 2, 0.2)', //마우스 호버시 나타나는 분류네모 표시 bg
            },
        ],
    };
    return (
        <div className="flex flex-col gap-5 mt-12">
            <div className="flex items-center justify-between">
                <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Bar Chart</div>
            </div>
            <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg overflow-x-auto">
                <Bar options={options} data={data} />
            </div>
        </div>
    );
};

export default IframeChartBar;