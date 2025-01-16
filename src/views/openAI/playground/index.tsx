import { useState } from 'react';

import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import PlayGroundTextArea from './textarea';
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
            {isCompareMode ? (
              <div className="absolute mb-4 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <div className="flex flex-col gap-4">
                  <span className="font-bold">User</span>
                  <p>대한민국의 수도는??</p>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <span className="font-bold">Assistant</span>
                  <p>대한민국의 수도는 서울입니다.</p>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          {isCompareMode && (
            <>
              <div className="relative flex p-6 mt-4 md:px-2 h-full border-gray-300 border border-solid rounded-lg">
                <div className="absolute mb-4 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  <div className="flex flex-col gap-4">
                    <span className="font-bold">User</span>
                    <p>대한민국의 수도는??</p>
                  </div>
                  <div className="flex flex-col gap-4 mt-8">
                    <span className="font-bold">Assistant</span>
                    <p>대한민국의 수도는 서울입니다.</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <SideBarSetting />
      </div>
      <PlayGroundTextArea />
    </div>
  );
};

export default Playground;
