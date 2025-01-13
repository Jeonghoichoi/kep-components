import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeModal from './iframeModal';
import IframeFullModal from './iframeFullModal';
import IframePopUpModal from './iframePopUpModal';
import IframeSizeModal from './iframeSizeModal';

const Modal = () => {
  const DefaultModalCode: string = `import { useState } from 'react';
import DefaultModal from './DefaultModal';
  
  const DefaultModal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="p-6 border-gray-200 border border-solid rounded-lg relative h-92">
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={onToggle}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Click Me!!
          </button>
        </div>
        {isOpen && <DefaultModal onToggle={onToggle} />}
      </div>

      // Modal Components Source ...
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none w-full"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">우리동네소식</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={onToggle}
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                의원을 제명하려면 국회재적의원 ...Contents
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                지방자치단체는 주민의 복리에 관한 ...Contents
              </p>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={onToggle}
              >
                확인
              </button>
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={onToggle}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }`;

  const FullPageModalCode: string = `import { useState } from 'react';
import FullModal from './FullModal';
  const FullPageModal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="p-6 border-gray-200 border border-solid rounded-lg relative h-92">
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={onToggle}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Click Me!!
            </button>
          </div>
          {isOpen && ...FullPageModal Components }
        </div>
      </div>

      // Modal Components Source ...
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className="justify-center items-center flex overflow-x-hidden fixed overflow-y-auto inset-0 z-50 outline-none focus:outline-none w-screen h-screen"
      >
        <div className="relative w-screen h-screen">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">우리동네소식</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={onToggle}
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                의원을 제명하려면 국회재적의원 ...Contents
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                지방자치단체는 주민의 복리에 관한 ...Contents
              </p>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                확인
              </button>
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }`;

  const PopUpModalCode: string = `import { useState } from 'react';
import PopupModal from './PopupModal';

  const PopUpModal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="p-6 border-gray-200 border border-solid rounded-lg relative h-92">
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={onToggle}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Click Me!!
          </button>
        </div>
        {isOpen && ...PopUpModal Components }
      </div>

      // Modal Components Source ...
      <div
      id="popup-modal"
      tabIndex={-1}
      className="fixed z-50 inset-0 p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full"
    >
      <div className="relative flex justify-center items-center w-[calc(100%_+_13rem)] h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
            onClick={onToggle}
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">선택한 데이터를 삭제하시겠습니까?</h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={onToggle}
            >
              삭제
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={onToggle}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
    )
  }`;

  const SizeModalCode: string = `import { useState } from 'react';
import SmallModal from './size/SmallModal';
import MiddleModal from './size/MiddleModal';
import LargeModal from './size/LargeModal';
import ExtraLargeModal from './size/ExtraLargeModal';
import FullPageModal from './size/FullPageModal';
  
  const SizeModal = () => {
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
      <div className="p-6 border-gray-200 border border-solid rounded-lg relative h-92">
        <div className="flex items-center justify-center gap-x-4">
          {ModalBtnState.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => handleModalOpen('...opencode')}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              {item.nm} modal
            </button>
          ))}
        </div>
      </div>
      // modal control
      {modalState.isSmallOpen && <SmallModal onToggle={handleModalClose} />}
      {modalState.isMiddleOpen && <MiddleModal onToggle={handleModalClose} />}
      {modalState.isLargeOpen && <LargeModal onToggle={handleModalClose} />}
      {modalState.isExtraLargeOpen && <ExtraLargeModal onToggle={handleModalClose} />}
      {modalState.isFullPageOpen && <FullPageModal onToggle={handleModalClose} />}
    )
  }`;

  const items: BreadcrumbsItem[] = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/feedback/Modal',
          children: [
            {
              label: 'Feedback',
              path: '/feedback/modal',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo: PageInfoType = {
    title: 'Modal',
    description: `모달 구성 요소를 사용하여 웹 사이트 사용자에게 다양한 크기, 색상 및 스타일로 제공되는 대화형 대화 상자 및 알림을 표시합니다.`,
  };

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={DefaultModalCode} />
      <IframeModal />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={FullPageModalCode} />
      <IframeFullModal />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={PopUpModalCode} />
      <IframePopUpModal />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={SizeModalCode} />
      <IframeSizeModal />
      <hr className="border-t border-solid border-gray-300 mt-12" />
    </div>
  );
};

export default Modal;
