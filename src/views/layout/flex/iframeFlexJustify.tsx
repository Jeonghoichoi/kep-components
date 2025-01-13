import { useState } from 'react';

const iframeFlexJustify = () => {
  const [justifyClass, setJustifyClass] = useState<string>('');
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Flex Layout Justify-Contents</div>
      </div>
      <section className="p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <ul className="flex gap-x-2 mb-4">
          <li className="flex items-center gap-x-1">
            <input
              id="simpleDscRadio01"
              name="group1"
              type="radio"
              className="h-4 w-4"
              defaultChecked={true}
              onChange={() => setJustifyClass('start')}
            />
            <label
              htmlFor="simpleDscRadio01"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              Justify Start
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input id="simpleDscRadio02" name="group1" type="radio" className="h-4 w-4" onChange={() => setJustifyClass('end')} />
            <label
              htmlFor="simpleDscRadio02"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              Justify End
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input
              id="simpleDscRadio03"
              name="group1"
              type="radio"
              className="h-4 w-4"
              onChange={() => setJustifyClass('center')}
            />
            <label
              htmlFor="simpleDscRadio03"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              Justify Center
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input
              id="simpleDscRadio04"
              name="group1"
              type="radio"
              className="h-4 w-4"
              onChange={() => setJustifyClass('between')}
            />
            <label
              htmlFor="simpleDscRadio04"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              Justify Between
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input
              id="simpleDscRadio05"
              name="group1"
              type="radio"
              className="h-4 w-4"
              onChange={() => setJustifyClass('evenly')}
            />
            <label
              htmlFor="simpleDscRadio05"
              className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
            >
              Justify Evenly
            </label>
          </li>
        </ul>
        <div
          className={`flex gap-4 justify${
            justifyClass === 'start'
              ? '-start'
              : justifyClass === 'end'
              ? '-end'
              : justifyClass === 'center'
              ? '-center'
              : justifyClass === 'between'
              ? '-between'
              : justifyClass === 'evenly'
              ? '-evenly'
              : '-normal'
          }`}
        >
          <span className="bg-slate-600 text-white py-2 px-10 text-sm rounded">Item 1</span>
          <span className="bg-slate-600 text-white py-2 px-10 text-sm rounded">Item 2</span>
          <span className="bg-slate-600 text-white py-2 px-10 text-sm rounded">Item 3</span>
        </div>
      </section>
    </div>
  );
};

export default iframeFlexJustify;
