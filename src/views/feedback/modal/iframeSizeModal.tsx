import { useState } from 'react';
import SmallModal from './size/SmallModal';
import MiddleModal from './size/MiddleModal';
import LargeModal from './size/LargeModal';
import ExtraLargeModal from './size/ExtraLargeModal';
import FullPageModal from './size/FullPageModal';

const IframeSizeModal = () => {
  const ModalBtnState: { key: number; nm: string }[] = [
    {
      key: 1,
      nm: 'Small',
    },
    {
      key: 2,
      nm: 'Middle',
    },
    {
      key: 3,
      nm: 'Large',
    },
    {
      key: 4,
      nm: 'ExtraLarge',
    },
    {
      key: 5,
      nm: 'FullPage',
    },
  ];

  type ModalState = {
    isSmallOpen: boolean;
    isMiddleOpen: boolean;
    isLargeOpen: boolean;
    isExtraLargeOpen: boolean;
    isFullPageOpen: boolean;
  };

  const [modalState, setModalState] = useState<ModalState>({
    isSmallOpen: false,
    isMiddleOpen: false,
    isLargeOpen: false,
    isExtraLargeOpen: false,
    isFullPageOpen: false,
  });

  const handleModalOpen = (modalName: string) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  const handleModalClose = (modalName: string) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  return (
    <>
      <div className="flex flex-col gap-5 mt-12">
        <h2 className="text-lg text-slate-900 dark:text-gray-400">Modal By Size</h2>
        <div className="p-6 border-gray-200 border border-solid rounded-lg relative h-92">
          <div className="flex items-center justify-center gap-x-4">
            {ModalBtnState.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => handleModalOpen(`is${item.nm}Open`)}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                {item.nm} modal
              </button>
            ))}
          </div>
        </div>
      </div>
      {modalState.isSmallOpen && <SmallModal onToggle={handleModalClose} />}
      {modalState.isMiddleOpen && <MiddleModal onToggle={handleModalClose} />}
      {modalState.isLargeOpen && <LargeModal onToggle={handleModalClose} />}
      {modalState.isExtraLargeOpen && <ExtraLargeModal onToggle={handleModalClose} />}
      {modalState.isFullPageOpen && <FullPageModal onToggle={handleModalClose} />}
    </>
  );
};

export default IframeSizeModal;
