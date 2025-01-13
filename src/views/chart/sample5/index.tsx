import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import IframeLine from './iframeLine';
import IframeBar from './iframeBar';
import IframeTable from './iframeTable';
import IframeDoughnut from './iframeDoughnut';
import IframeProgress from './iframeProgress';

const sample05 = () => {
  // 카드 데이터
  interface dataType {
    name: string;
    total: number;
    recent: number;
    description: string;
  }
  const cardData: dataType[] = [
    {
      name: 'Users',
      total: 71897,
      recent: 122,
      description: '사용자 통계에 대한 설명',
    },
    {
      name: 'Open',
      total: 58.16,
      recent: 5.4,
      description: '사이트 open 통계에 대한 설명',
    },
    {
      name: 'Click',
      total: 24.57,
      recent: 3.2,
      description: '사이트 click 통계에 대한 설명',
    },
    {
      name: 'Ect',
      total: 13.04,
      recent: 1,
      description: '기타에 대한 설명',
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4 bg-gray-50 w-full h-full p-4 overflow-y-auto">
      <div className="col-span-4">
        <h1 className="text-lg font-bold text-slate-800">Main Board</h1>
      </div>
      {cardData.map((item) => (
        <div key={item.name} className="flex flex-col justify-center bg-white rounded-lg py-4 px-6 shadow-lg">
          <h3 className="text-sm text-slate-500 mb-1">{item.name}</h3>
          <div className="flex justify-between mb-4">
            <span className="text-lg font-bold text-slate-800">{item.total}</span>
            <div className="inline-flex items-center gap-2 rounded bg-blue-100 py-1 px-2 text-blue-600">
              <ArrowTrendingUpIcon className="w-4 h-4" />
              <span className="text-xs font-medium">{item.recent}</span>
            </div>
          </div>
          <h5 className="text-sm text-gray-500">{item.description}</h5>
        </div>
      ))}
      <div className="bg-white rounded-lg col-span-2 row-span-2 p-4 shadow-lg">
        <h2 className="text-base font-semibold text-slate-800">온라인 채널</h2>
        <IframeDoughnut />
      </div>
      <div className="bg-white rounded-lg col-span-2 p-4 shadow-lg">
        <h2 className="text-base font-semibold mb-2 text-slate-800">양육 자녀 연령대</h2>
        <IframeLine />
      </div>
      <div className="bg-white rounded-lg col-span-2 p-4 shadow-lg">
        <h2 className="text-base font-semibold mb-2 text-slate-800">이용 중인 앱</h2>
        <IframeTable />
      </div>
      <div className="bg-white rounded-lg col-span-2 p-4 shadow-lg">
        <h2 className="text-base font-semibold mb-2 text-slate-800">나의 학생 출석 현황</h2>
        <IframeProgress />
      </div>
      <div className="bg-white rounded-lg col-span-2 p-4 shadow-lg">
        <h2 className="text-base font-semibold mb-2 text-slate-800">육아 정보 접촉 채널 및 가장 도움되는 채널</h2>
        <IframeBar />
      </div>
    </div>
  );
};

export default sample05;
