import { useState } from 'react';
import { ClipboardDocumentCheckIcon, BuildingOfficeIcon, CircleStackIcon } from '@heroicons/react/24/outline';
const IframeProgressIcon = () => {
  const [progressState, setProgressState] = useState<number>(0);
  return (
    <div className="flex flex-col gap-5 mt-12">
      <h2 className="text-lg text-slate-900 dark:text-gray-400">Icon Progress</h2>
      <div className="p-6 border-gray-200 border border-solid rounded-lg relative ">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div
            className={`h-2 rounded-full bg-blue-500 transition-all ${
              progressState === 0 ? 'w-0' : progressState === 1 ? 'w-1/2' : 'w-full'
            }`}
          ></div>
        </div>
        <ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
          <li className={`flex items-center justify-start ${progressState >= 0 ? 'text-blue-500' : ''}`}>
            <ClipboardDocumentCheckIcon className="w-4 h-4" />
            <span className="text-xs"> Details</span>
          </li>
          <li className={`flex items-center justify-center ${progressState > 0 ? 'text-blue-500' : ''}`}>
            <BuildingOfficeIcon className="w-4 h-4" />
            <span className="text-xs"> Address </span>
          </li>
          <li className={`flex items-center justify-end ${progressState > 1 ? 'text-blue-500' : ''}`}>
            <CircleStackIcon className="w-4 h-4" />
            <span className="text-xs"> Payment </span>
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

export default IframeProgressIcon;
