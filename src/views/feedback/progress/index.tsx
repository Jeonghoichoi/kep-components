import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeProgressSimple from './iframeProgressSimple';
import IframeProgressLoader from './iframeProgressLoader';
import IframeProgressIcon from './iframeProgressIcon';
import IframeProgressComplete from './iframeProgressComplete';
const Progress = () => {
  const simpleProgress: string = `import { useState } from 'react';
  
  const simpleProgress = () => {
    const [progressState, setProgressState] = useState<number>(75);
    return (
      <div className="p-6 border-gray-200 border border-solid rounded-lg relative ">
      <div
        role="progressbar"
        aria-labelledby="ProgressLabel"
        aria-valuenow={progressState}
        className="relative block rounded-full bg-gray-200"
      >
        <span className="absolute inset-0 flex items-center justify-center text-[10px]/4 font-bold text-white">
          {progressState}%
        </span>
        <span
          className="block h-4 rounded-full bg-blue-600 text-center transition-all"
          style={{ width: progressState + '%' }}
        ></span>
      </div>
      <div className="flex justify-end gap-x-4 mt-4">
        <button
          className="p-2 bg-gray-100 rounded hover:bg-blue-100 text-xs"
          onClick={() => {
            setProgressState(0);
          }}
        >
          초기화하기
        </button>
        <button
          className="p-2 bg-gray-100 rounded hover:bg-blue-100 text-xs"
          onClick={() => {
            setProgressState(100);
          }}
        >
          100% 도달하기
        </button>
      </div>
    </div>
    )
  }`;

  const iconProgress: string = `import { useState } from 'react';
import { ClipboardDocumentCheckIcon, BuildingOfficeIcon, CircleStackIcon } from '@heroicons/react/24/outline';
  
  const iconProgress = () => {
    const [progressState, setProgressState] = useState<number>(0);
   
  }`;
  const closedProgress: string = `const closedProgress = () => {
    return (
      <div className="p-6 border-gray-200 border border-solid rounded-lg relative "> 
        <ol className="flex items-center justify-evenly text-xs font-medium text-gray-500 ">
          <li className={"flex items-center justify-center gap-2 text-gray-400""}>
              <span className="h-6 w-6 rounded bg-blue-50 text-center text-[10px]/6 font-bold">1</span>
              <span>STEP 1</span>
              <CheckIcon className="w-4 h-4" />
          </li>
          <li className={"flex items-center justify-center gap-2 text-gray-400""}>
              <span className="h-6 w-6 rounded bg-blue-50 text-center text-[10px]/6 font-bold">2</span>
              <span>STEP 2</span>
              <CheckIcon className="w-4 h-4" />
          </li>
          <li className={"flex items-center justify-center gap-2 text-gray-400""}>
              <span className="h-6 w-6 rounded bg-blue-50 text-center text-[10px]/6 font-bold">3</span>
              <span>STEP 3</span>
              <CheckIcon className="w-4 h-4" />
          </li>
        </ol>
        <div className="flex gap-x-4 justify-end mt-4">
            <button className="p-2 bg-gray-100 rounded hover:bg-blue-100 text-xs" onClick={()=>{setProgressState(0)}}>초기화하기</button>
            <button className="p-2 bg-gray-100 rounded hover:bg-blue-100 text-xs" onClick={()=>{setProgressState(progressState + 1)}}>다음 단계</button>
        </div>
      </div>
    )
  }`;
  const loaderProgress: string = `import './index.less';

const loaderProgress = () => {
    return (
		  <div className="p-6 border-gray-200 border border-solid rounded-lg relative h-60 flex items-center justify-center"> 
        <div className="loader triangle">
          <svg viewBox="0 0 86 80" fill='none' strokeWidth="10px" strokeLinecap='round' strokeLinejoin='round' stroke='#3b3b3b'>
              <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>
      </div>
    )
  }`;

  const items: BreadcrumbsItem[] = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/feedback/progress',
          children: [
            {
              label: 'Feedback',
              path: '/feedback/progress',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo: PageInfoType = {
    title: 'Progress',
    description: `작업이 지핸 중임을 사용자에게 알리기 위한 인터페이스 요소이다`,
  };

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      {/* 진행률 (기본) */}
      <CodeBoard code={simpleProgress} />
      <IframeProgressSimple />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 진행률 (아이콘) */}
      <CodeBoard code={iconProgress} />
      <IframeProgressIcon />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 완료 아이콘  */}
      <CodeBoard code={closedProgress} />
      <IframeProgressComplete />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 로딩 프로그레스바 */}
      <CodeBoard code={loaderProgress} />
      <IframeProgressLoader />
    </div>
  );
};

export default Progress;
