import { useState } from 'react';
import { SelectedItem } from '@/interfaces/UtilityInterface';
import ListViewModal from './listViewModal';

const IframeProductLists = () => {
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

  const handleViewModal = (key: string) => {
    setIsModalVisible(true);
    // 키값 매핑
    let item = items.filter((item) => item.key === key);
    if (item.length > 0) {
      setSelectedState(item[0]);
    }
  };

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Product Lists types</div>
      </div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
          {items.map((item) => (
            <div className="group relative" key={item.key}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-80 ">
                <img
                  src={`https://dev.semokids.com/contents/images/${item.key}.png`}
                  alt={`${item.key} "이미지"`}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div
                  className="flex flex-col"
                  onClick={() => {
                    handleViewModal(item.key);
                  }}
                >
                  {item.isBadge && (
                    <span className="w-fit rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700">오리지널</span>
                  )}
                  <h3 className="text-sm text-gray-700 mt-2">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                  <p className="text-sm font-medium text-gray-900">{item.cost}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalVisible ? <ListViewModal onToggle={onToggle} item={selectedState} /> : null}
    </div>
  );
};

export default IframeProductLists;
