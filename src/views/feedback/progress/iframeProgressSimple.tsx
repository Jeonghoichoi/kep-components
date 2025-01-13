import { useState } from 'react';

const IframeProgressSimple = () => {
  const [progressState, setProgressState] = useState<number>(75);
  return (
    <div className="flex flex-col gap-5 mt-12">
      <h2 className="text-lg text-slate-900 dark:text-gray-400">Simple Progress</h2>
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
    </div>
  );
};

export default IframeProgressSimple;
