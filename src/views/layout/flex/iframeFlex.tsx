import { useState } from 'react';

const iframeFlex = () => {
  const [flexClass, setFlexClass] = useState<string>('');
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Flex Layout</div>
      </div>
      <section className="p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <ul className="flex gap-x-2 mb-4">
          <li className="flex items-center gap-x-1">
            <input
              id="flexDirection01"
              name="group3"
              type="radio"
              className="h-4 w-4"
              defaultChecked={true}
              onChange={() => setFlexClass('row')}
            />
            <label
              htmlFor="flexDirection01"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              flexDirection Row
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input id="flexDirection02" name="group3" type="radio" className="h-4 w-4" onChange={() => setFlexClass('col')} />
            <label
              htmlFor="flexDirection02"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              flexDirection Col
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input
              id="flexDirection03"
              name="group3"
              type="radio"
              className="h-4 w-4"
              onChange={() => setFlexClass('row-reverse')}
            />
            <label
              htmlFor="flexDirection03"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              flexDirection Row-reverse
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input
              id="flexDirection04"
              name="group3"
              type="radio"
              className="h-4 w-4"
              onChange={() => setFlexClass('col-reverse')}
            />
            <label
              htmlFor="flexDirection04"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              flexDirection Col-reverse
            </label>
          </li>
        </ul>
        <div
          className={`flex gap-4 flex-${
            flexClass === 'row'
              ? 'row'
              : flexClass === 'col'
              ? 'col'
              : flexClass === 'row-reverse'
              ? 'row-reverse'
              : flexClass === 'col-reverse'
              ? 'col-reverse'
              : 'row'
          }`}
        >
          <span className="bg-slate-600 text-white p-2 text-sm rounded">Item 1</span>
          <span className="bg-slate-600 text-white p-2 text-sm rounded">Item 2</span>
          <span className="bg-slate-600 text-white p-2 text-sm rounded">Item 3</span>
        </div>
      </section>
    </div>
  );
};

export default iframeFlex;
