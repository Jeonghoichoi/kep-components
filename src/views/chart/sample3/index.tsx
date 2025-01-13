import { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import LeftListComponents from './LeftListComponents';
import RightComponents from './RightComponents';
import { CovidTypeSample3 } from '@/interfaces/UtilityInterface';

const sample3 = () => {
  // API 발급 키
  const API_KEY = '7PTRYOe5bLpw4vkzDZqMurBfhWgxNsGdJ';

  // 타이틀
  const [title, setTitle] = useState('');
  // 데이터
  const [coronaMetaData, setCoronaMetaData] = useState<CovidTypeSample3[]>([]);
  const [selectedCountryName, setSelectedCountryName] = useState('서울');

  useEffect(() => {
    // 데이터 로딩
    axios
      .get(`https://api.corona-19.kr/korea/?serviceKey=${API_KEY}`)
      .then((res: AxiosResponse) => {
        // 성공 시 처리
        setTitle(res.data.API.apiName);
        setCoronaMetaData(Object.values(res.data));
      })
      .catch((error: AxiosError) => {
        // 오류 시 처리
        console.error('데이터 가져오기 오류:', error.message);
      });
  }, []);

  const onSelectedCountryName = (name: string) => {
    setSelectedCountryName(name);
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
              path: '/echarts/chartSample3',
            },
          ],
        },
      ],
    },
  ];
  const PageInfo = {
    title: 'ChartSample03',
    description: title,
  };

  return (
    <div className="py-16 px-12 border border-gray-500 h-full overflow-y-auto w-full flex flex-col">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      {coronaMetaData.length > 0 && (
        <div className="flex">
          <LeftListComponents data={coronaMetaData} setSelectedCountryName={onSelectedCountryName} />
          <RightComponents data={coronaMetaData} selectedCountryName={selectedCountryName} />
        </div>
      )}
    </div>
  );
};

export default sample3;
