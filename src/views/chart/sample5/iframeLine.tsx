import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
const IframeLine = () => {
    ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
        },
      };
      const labels = ['현재 자녀 없음', '영유아 0~36개월', '미취학 아동 4~7세', '초등생 8~13세', '중/고생 14~19세', '성인 19세 이상'];
      const data = {
        labels,
        datasets: [
          {
            label: '30~34세',
            data: [47.8, 35.9, 18.8, 7.5, 0.8, 0.2],
            borderColor: 'rgb(217, 217, 217)',
            backgroundColor: 'rgb(217, 217, 217)',
          },
          {
            label: '35~39세',
            data: [24.7, 27.8, 33.8, 32.5, 4.1, 0.5],
            borderColor: 'rgb(248, 113, 154, 0.5)',
            backgroundColor: 'rgb(248, 113, 154, 0.5)',
          },
          {
            label: '40~44세',
            data: [13.7, 9.3, 23.9, 55.4, 22.3, 3.2],
            borderColor: 'rgb(248, 113, 154)',
            backgroundColor:'rgb(248, 113, 154)',
          },
        ],
      };
    return (
        <>
            <Line options={options} data={data} />
        </>
    )
};
export default IframeLine;
