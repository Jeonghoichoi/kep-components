import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const IframeDoughnut = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ['온라인 이용', '오프라인 이용'],
        datasets: [
          {
            label: '# of Votes',
            data: [90, 10],
            backgroundColor: [
              'rgb(54, 98, 227, 0.5)',
              'rgb(54, 98, 227, 0.1)',
            ],
            hoverOffset: 4
          },
        ],
      };
    return (
        <div className='flex flex-col items-center justify-center p-10'>
            <Doughnut data={data} />
        </div>
    )
};
export default IframeDoughnut;
