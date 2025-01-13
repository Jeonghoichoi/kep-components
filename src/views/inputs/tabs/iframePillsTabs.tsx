import { useState } from 'react';
import { classNames } from '@/utils/util';
import { Tab } from '@headlessui/react';

const IframePillsTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const tabState: { key: number; nm: string }[] = [
    {
      key: 1,
      nm: 'Profile',
    },
    {
      key: 2,
      nm: 'Dashboard',
    },
    {
      key: 3,
      nm: 'Settings',
    },
    {
      key: 4,
      nm: 'Contacts',
    },
    {
      key: 5,
      nm: 'Options',
    },
  ];

  return (
    <div className="flex flex-col gap-5 mt-6">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">
          Pills Tabs
          <span className="text-sm text-gray-500 dark:text-gray-400"> (아이콘과 같이 사용할 수 있습니다.)</span>
        </div>
      </div>
      <div className="flex p-6 bg-white md:px-2 border-gray-600 border border-solid rounded-lg">
        <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
          <Tab.Group defaultIndex={1} selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="w-full flex flex-wrap gap-x-4 -mb-px items-center">
              {tabState.map((item) => (
                <Tab
                  key={item.key}
                  className={({ selected }) =>
                    classNames(
                      'inline-block p-4 rounded-lg focus:outline-none',
                      selected ? 'text-white bg-blue-600' : 'hover:text-gray-600 hover:bg-gray-200 dark:hover:text-gray-300',
                    )
                  }
                >
                  <span className="flex gap-2 items-center">{item.nm}</span>
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
    </div>
  );
};

export default IframePillsTabs;
