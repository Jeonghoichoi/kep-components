import { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { AccidentType } from '@/interfaces/UtilityInterface';
const sampleAPIChart = () => { 
    // 데이터
    const [AccidentData, setAccidentData] = useState<AccidentType[]>([]);
    // Get 메서드
    useEffect(()=>{
        let URL_22 = `https://api.odcloud.kr/api/15070315/v1/uddi:044781cb-3a8c-40af-b004-82018876ceab?
        page=1&perPage=12&returnType=json&serviceKey=OgIx5fkDrdgx5drnzVf2F1cr98POdnMJuz0BWyC9iNIPOfBrWE6ed%2F2Wvh0B5zTCg%2BJjvOSceBrX%2BQmiQgkN7A%3D%3D`  
        axios.get(URL_22)
            .then((res: AxiosResponse) => {
            // 성공 시 처리
            const jsonRes = res.data.data;
            setAccidentData(jsonRes)
            })
            .catch((error: AxiosError) => {
            // 오류 시 처리
            console.error('월별 교통사고 데이터 로드', error.message);
            });
    },[])

    // 차트 구현
    ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
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

    const data = {
        labels:  AccidentData.map( (item) => item.발생월+"월" ),
        datasets: [
            {
                label: '경상자 수', //그래프 분류되는 항목
                data: AccidentData.map( (item) => item.경상자수 ),
                //실제 그려지는 데이터(Y축 숫자)
                borderColor: 'rgb(255, 99, 132)', //그래프 선 color
                backgroundColor: 'rgba(255, 99, 132, 0.5)', //마우스 호버시 나타나는 분류네모 표시 bg
            },
            {
                label: '부상신고자 수', //그래프 분류되는 항목
                data: AccidentData.map((item) => item.부상신고자수),
                //실제 그려지는 데이터(Y축 숫자)
                borderColor: 'rgb(59, 100, 160)', //그래프 선 color
                backgroundColor: 'rgba(59, 55, 248, 0.5)', //마우스 호버시 나타나는 분류네모 표시 bg
            },
            {
                label: '사고건 수', //그래프 분류되는 항목
                data: AccidentData.map((item) => item.사고건수),
                //실제 그려지는 데이터(Y축 숫자)
                borderColor: 'rgb(99, 255, 143)', //그래프 선 color
                backgroundColor: 'rgba(99, 255, 143, 0.5)', //마우스 호버시 나타나는 분류네모 표시 bg
            },
            {
                label: '중상자 수', //그래프 분류되는 항목
                data: AccidentData.map((item) => item.중상자수),
                //실제 그려지는 데이터(Y축 숫자)
                borderColor: 'rgb(255, 193, 80)', //그래프 선 color
                backgroundColor: 'rgba(255, 193, 99, 0.5)', //마우스 호버시 나타나는 분류네모 표시 bg
            },
            {
                label: '사망자 수', //그래프 분류되는 항목
                data: AccidentData.map((item) => item.사망자수),
                //실제 그려지는 데이터(Y축 숫자)
                borderColor: 'rgb(149, 99, 255)', //그래프 선 color
                backgroundColor: 'rgba(149, 99, 255, 0.5)', //마우스 호버시 나타나는 분류네모 표시 bg
            },
        ], 
    };
    // === page 정보 === 
    const items = [
        {
        label: 'Home',
        path: '/home/index',
        children: [
            {
            label: 'Kep-components',
            path: '/echarts/chartSample',
            children: [
                {
                label: 'Charts',
                path: '/echarts/chartSample',
                },
            ],
            },
          ],
        },
    ];
    const PageInfo = {
        title: 'ChartSample02',
        description: '도로교통공단_월별 교통사고 통계',
    };
    return (
        <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 w-full h-full overflow-y-auto">
            <Breadcrumbs items={items} />
            <PageInformation PageInfo={PageInfo} />
           
            <div className="flex w-full gap-5 mt-12">
                <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg overflow-x-auto flex-1">
                    <Line options={options} data={data} />
                </div>
            </div>
        </div>
        );
    };
  
  export default sampleAPIChart;
  
  