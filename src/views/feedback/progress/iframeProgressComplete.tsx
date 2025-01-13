import { CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
const IframeProgressComplete = () => {
  const [progressState, setProgressState] = useState<number>(0);
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-slate-900 dark:text-gray-400">Closed on Complete Progress</h2>
        <button className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">PREVIEW</button>
      </div>
      <div className="p-6 border-gray-200 border border-solid rounded-lg relative ">
        <ol className="flex items-center justify-evenly text-xs font-medium text-gray-500 ">
          <li
            className={`flex items-center justify-center gap-2 ${
              progressState >= 0 ? 'font-bold text-blue-600' : 'font-normal text-gray-400'
            }`}
          >
            <span className="h-6 w-6 rounded bg-blue-50 text-center text-[10px]/6 font-bold">1</span>
            <span>STEP 1</span>
            <CheckIcon className={`${progressState >= 0 ? 'opacity-1' : 'opacity-0'} w-4 h-4`} />
          </li>
          <li
            className={`flex items-center justify-center gap-2 ${
              progressState > 0 ? 'font-bold text-blue-600' : 'font-normal text-gray-400'
            }`}
          >
            <span className="h-6 w-6 rounded bg-blue-50 text-center text-[10px]/6 font-bold">2</span>
            <span>STEP 2</span>
            <CheckIcon className={`${progressState > 0 ? 'opacity-1' : 'opacity-0'} w-4 h-4`} />
          </li>
          <li
            className={`flex items-center justify-center gap-2 ${
              progressState > 1 ? 'font-bold text-blue-600' : 'font-normal text-gray-400'
            }`}
          >
            <span className="h-6 w-6 rounded bg-blue-50 text-center text-[10px]/6 font-bold">3</span>
            <span>STEP 3</span>
            <CheckIcon className={`${progressState > 1 ? 'opacity-1' : 'opacity-0'} w-4 h-4`} />
          </li>
        </ol>
        <div className="flex gap-x-4 justify-end mt-4">
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
              setProgressState(progressState + 1);
            }}
          >
            다음 단계
          </button>
        </div>
      </div>
    </div>
  );
};

export default IframeProgressComplete;
