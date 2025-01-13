import { useState } from 'react';

const iframeRoundedButton = () => {
  const Button: string = 'Button';

  const [isColorToggle, setIsColorToggle] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">
          Rounded Buttons
          <span className="text-sm text-gray-500 dark:text-gray-400">(우측 버튼을 이용해 타입을 바꿀 수 있습니다)</span>
        </div>
        <label htmlFor="RoundedButtonToggle" className="relative h-8 w-14 cursor-pointer">
          <input
            type="checkbox"
            id="RoundedButtonToggle"
            className="peer sr-only"
            onChange={() => {
              setIsColorToggle(!isColorToggle);
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
            className={`flex py-1 px-2 text-xs ${
              isColorToggle ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border border-solid border-gray-200'
            } h-[24px] items-center justify-items-center rounded-full`}
          >
            {Button}
          </button>
          <button
            type="button"
            className={`flex py-1 px-2 text-sm ${
              isColorToggle ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border border-solid border-gray-200'
            } h-[28px] items-center justify-items-center rounded-full`}
          >
            {Button}
          </button>
          <button
            type="button"
            className={`flex py-1.5 px-2.5 text-sm ${
              isColorToggle ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border border-solid border-gray-200'
            } h-[32px] items-center justify-items-center rounded-full`}
          >
            {Button}
          </button>
          <button
            type="button"
            className={`flex py-2 px-3 text-sm ${
              isColorToggle ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border border-solid border-gray-200'
            } h-[36px] items-center justify-items-center rounded-full`}
          >
            {Button}
          </button>
          <button
            type="button"
            className={`flex py-2.5 px-3.5 text-sm ${
              isColorToggle ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border border-solid border-gray-200'
            } h-[40px] items-center justify-items-center rounded-full`}
          >
            {Button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default iframeRoundedButton;
