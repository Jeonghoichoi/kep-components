import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
const IframeBar = () => {
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
        },
      };
      
      const labels = ['온라인/모바일 앱 커뮤니티', 'SNS', '포털사이트 검색', '육아 블로그', 'TV프로그램', '육아용품 브랜드 홈페이지'];
      const onLineData = {
        labels,
        datasets: [
          {
            label: '온라인',
            data: [68.2, 57.8, 51, 48, 29, 13],
            backgroundColor: [
                'rgb(217, 217, 217, 0.4)',
                'rgb(217, 217, 217, 0.6)',
                'rgb(54, 98, 227, 0.4)',
                'rgb(54, 98, 227, 0.6)',
                'rgb(54, 98, 227, 0.8)',
                'rgb(54, 98, 227, 1)',
              ],
          }
        ],
      };
    return (
        <>
            <Bar options={options} data={onLineData} />
        </>
    )
};
export default IframeBar;
