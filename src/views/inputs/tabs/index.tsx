import Breadcrumbs from '@/components/common/Breadcrumbs';
import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeTabs from './iframeTabs';
import IframeRowTabs from './iframeColumnTabs';
import IframeUnderlineTabs from './iframeUnderlineTabs';
import IframePillsTabs from './iframePillsTabs';
// import axios, { AxiosResponse, AxiosError } from 'axios';

const Tabs = () => {
  const PrimaryTabsCode: string = `import { useState } from 'react';
  import { classNames } from '@/utils/util';
  import { Tab } from '@headlessui/react';

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

  return(
      <Tab.Group defaultIndex={1} selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="w-full flex items-center">
          {tabState.map((item) => (
            <Tab
              key={item.key}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected ? 'bg-white shadow' : 'text-blue-200 hover:bg-white/[0.5] hover:text-blue-400',
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
  )

  }`;

  const ColumnTabsCode: string = `import { useState } from 'react';
  import { classNames } from '@/utils/util';
  import { Tab } from '@headlessui/react';
  
  const ColumnTabs = () => {

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
    )
  }`;

  const UnderLineTabsCode: string = `import React from 'react';
  import { useState } from 'react';
  import { classNames } from '@/utils/util';
  import { Tab } from '@headlessui/react';
  import { ClipboardIcon } from '@heroicons/react/24/outline';
  
  const UnderLineTabs = () => {

    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const tabState: { key: number; nm: string; icon?: React.ReactElement }[] = [
      {
        key: 1,
        nm: 'Profile',
        icon: <ClipboardIcon className="w-4 h-4" />,
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
      <Tab.Group defaultIndex={1} selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="w-full flex flex-wrap -mb-px items-center">
          {tabState.map((item) => (
            <Tab
              key={item.key}
              className={({ selected }) =>
                classNames(
                  'inline-block p-4 border-b-2 rounded-t-lg focus:outline-none',
                  selected
                    ? 'text-blue-600 border-solid border-b-2 border-blue-600'
                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
                )
              }
            >
              <span className="flex gap-2 items-center">
                {item.icon} {item.nm}
              </span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-12 h-48 m-auto">
          {tabState.map((item) => (
            <Tab.Panel key={item.key}>Content {item.key}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    )
  }`;

  const PillsTabsCode: string = `import { useState } from 'react';
  import { classNames } from '@/utils/util';
  import { Tab } from '@headlessui/react';
    
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
  )
}`;

  const items: BreadcrumbsItem[] = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/inputs/tabs',
          children: [
            {
              label: 'Inputs',
              path: '/inputs/tabs',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo: PageInfoType = {
    title: 'Tabs',
    description: `일반적으로 탐색할 수 있는 다른 섹션 또는 페이지를 나타내며, 
    사용자는 이러한 탭을 클릭하거나 탭 제목을 터치하여 해당 섹션으로 이동할 수 있습니다.
    또한 포커스 관리 및 키보드 탐색 지원을 통해 UI요소에 액세스 가능합니다.
    `,
  };

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={PrimaryTabsCode} />
      <IframeTabs />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={ColumnTabsCode} />
      <IframeRowTabs />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={UnderLineTabsCode} />
      <IframeUnderlineTabs />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={PillsTabsCode} />
      <IframePillsTabs />
      <hr className="border-t border-solid border-gray-300 mt-12" />
    </div>
  );
};

export default Tabs;
