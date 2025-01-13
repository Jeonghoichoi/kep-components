import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframePopover from './iframePopover';
import IframeUserProfilePopover from './iframeUserProfilePopover';
import IframePlacementPopover from './iframePlacementPopover';
import IframeTriggeringPopover from './iframeTriggeringPopover';
import IframeArrowPopover from './iframeArrowPopover';

const Popover = () => {
  const PrimaryPopoverCode: string = `const PrimaryPopover = () => {

    return (
      <div className="group flex relative">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Hover me
        </button>
        <div
          role="tooltip"
          className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity -translate-x-1/2 left-1/2 duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 bottom-12"
        >
          <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">팝오버 타이틀</h3>
          </div>
          <div className="px-3 py-2">
            <p>컨텐츠에 대한 내용이 들어갑니다.</p>
            <p>컨텐츠에 대한 내용이 들어갑니다..</p>
          </div>
        </div>
      </div>
    )
  }`;

  const UserProfilePopoverCode: string = `const UserProfilePopover = () => {

    return (
      <div className="flex justify-center p-6 md:px-2 border-gray-200 border border-solid rounded-lg h-52">
        <div className="group flex items-end relative">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-10"
          >
            유저 프로필
          </button>
          <div
            role="tooltip"
            className="absolute z-10 border border-solid border-gray-200 invisible inline-block w-64 text-sm text-gray-500 transition-opacity -translate-x-1/2 left-1/2  duration-300 bg-white rounded-lg shadow-sm∂ dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 group-focus-within:visible group-hover:visible opacity-100 bottom-12"
          >
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <a href="#">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://d28ooetvhd6wrj.cloudfront.net/images/avatar_picture_1.jpg"
                    alt="product-thumnail 1-이미지"
                  />
                </a>
                <div>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Follow
                  </button>
                </div>
              </div>
              <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
                <a href="#">김교보</a>
              </p>
              <p className="mb-3 text-sm font-normal">
                <a href="#" className="hover:underline">
                  @kyoboKim001
                </a>
              </p>
              <p className="mb-4 text-sm">
                YouTubeStudio 대표이사
                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
                  useProfile@kyobobook.com
                </a>
              </p>
              <ul className="flex text-sm">
                <li className="mr-2">
                  <a href="#" className="hover:underline">
                    <span className="font-semibold text-gray-900 dark:text-white">799명</span>
                    <span>팔로잉</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    <span className="font-semibold text-gray-900 dark:text-white">3,758명</span>
                    <span>팔로워</span>
                  </a>
                </li>
              </ul>
            </div>
            <div data-popper-arrow></div>
          </div>
        </div>
      </div>
    )
  }`;

  const PlacementPopoverCode: string = `const PlacementPopover = () => {

    return (
      <div className="flex justify-center gap-8 p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="group flex relative">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Top Popover
          </button>
          <div
            role="tooltip"
            className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity -translate-x-1/2 left-1/2 duration-300 bg-white border border-gray-200 rounded-lg shadow-sm  dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 bottom-12"
          >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">상단 팝오버 입니다.</h3>
            </div>
            <div className="px-3 py-2">
              <p>컨텐츠에 대한 내용이 들어갑니다.</p>
              <p>컨텐츠에 대한 내용이 들어갑니다..</p>
            </div>
          </div>
        </div>
        <div className="group flex relative">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Right Popover
          </button>
          <div
            role="tooltip"
            className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity translate-x-full -right-6 duration-300 bg-white border border-gray-200 rounded-lg shadow-sm∂ dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 -bottom-6"
          >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">우측 팝오버 입니다.</h3>
            </div>
            <div className="px-3 py-2">
              <p>컨텐츠에 대한 내용이 들어갑니다.</p>
              <p>컨텐츠에 대한 내용이 들어갑니다..</p>
            </div>
          </div>
        </div>
        <div className="group flex relative">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Bottom Popover
          </button>
          <div
            role="tooltip"
            className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity -translate-x-1/2 left-1/2 duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 top-12"
          >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">하단 팝오버 입니다.</h3>
            </div>
            <div className="px-3 py-2">
              <p>컨텐츠에 대한 내용이 들어갑니다.</p>
              <p>컨텐츠에 대한 내용이 들어갑니다..</p>
            </div>
          </div>
        </div>
        <div className="group flex relative">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Left Popover
          </button>
          <div
            role="tooltip"
            className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity -translate-x-1/2 right-6 duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 -top-6"
          >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">좌측 팝오버 입니다.</h3>
            </div>
            <div className="px-3 py-2">
              <p>컨텐츠에 대한 내용이 들어갑니다.</p>
              <p>컨텐츠에 대한 내용이 들어갑니다..</p>
            </div>
          </div>
        </div>
      </div>
    )
  }`;

  const TriggeringPopoverCode: string = `import { useState, useEffect, useRef } from 'react';

const TriggeringPopover = () => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      window.addEventListener('click', onClose);
  
      return () => {
        window.removeEventListener('click', onClose);
      };
    }, []);
  
    const onClose = (e: MouseEvent) => {
      // 외부 클릭을 감지
      if (buttonRef.current && !buttonRef.current.contains(e.target as HTMLButtonElement)) {
        // 타겟에 대한 Element요소 지정해야함.
        setIsOpen(false);
      }
    };

    return (
      <div className="flex justify-center gap-8 p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="group flex relative">
          <button
            ref={buttonRef}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Click Me
          </button>
          {isOpen && (
            <div
              role="tooltip"
              className="absolute z-10 visible bottom-12 inline-block w-64 text-sm text-gray-500 transition-opacity -translate-x-1/2 left-1/2 duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
            >
              <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">상단 팝오버 입니다.</h3>
              </div>
              <div className="px-3 py-2">
                <p>컨텐츠에 대한 내용이 들어갑니다.</p>
                <p>컨텐츠에 대한 내용이 들어갑니다..</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }`;

  const ArrowPopoverCode: string = `const ArrowPopover = () => {

    return (
      <div className="flex justify-center gap-8 p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="group flex relative">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Top Popover
          </button>
          <div
            role="tooltip"
            className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity -translate-x-1/2 left-1/2 duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 bottom-12"
          >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">상단 팝오버 입니다.</h3>
            </div>
            <div className="px-3 py-2">
              <p>컨텐츠에 대한 내용이 들어갑니다.</p>
              <p>컨텐츠에 대한 내용이 들어갑니다..</p>
            </div>
          </div>
        </div>
        <div className="group flex relative">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Right Popover
          </button>
          <div
            role="tooltip"
            className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity translate-x-full -right-6 duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 -bottom-6"
          >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">우측 팝오버 입니다.</h3>
            </div>
            <div className="px-3 py-2">
              <p>컨텐츠에 대한 내용이 들어갑니다.</p>
              <p>컨텐츠에 대한 내용이 들어갑니다..</p>
            </div>
          </div>
        </div>
        <div className="group flex relative">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Bottom Popover
          </button>
          <div
            role="tooltip"
            className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity -translate-x-1/2 left-1/2 duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 top-12"
          >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">하단 팝오버 입니다.</h3>
            </div>
            <div className="px-3 py-2">
              <p>컨텐츠에 대한 내용이 들어갑니다.</p>
              <p>컨텐츠에 대한 내용이 들어갑니다..</p>
            </div>
          </div>
        </div>
        <div className="group flex relative">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Left Popover
          </button>
          <div
            role="tooltip"
            className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity -translate-x-1/2 right-6 duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 -top-6"
          >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">좌측 팝오버 입니다.</h3>
            </div>
            <div className="px-3 py-2">
              <p>컨텐츠에 대한 내용이 들어갑니다.</p>
              <p>컨텐츠에 대한 내용이 들어갑니다..</p>
            </div>
          </div>
        </div>
      </div>
    )
  }`;

  const items: BreadcrumbsItem[] = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/dataDisplay/Popover',
          children: [
            {
              label: 'Data Display',
              path: '/dataDisplay/Popover',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo: PageInfoType = {
    title: 'Popover',
    description: `구성 요소를 사용하여스타일에 따라 클릭하거나 가리킨 요소와 관련된 팝업 상자 내부 요소의 정보(프로필, 컨텐츠 요소)들을
    표시하며, Default는 arrow가 없는 형태입니다.`,
  };

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={PrimaryPopoverCode} />
      <IframePopover />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={UserProfilePopoverCode} />
      <IframeUserProfilePopover />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={PlacementPopoverCode} />
      <IframePlacementPopover />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={TriggeringPopoverCode} />
      <IframeTriggeringPopover />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={ArrowPopoverCode} />
      <IframeArrowPopover />
      <hr className="border-t border-solid border-gray-300 mt-12" />
    </div>
  );
};

export default Popover;
