import { useState } from 'react';
import { ListItem } from '@/interfaces/UtilityInterface';
import ListAddFormModal from './listAddFormModal';

const IframeAdvancedLists = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
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
    // 기존 데이터에 파라미터 데이터 추가 - 파라미터로 받을 때 타입 지정해야함
    const updatedListItemsMeta = [...listItemsMeta, ...data];
    setListItemsMeta(updatedListItemsMeta);
  };

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">AdvancedLists types</div>
      </div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
          <div className="relative flex flex-col gap-4 items-center p-4 border border-solid rounded-lg border-gray-400 max-h-52 overflow-y-auto">
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              {listItemsMeta.map((item) => (
                <li key={item.key} className="p-4 sm:p-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
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
        </div>
      </div>
      {isModalVisible ? <ListAddFormModal onToggle={onToggle} onDataChange={handleDataChange} /> : null}
    </div>
  );
};

export default IframeAdvancedLists;
