import { useState } from 'react';

const IframeLists = () => {
  const items = [
    {
      key: '1',
      title: 'List Title one',
      description: 'List subtitle contents one',
    },
    {
      key: '2',
      title: 'List Title two',
      description: 'List subtitle contents two',
    },
    {
      key: '3',
      title: 'List Title three',
      description: 'List subtitle contents three',
    },
  ];

  const [radioState, setRadioState] = useState('false');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRadioState(value);
  };

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Simple Lists types</div>
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-2">
            <input
              id="VerticalRadio"
              name="Vertical"
              type="radio"
              className="h-5 w-5"
              value="true"
              checked={radioState === 'true'}
              onChange={onChange}
            />
            <label htmlFor="simpleRadio" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
              Vertical Lists
            </label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              id="HorizentalRadio"
              name="Horizental"
              type="radio"
              className="h-5 w-5"
              value="false"
              checked={radioState === 'false'}
              onChange={onChange}
            />
            <label htmlFor="simpleRadio" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
              Horizental Lists
            </label>
          </div>
        </div>
      </div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
          <div className="flex flex-col gap-4 items-center">
            <dl className={`max-w-xl text-gray-900 flex ${radioState === 'true' ? 'flex-col gap-y-4' : 'flex gap-x-4'}`}>
              {items.map((item) => (
                <div key={item.key} className="flex flex-col p-4 border border-solid border-gray-200">
                  <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{item.title}</dt>
                  <dd className="text-lg font-semibold">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IframeLists;
