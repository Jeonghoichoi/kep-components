import { useState } from 'react';

const iframeFlexAlign = () => {
  const [AlignClass, setAlignClass] = useState<string>('');
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Flex Layout Align-items</div>
      </div>
      <section className="p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <ul className="flex gap-x-2 mb-4">
          <li className="flex items-center gap-x-1">
            <input
              id="align01"
              name="group2"
              type="radio"
              className="h-4 w-4"
              defaultChecked={true}
              onChange={() => setAlignClass('start')}
            />
            <label
              htmlFor="align01"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              start
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input id="align02" name="group2" type="radio" className="h-4 w-4" onChange={() => setAlignClass('end')} />
            <label
              htmlFor="align02"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              end
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input id="align03" name="group2" type="radio" className="h-4 w-4" onChange={() => setAlignClass('center')} />
            <label
              htmlFor="align03"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              center
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input id="align04" name="group2" type="radio" className="h-4 w-4" onChange={() => setAlignClass('stretch')} />
            <label
              htmlFor="align04"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              stretch
            </label>
          </li>
        </ul>
        <div
          className={`flex gap-4 items${
            AlignClass === 'start'
              ? '-start'
              : AlignClass === 'end'
              ? '-end'
              : AlignClass === 'center'
              ? '-center'
              : AlignClass === 'stretch'
              ? '-stretch'
              : '-start'
          }`}
        >
          <span className="bg-slate-600 text-white py-1 px-10 text-sm rounded ">Item 1</span>
          <span className="bg-slate-600 text-white py-4 px-10 text-sm rounded">Item 2</span>
          <span className="bg-slate-600 text-white py-8 px-10 text-sm rounded">Item 3</span>
        </div>
      </section>
    </div>
  );
};

export default iframeFlexAlign;
