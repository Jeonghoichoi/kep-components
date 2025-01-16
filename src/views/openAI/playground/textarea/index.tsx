import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

const PlayGroundTextArea = () => {
  const [textAreaMeta, setTextAreaMeta] = useState<string>('');

  const handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaMeta(event.target.value);
  };

  const handleResetTextArea = () => {
    setTextAreaMeta('');
  };

  //데이터
  const [chatModelMetaData, setChatModelMetaData] = useState({});
  // Get 메서드
  useEffect(() => {}, [chatModelMetaData]);

  const payload = {
    chatModelCode: 'GPT_4_O',
    systemPrompt: '너는 어시스턴트야. 정확한 정보를 기반으로 사실만을 대답해줘.',
    userPrompt: '대한민국의 수도는?',
    temperatur: '0.8',
    topP: '0.5',
    topK: '50',
    maxToken: '300',
  };

  const handleSubmitTextArea = () => {
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
    handleResetTextArea();
  };

  console.log(chatModelMetaData);

  return (
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
  );
};
export default PlayGroundTextArea;
