import { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import { classNames } from '@/utils/util';
import { Tab } from '@headlessui/react';
import IframeChartLine from './iframeChartLine';
import IframeChartBar from './iframeChartBar';
import IframeChartDoughnut from './iframeChartDoughnut';
import { CovidType } from '@/interfaces/UtilityInterface';
const sampleChart = () => {
  //탭
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabState: { nm: string; key: string }[] = [
    {
      nm: 'COVID-19',
      key: '1',
    },
    {
      nm: 'COVID-19 History',
      key: '2',
    },
    {
      nm: 'COVID-19 Worldwide',
      key: '3',
    },
  ];

  //데이터
  const [covidData, setCovidData] = useState({});
  // Get 메서드
  useEffect(() => {
    axios
      .get<CovidType>('https://corona.lmao.ninja/v2/all')
      .then((res: AxiosResponse) => {
        // 성공 시 처리
        console.log('코로나 19 데이터 로드', res.data);
        setCovidData(res.data);
      })
      .catch((error: AxiosError) => {
        // 오류 시 처리
        console.error('코로나 19 데이터 로드', error.message);
      });
  }, []);

  // 페이지 정보
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
    title: 'ChartSample',
    description: '코로나 현황판!!',
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full w-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <Tab.Group defaultIndex={1} selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="w-full flex items-center border-b border-gray-300 border-solid">
          {tabState.map((item) => (
            <Tab
              key={item.key}
              className={({ selected }) =>
                classNames(
                  'py-2.5 px-10 text-sm ring-0 focus:outline-none sm:py-2 sm:px-6',
                  selected ? 'text-blue-500 border-blue-500 border-b border-solid' : 'text-black',
                )
              }
            >
              {item.nm}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-12">
          {tabState.map((data) => (
            <Tab.Panel key={data.key}>
              {
                data.key === '1' ? (
                  <IframeChartLine covidData={covidData} /> //type 작업 중..
                ) : data.key === '2' ? (
                  <IframeChartBar covidData={covidData} /> //type 작업 중..
                ) : (
                  <IframeChartDoughnut covidData={covidData} />
                ) //type 작업 중..
              }
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default sampleChart;
