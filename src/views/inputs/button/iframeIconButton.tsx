import { useState } from 'react';

const iframeIconButton = () => {
  const Button: string = 'Button';

  const [isSwitch, setIsSwitch] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">
          Buttons with leading Icon{' '}
          <span className="text-sm text-gray-500 dark:text-gray-400">(우측 버튼을 이용해 아이콘의 위치를 바꿀 수 있습니다)</span>
        </div>
        <label htmlFor="IconButtonToggle" className="relative h-8 w-14 cursor-pointer">
          <input
            type="checkbox"
            id="IconButtonToggle"
            className="peer sr-only"
            onChange={() => {
              setIsSwitch(!isSwitch);
            }}
          />
          <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
          <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
        </label>
      </div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
          <button
            type="button"
            className="flex py-1.5 px-2.5 font-semibold text-sm text-white bg-indigo-600 gap-x-1.5 h-[32px] items-center justify-items-center rounded"
          >
            {isSwitch && <> {Button}</>}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            {!isSwitch && <> {Button}</>}
          </button>
          <button
            type="button"
            className="flex py-2 px-3 font-semibold text-sm text-white bg-indigo-600 gap-x-1.5 h-[36px] items-center justify-items-center rounded"
          >
            {isSwitch && <> {Button}</>}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            {!isSwitch && <> {Button}</>}
          </button>
          <button
            type="button"
            className="flex py-2.5 px-3.5 font-semibold text-sm text-white bg-indigo-600 gap-x-2 h-[40px] items-center justify-items-center rounded"
          >
            {isSwitch && <> {Button}</>}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            {!isSwitch && <> {Button}</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default iframeIconButton;
