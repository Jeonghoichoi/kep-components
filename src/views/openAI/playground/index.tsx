import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
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

  //데이터
  const [chatModelMetaData, setChatModelMetaData] = useState({});
  // Get 메서드
  useEffect(() => {
    const payload = {
      chatModelCode: 'GPT_4_O',
      systemPrompt: '너는 어시스턴트야. 정확한 정보를 기반으로 사실만을 대답해줘.',
      userPrompt: '대한민국의 수도는?',
      temperatur: '0.8',
      topP: '0.5',
      topK: '50',
      maxToken: '300',
    };
    axios
      .post<any>('/api/v1/chat/stream', payload)
      .then((res: AxiosResponse) => {
        // 성공 시 처리
        console.log(res);

        setChatModelMetaData(res.data);
      })
      .catch((error: AxiosError) => {
        // 오류 시 처리
        console.error('AI 시연용 데이터 로드', error.message);
      });
  }, [chatModelMetaData]);

  // compare mode
  const [isCompareMode, setIsCompareMode] = useState<boolean>(false);

  const [textAreaMeta, setTextAreaMeta] = useState<string>('');

  const handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaMeta(event.target.value);
  };

  const handleResetTextArea = () => {
    setTextAreaMeta('');
  };

  const handleSubmitTextArea = () => {
    alert(`${textAreaMeta} 검색 기능은 현재 작업 중 입니다.`);
  };

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
              <fieldset className="flex w-full">
                <legend className="hidden">액션 버튼을 포함한 textarea</legend>
                <div className="overflow-hidden rounded-lg shadow-sm w-full mt-auto mx-auto ">
                  <textarea
                    id="text"
                    className="w-full resize-none border-none align-top sm:text-sm focus:outline-0 p-2 dark:bg-slate-900"
                    rows={24}
                    value={textAreaMeta}
                    onChange={handleChangeTextArea}
                    placeholder={'메시지를 입력해주세요'}
                  />
                  <div className="flex items-center justify-end gap-2 bg-white p-3 dark:bg-slate-900">
                    <button
                      type="button"
                      className="rounded bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700"
                      onClick={handleResetTextArea}
                    >
                      취소
                    </button>
                    <button
                      type="button"
                      className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
                      onClick={() => {
                        handleSubmitTextArea();
                        handleResetTextArea();
                      }}
                    >
                      제출하기
                    </button>
                  </div>
                </div>
              </fieldset>
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
              <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-full">
                <fieldset className="w-full">
                  <legend className="hidden">액션 버튼과 이모티콘을 포함한 textarea</legend>

                  <div className="rounded drop-shadow-md bg-gray-200 border border-solid border-gray-50 shadow-sm focus-within:border-gray-50 focus-within:ring-1 focus-within:ring-gray-600 w-1/3 mx-auto">
                    <textarea
                      id="text"
                      className="w-full resize-none bg-gray-100 border-none align-top sm:text-sm focus:outline-0 p-2 dark:bg-slate-900"
                      rows={1}
                      placeholder="메시지를 입력해주세요."
                      onChange={handleChangeTextArea}
                      value={textAreaMeta}
                    ></textarea>
                    <div className="flex justify-end items-center p-3 bg-gray-100">
                      <div className="flex items-center justify-end gap-2 dark:bg-slate-900">
                        <button
                          type="button"
                          className="rounded border border-solid border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700"
                          onClick={handleResetTextArea}
                        >
                          취소
                        </button>
                        <button
                          type="button"
                          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
                          onClick={() => {
                            handleSubmitTextArea();
                            handleResetTextArea();
                          }}
                        >
                          제출하기
                        </button>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </>
          )}
        </div>
        <SideBarSetting />
      </div>
    </div>
  );
};

export default Playground;
