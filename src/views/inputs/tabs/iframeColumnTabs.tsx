import { useState } from 'react';
import { classNames } from '@/utils/util';
import { Tab } from '@headlessui/react';

const IframeRowTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const tabState: { key: number; nm: string }[] = [
    {
      key: 1,
      nm: 'Home',
    },
    {
      key: 2,
      nm: 'Popular',
    },
    {
      key: 3,
      nm: 'Trending',
    },
    {
      key: 4,
      nm: 'Recent',
    },
  ];

  return (
    <div className="flex flex-col gap-5 mt-6">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Column Align Tabs</div>
      </div>
      <div className="flex p-6 bg-blue-400 md:px-2 border-gray-600 border border-solid rounded-lg">
        <Tab.Group vertical defaultIndex={1} selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="w-20 flex flex-col gap-y-4 items-center">
            {tabState.map((item) => (
              <Tab
                key={item.key}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                  )
                }
              >
                {item.nm}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-12 h-48 m-auto">
            {tabState.map((item) => (
              <Tab.Panel key={item.key}>Content {item.key}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default IframeRowTabs;
