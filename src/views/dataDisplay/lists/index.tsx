import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeLists from './iframeLists';
import IframeAdvancedLists from './iframeAdvancedLists';
import IframeProductLists from './iframeProductList';
import IframeMultiImageLists from './iframeMultiImageLists';

const Lists = () => {
  const PrimaryListsCode = `import { useState } from 'react';
  const PrimaryLists = () => {

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

    return (
      <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
        <div className="flex flex-col gap-4 items-center">
          <img
            className="w-10 h-10 rounded"
            src="https://d28ooetvhd6wrj.cloudfront.net/images/avatar_picture_1.jpg"
            alt="Default avatar"
          />
          <span>Default Type</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <dl className={max-w-xl text-gray-900 flex flex-col gap-y-4}>
          {items.map((item) => (
            <div key={item.key} className="flex flex-col p-4 border border-solid border-gray-200">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{item.title}</dt>
              <dd className="text-lg font-semibold">{item.description}</dd>
            </div>
          ))}
          </dl>      
        </div>
      </div>
    )
  }`;

  const AdvancedListsCode = `import { useState } from 'react';
  const AdvancedLists = () => {

    const [listItemsMeta, setListItemsMeta] = useState<ListItem[]>([
      {
        key: '1',
        name: 'Neil Sims',
        email: 'kyobo001@test.com',
        cost: '$1,320',
      },
      {
        key: '2',
        name: 'Olivia Smith',
        email: 'kyobo002@test.com',
        cost: '$123,111',
      },
      {
        key: '3',
        name: 'Ethan Johnson',
        email: 'kyobo003@test.com',
        cost: '$93,320',
      },
      {
        key: '4',
        name: 'Ava Davis',
        email: 'kyobo004@test.com',
        cost: '$21,320',
      },
      {
        key: '5',
        name: 'Liam Wilson',
        email: 'kyobo005@test.com',
        cost: '$1,320',
      },
      {
        key: '6',
        name: 'Mia Brown',
        email: 'kyobo006@test.com',
        cost: '$220',
      },
    ]);

    const onToggle = () => {
      setIsModalVisible(!isModalVisible);
    };
  
    const handleDataChange = (data: ListItem[]) => {
      // 기존 데이터에 파라미터 데이터 추가 - 파라미터로 받을 때 타입 지정!!
      const updatedListItemsMeta = [...listItemsMeta, ...data];
      setListItemsMeta(updatedListItemsMeta);
    };

    return (
      <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
        <div className="relative flex flex-col gap-4 items-center p-4 border border-solid rounded-lg border-gray-400 max-h-52 overflow-y-auto">
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {listItemsMeta.map((item) => (
              <li key={item.key} className="p-4 sm:p-2">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://d28ooetvhd6wrj.cloudfront.net/images/avatar_picture_1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{item.name}</p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">{item.email}</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {item.cost}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div
            className="sticky w-full rounded-lg bg-white border border-solid bottom-0 p-1.5 flex justify-center items-center"
            onClick={onToggle}
          >
            추가
          </div>
        </div>
        {isModalVisible && ...AddModal}
      </div>
    )
  }`;

  const ProductListsCode = `import { useState } from 'react';
  const ProductLists = () => {

    const items = [
      {
        key: '1',
        isBadge: true,
        title: 'List Title name 1',
        description: 'List subtitle contents one',
        cost: '2,300원',
      },
      {
        key: '2',
        isBadge: true,
        title: 'List Title name 2',
        description: 'List subtitle contents two',
        cost: '122,300원',
      },
      {
        key: '3',
        isBadge: false,
        title: 'List Title name 3',
        description: 'List subtitle contents three',
        cost: '123,456원',
      },
      {
        key: '4',
        isBadge: false,
        title: 'List Title name 4',
        description: 'List subtitle contents four',
        cost: '1,123,456원',
      },
      {
        key: '5',
        isBadge: true,
        title: 'List Title name 5',
        description: 'List subtitle contents five',
        cost: '10,123,456원',
      },
      {
        key: '6',
        isBadge: false,
        title: 'List Title name 6',
        description: 'List subtitle contents six',
        cost: '100,123,456원',
      },
    ];

    const onToggle = () => {
      setIsModalVisible(!isModalVisible);
    };
  
    const handleDataChange = (data: ListItem[]) => {
      // 기존 데이터에 파라미터 데이터 추가 - 파라미터로 받을 때 타입 지정!!
      const updatedListItemsMeta = [...listItemsMeta, ...data];
      setListItemsMeta(updatedListItemsMeta);
    };

    return (
      <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
        <div className="relative flex flex-col gap-4 items-center p-4 border border-solid rounded-lg border-gray-400 max-h-52 overflow-y-auto">
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {listItemsMeta.map((item) => (
              <li key={item.key} className="p-4 sm:p-2">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://d28ooetvhd6wrj.cloudfront.net/images/avatar_picture_1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{item.name}</p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">{item.email}</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {item.cost}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div
            className="sticky w-full rounded-lg bg-white border border-solid bottom-0 p-1.5 flex justify-center items-center"
            onClick={onToggle}
          >
            추가
          </div>
        </div>
        {isModalVisible && ...AddModal}
      </div>
    )
  }`;

  const MultiImageListsCode = `import { useState } from 'react';
  const MultiImageLists = () => {

    const items = [
      {
        key: '1',
        isBadge: true,
        title: 'List Title name 1',
        description: 'List subtitle contents one',
        cost: '2,300원',
      },
      {
        key: '2',
        isBadge: true,
        title: 'List Title name 2',
        description: 'List subtitle contents two',
        cost: '122,300원',
      },
      {
        key: '3',
        isBadge: false,
        title: 'List Title name 3',
        description: 'List subtitle contents three',
        cost: '123,456원',
      },
      {
        key: '4',
        isBadge: false,
        title: 'List Title name 4',
        description: 'List subtitle contents four',
        cost: '1,123,456원',
      },
      {
        key: '5',
        isBadge: true,
        title: 'List Title name 5',
        description: 'List subtitle contents five',
        cost: '10,123,456원',
      },
      {
        key: '6',
        isBadge: false,
        title: 'List Title name 6',
        description: 'List subtitle contents six',
        cost: '100,123,456원',
      },
    ];

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedState, setSelectedState] = useState<SelectedItem>();
  
    const onToggle = () => {
      setIsModalVisible(!isModalVisible);
    };
  
    const onUpdate = (updatedItem: SelectedItem) => {
      // 상태 업데이트
      setSelectedState(updatedItem);
  
      // 업데이트 데이터 반영
      const updatedData = items.map((item) => {
        if (item.key === updatedItem.key) {
          return updatedItem;
        }
        return item;
      });
      // items 배열을 업데이트
      setItems(updatedData);
    };
  
    const handleViewModal = (key?: string) => {
      setIsModalVisible(true);
      // 키값 매핑
      let item = items.filter((item) => item.key === key);
      if (item.length > 0) {
        setSelectedState(item[0]);
      }
    };

    return (
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
          {items.map((item) => (
            <div className="relative" key={item.key}>
              <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-80 ">
                <img
                  src={...url}
                  alt={...img alt value}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <div className="absolute opacity-50 h-36 bottom-0 left-0 w-full bg-gradient-to-t from-black" />
                <p className="absolute p-4 right-0 bottom-0 text-white text-right font-semibold">{item.cost}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <div className="flex flex-col">
                  <h3 className="text-sm text-gray-700 mt-2">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{item.description}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  className="bg-gray-300 w-full p-1.5 rounded-md text-sm text-gray-700"
                  onClick={() => {
                    handleViewModal(item.key);
                  }}
                >
                  수정하기
                </button>
              </div>
            </div>
          ))}
        </div>
        {isModalVisible && ...update Modal }
      </div>
    )
  }`;

  const items = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/dataDisplay/Lists',
          children: [
            {
              label: 'Data Display',
              path: '/dataDisplay/Lists',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: "Lists",
    description: `N개의 묶음 데이터를 글머리 기호, 숫자 또는 아이콘과 기타 스타일 및 레이아웃이 포함된 정렬된 형식으로 웹 페이지에 나타낼 수
    있습니다.`
  }

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={PrimaryListsCode} />
      <IframeLists />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={AdvancedListsCode} />
      <IframeAdvancedLists />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={ProductListsCode} />
      <IframeProductLists />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={MultiImageListsCode} />
      <IframeMultiImageLists />
      <hr className="border-t border-solid border-gray-300 mt-12" />
    </div>
  );
};

export default Lists;
