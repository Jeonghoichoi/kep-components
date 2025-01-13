import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import SideBarSetting from './sidebarSetting';

import './index.less';

const Playground = () => {
  const items = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/openAI/playground',
          children: [
            {
              label: 'playground',
              path: '/openAI/playground',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: 'Playground',
    description: ``,
  };

  // compare mode
  const [isCompareMode, setIsCompareMode] = useState<boolean>(false);

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto w-full flex flex-col">
      <Breadcrumbs items={items} />
      <div className="flex">
        <PageInformation PageInfo={PageInfo} />
        <div className="flex gap-2 ml-auto">
          <button
            type="button"
            className="flex py-4 px-4 font-semibold text-sm text-gray-800 bg-white border border-solid border-gray-200 h-[32px] items-center justify-items-center rounded"
            onClick={() => {
              setIsCompareMode(!isCompareMode);
            }}
          >
            Compare
          </button>
        </div>
      </div>
      <div className="flex border h-full">
        <div className="flex flex-col w-full h-full">
          <div className="relative flex p-6 md:px-2 h-full border-gray-300 border border-solid rounded-lg">
            {isCompareMode && (
              <div className="absolute text-sm mb-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                워싱턴 DC 입니다. (타 모델과 비교한 데이터가 바인딩 됩니다.)
              </div>
            )}
            <fieldset className="flex w-full">
              <legend className="hidden">액션 버튼을 포함한 textarea</legend>
              <div className="overflow-hidden rounded-lg border border-solid border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 w-full mt-auto mx-auto ">
                <textarea
                  id="text"
                  className="w-full resize-none border-none align-top sm:text-sm focus:outline-0 p-2 dark:bg-slate-900"
                  rows={2}
                  placeholder={isCompareMode ? '미국의 수도는?' : '데이터를 입력해주세요'}
                />

                <div className="flex items-center justify-end gap-2 bg-white p-3 dark:bg-slate-900">
                  <button type="button" className="rounded bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
                    취소
                  </button>
                  <button type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
                    제출하기
                  </button>
                </div>
              </div>
            </fieldset>
          </div>
          {isCompareMode && (
            <div className="relative flex p-6 mt-4 md:px-2 h-full border-gray-300 border border-solid rounded-lg">
              {isCompareMode && (
                <div className="absolute text-sm mb-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  워싱턴 DC 입니다. (타 모델과 비교한 데이터가 바인딩 됩니다.)
                </div>
              )}
              <fieldset className="flex w-full">
                <legend className="hidden">액션 버튼을 포함한 textarea</legend>
                <div className="overflow-hidden rounded-lg border border-solid border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 w-full mt-auto mx-auto ">
                  <textarea
                    id="text"
                    className="w-full resize-none border-none align-top sm:text-sm focus:outline-0 p-2 dark:bg-slate-900"
                    rows={2}
                    placeholder={isCompareMode ? '미국의 수도는?' : '데이터를 입력해주세요'}
                  />

                  <div className="flex items-center justify-end gap-2 bg-white p-3 dark:bg-slate-900">
                    <button type="button" className="rounded bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
                      취소
                    </button>
                    <button type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
                      제출하기
                    </button>
                  </div>
                </div>
              </fieldset>
            </div>
          )}
        </div>
        <SideBarSetting />
      </div>
    </div>
  );
};

export default Playground;
