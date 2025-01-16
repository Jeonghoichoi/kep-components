import { useState } from 'react';
import { SelectedItem } from '@/interfaces/UtilityInterface';
import ListUpdateModal from './listUpdateModal';
import { faker } from '@faker-js/faker';

const IframeMultiImageLists = () => {
  const [items, setItems] = useState<SelectedItem[]>([
    {
      key: '1',
      isBadge: false,
      title: '물놀이와 스플래시!',
      description: '더위를 식혀줄 물놀이 체험! 시원한 물줄기를 맞고 즐거운 시간을 보내세요.',
      cost: '2,300원',
    },
    {
      key: '2',
      isBadge: false,
      title: '컬러풀 아트 워크샵',
      description: '창의력을 키우고 예술적 감각을 향상시킬 수 있는 아트 워크샵 체험!',
      cost: '122,300원',
    },
    {
      key: '3',
      isBadge: false,
      title: '모험가 탐험 투어',
      description: '모험가가 되어 자연 속에서 다양한 동물과 식물을 탐험하세요.',
      cost: '123,456원',
    },
    {
      key: '4',
      isBadge: true,
      title: '레고 크리에이터 코너',
      description: '무한한 상상력을 발휘할 수 있는 레고 블록으로 창조적인 작품을 만들어보세요.',
      cost: '1,123,456원',
    },
  ]);
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
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Image Overlay and Update Lists</div>
      </div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
          {items.map((item) => (
            <div className="relative" key={item.key}>
              <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-80 ">
                <img
                  src={faker.image.url()}
                  alt={`${item.key} "이미지"`}
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
      </div>
      {isModalVisible ? <ListUpdateModal onToggle={onToggle} onUpdate={onUpdate} item={selectedState} /> : null}
    </div>
  );
};

export default IframeMultiImageLists;
