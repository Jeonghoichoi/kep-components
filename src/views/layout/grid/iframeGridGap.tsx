import { useState } from 'react';

const IframeGridGap = () => {
  const [gap, setGap] = useState<number>(0);
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Grid Gap</div>
      </div>
      <div className="p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div
          className={`
                grid grid-cols-7 w-full text-center text-sm text-gray-500
                ${
                  gap === 0
                    ? 'gap-0'
                    : gap === 1
                    ? 'gap-1'
                    : gap === 2
                    ? 'gap-2'
                    : gap === 3
                    ? 'gap-3 '
                    : gap === 4
                    ? 'gap-4'
                    : gap === 5
                    ? 'gap-5'
                    : gap === 6
                    ? 'gap-6'
                    : ''
                }
            `}
        >
          <div className="col-span-1 bg-gray-100 py-4">col-span-1</div>
          <div className="col-span-2 bg-gray-100 py-4">col-span-2</div>
          <div className="col-span-4 bg-gray-100 py-4">col-span-4</div>
          <div className="col-span-3 bg-gray-100 py-4">col-span-3</div>
          <div className="col-span-3 bg-gray-100 py-4">col-span-3</div>
          <div className="col-span-1 bg-gray-100 py-4">col-span-1</div>
        </div>
        <div className="flex gap-x-2 mt-4">
          <div className="flex items-center gap-x-1">
            <input
              id="simpleDscRadio01"
              name="group2"
              type="radio"
              className="h-4 w-4"
              defaultChecked={true}
              onChange={() => setGap(0)}
            />
            <label
              htmlFor="simpleDscRadio01"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              gap 0
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input id="simpleDscRadio02" name="group2" type="radio" className="h-4 w-4" onChange={() => setGap(1)} />
            <label
              htmlFor="simpleDscRadio02"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              gap 1 (4px)
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input id="simpleDscRadio03" name="group2" type="radio" className="h-4 w-4" onChange={() => setGap(2)} />
            <label
              htmlFor="simpleDscRadio03"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              gap 2 (8px)
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input id="simpleDscRadio04" name="group2" type="radio" className="h-4 w-4" onChange={() => setGap(3)} />
            <label
              htmlFor="simpleDscRadio04"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              gap 3 (12px)
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input id="simpleDscRadio05" name="group2" type="radio" className="h-4 w-4" onChange={() => setGap(4)} />
            <label
              htmlFor="simpleDscRadio05"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              gap 4 (16px)
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input id="simpleDscRadio06" name="group2" type="radio" className="h-4 w-4" onChange={() => setGap(5)} />
            <label
              htmlFor="simpleDscRadio06"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              gap 5 (20px)
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input id="simpleDscRadio07" name="group2" type="radio" className="h-4 w-4" onChange={() => setGap(6)} />
            <label
              htmlFor="simpleDscRadio07"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              gap 6 (24px)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IframeGridGap;
