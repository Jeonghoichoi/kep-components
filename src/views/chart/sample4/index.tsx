import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import * as XLSX from 'xlsx';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';

const sample4 = () => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const getDatesLabels = (selectedKey: string) => {
    // 차트 데이터 라벨을 구해보자!!!
    const currentDate = new Date(); // 현재 날짜
    const currentMonth = currentDate.getMonth(); // 현재 월
    const currentYear = currentDate.getFullYear(); // 현재 연도
    const firstDay = new Date(currentYear, currentMonth, 1); // 해당 월의 1일
    const lastDay = new Date(currentYear, currentMonth + 1, 0); // 해당 월의 마지막 날

    if (selectedKey === 'D') {
      // 일간 데이터 생성
      const dates: string[] = [];
      for (let i = 1; i <= lastDay.getDate(); i++) {
        dates.push(`${currentYear}-${currentMonth + 1}-${i}`);
      }
      return dates;
    } else if (selectedKey === 'W') {
      // 주간 데이터 생성
      const weekStartDates: string[] = [];
      const weekEndDates: string[] = [];

      let weekStartDate = new Date(firstDay);
      let weekEndDate = new Date(firstDay);
      while (weekEndDate <= lastDay) {
        weekEndDate.setDate(weekEndDate.getDate() + 6); // 주간 데이터로 설정
        weekStartDates.push(weekStartDate.toISOString().split('T')[0]);
        weekEndDates.push(weekEndDate.toISOString().split('T')[0]);
        weekStartDate.setDate(weekEndDate.getDate() + 1); // 다음 주의 시작일로 이동
        weekEndDate.setDate(weekStartDate.getDate() + 6); // 다음 주의 마지막일로 이동
      }
      // 주차 표기
      const weekLabels = weekStartDates.map((start, index) => `${index + 1}주차 (${start} ~ ${weekEndDates[index]})`);
      return weekLabels;
    } else if (selectedKey === 'M') {
      // 월간 데이터 생성
      const dates: string[] = [];
      for (let month = 0; month <= currentMonth; month++) {
        dates.push(`${currentYear}-${month + 1}월`);
      }
      return dates;
    }

    return []; // 기본값
  };

  const [registerButtonIndex, setRegisterButtonIndex] = useState<string>('D');
  const registerButtonData = [
    { key: 'D', label: '일간', position: 'first' },
    { key: 'W', label: '주간', position: 'middle' },
    { key: 'M', label: '월간', position: 'last' },
  ];

  const registerOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '세모가방 회원 현황',
        color: '#6b7280',
        font: {
          // 폰트 스타일 설정
          size: 24,
          family: 'Pretandard',
        },
      },
    },
  };

  const BarChartRegisterData = {
    labels: getDatesLabels(registerButtonIndex),
    datasets: [
      {
        label: '가입',
        data: Array.from(
          { length: getDatesLabels(registerButtonIndex).length },
          () => faker.datatype.number({ min: 0, max: 1000 }) as number,
        ),
        backgroundColor: 'rgba(67, 116, 217, 0.5)',
      },
      {
        label: '탈퇴',
        data: Array.from(
          { length: getDatesLabels(registerButtonIndex).length },
          () => faker.datatype.number({ min: 0, max: 1000 }) as number,
        ),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const onClickRegisterButton = (index: string) => {
    getDatesLabels(index);
    setRegisterButtonIndex(index);
  };

  const [accessButtonIndex, setAccessButtonIndex] = useState<string>('D');
  const accessButtonData = [
    { key: 'D', label: '일간', position: 'first' },
    { key: 'W', label: '주간', position: 'middle' },
    { key: 'M', label: '월간', position: 'last' },
  ];

  const accessOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '세모가방 접속 현황',
        color: '#6b7280',
        font: {
          // 폰트 스타일 설정
          size: 24,
          family: 'Pretandard',
        },
      },
    },
  };

  const BarChartAccessData = {
    labels: getDatesLabels(accessButtonIndex),
    datasets: [
      {
        label: '회원',
        data: Array.from(
          { length: getDatesLabels(accessButtonIndex).length },
          () => faker.datatype.number({ min: 0, max: 1000 }) as number,
        ),
        backgroundColor: 'rgba(67, 116, 217, 0.5)',
      },
      {
        label: '비회원',
        data: Array.from(
          { length: getDatesLabels(accessButtonIndex).length },
          () => faker.datatype.number({ min: 0, max: 1000 }) as number,
        ),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '구매',
        data: Array.from(
          { length: getDatesLabels(accessButtonIndex).length },
          () => faker.datatype.number({ min: 0, max: 1000 }) as number,
        ),
        backgroundColor: 'rgba(255, 224, 140, 0.5)',
      },
    ],
  };

  const onClickAccessButton = (index: string) => {
    getDatesLabels(index);
    setAccessButtonIndex(index);
  };

  // 회원 현황 다운로드
  const RegisterExcelDownload = () => {
    // 배열 데이터를 엑셀 워크시트로 변환
    const wsHeaders = XLSX.utils.aoa_to_sheet([getDatesLabels(registerButtonIndex)]);
    const wsData = XLSX.utils.aoa_to_sheet([
      Array.from(
        { length: getDatesLabels(registerButtonIndex).length },
        () => faker.datatype.number({ min: 0, max: 1000 }) as number,
      ),
    ]);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, wsHeaders, 'Headers'); // 헤더 시트 추가
    XLSX.utils.book_append_sheet(wb, wsData, 'Data'); // 데이터 시트 추가

    // 엑셀 파일을 다운로드
    XLSX.writeFile(wb, '세모가방 회원 현황.xlsx');
  };

  // 접속 현황 다운로드
  const AccessExcelDownload = () => {
    // 배열 데이터를 엑셀 워크시트로 변환
    const wsHeaders = XLSX.utils.aoa_to_sheet([getDatesLabels(accessButtonIndex)]);
    const wsData = XLSX.utils.aoa_to_sheet([
      Array.from(
        { length: getDatesLabels(accessButtonIndex).length },
        () => faker.datatype.number({ min: 0, max: 1000 }) as number,
      ),
    ]);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, wsHeaders, 'Headers'); // 헤더 시트 추가
    XLSX.utils.book_append_sheet(wb, wsData, 'Data'); // 데이터 시트 추가

    // 엑셀 파일을 다운로드
    XLSX.writeFile(wb, '세모가방 접속 현황.xlsx');
  };

  const items = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/echarts/chartSample04',
          children: [
            {
              label: 'Charts',
              path: '/echarts/chartSample04',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: 'ChartSample04',
    description: '어드민 메인 페이지 예시',
  };

  return (
    <div className="py-16 px-12 border border-gray-500 h-full overflow-y-auto w-full flex flex-col">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <div className="flex justify-end items-center mt-4">
        <div className="mr-4">기간</div>
        <div className="relative">
          <input
            name="start"
            type="date"
            className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <span className="mx-4 text-gray-500">~</span>
        <div className="relative">
          <input
            name="end"
            type="date"
            className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className="flex items-center my-8">
        <span>회원 현황</span>
        <div className="inline-flex rounded-md shadow-sm ml-4" role="group">
          {registerButtonData.map((data) => (
            <button
              key={data.key}
              className={`px-4 py-2 text-sm font-medium border
              ${data.position === 'first' && 'rounded-l-lg'}
              ${data.position === 'middle' && 'border-t border-b'}
              ${data.position === 'last' && 'rounded-r-md'}
              ${
                registerButtonIndex === data.key
                  ? 'bg-blue-600 border-blue-600 text-white '
                  : 'bg-white border-gray-200 text-gray-900'
              }
              `}
              onClick={() => {
                onClickRegisterButton(data.key);
              }}
            >
              {data.label}
            </button>
          ))}
        </div>
        <div className="inline-flex rounded-md shadow-sm ml-auto">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-green-600 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={RegisterExcelDownload}
          >
            엑셀 다운로드
          </button>
        </div>
      </div>
      <div className="shadow-lg p-12 border border-solid border-gray-200 rounded-lg">
        <Bar options={registerOptions} data={BarChartRegisterData} />
      </div>
      <div className="flex items-center my-8">
        <span>접속 현황</span>
        <div className="inline-flex rounded-md shadow-sm ml-4" role="group">
          {accessButtonData.map((data) => (
            <button
              key={data.key}
              className={`px-4 py-2 text-sm font-medium border
              ${data.position === 'first' && 'rounded-l-lg'}
              ${data.position === 'middle' && 'border-t border-b'}
              ${data.position === 'last' && 'rounded-r-md'}
              ${
                accessButtonIndex === data.key
                  ? 'bg-blue-600 border-blue-600 text-white '
                  : 'bg-white border-gray-200 text-gray-900'
              }
              `}
              onClick={() => {
                onClickAccessButton(data.key);
              }}
            >
              {data.label}
            </button>
          ))}
        </div>
        <div className="inline-flex rounded-md shadow-sm ml-auto">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-green-600 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={AccessExcelDownload}
          >
            엑셀 다운로드
          </button>
        </div>
      </div>
      <div className="shadow-lg p-12 border border-solid border-gray-200 rounded-lg">
        <Bar options={accessOptions} data={BarChartAccessData} />
      </div>
    </div>
  );
};

export default sample4;
