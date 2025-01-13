import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeTooltip from './iframeTooltip';
import IframeColorContrast from './iframeColorContrastTooltip';
import IframePlacementTooltip from './iframePlacementTooltip';

const Tooltip = () => {
  const PrimaryTooltipCode: string = `const PrimaryPopover = () => {

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

  const ColorContrastTooltipCode: string = `const ColorContrastTooltip = () => {

    return (
      <div className="flex justify-center gap-12 p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        {/* Light Tooltip */}
        <div className="group flex relative">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Light Tooltip
          </button>
          <div
            role="tooltip"
            className="absolute z-10 invisible inline-block w-52 text-sm text-gray-600 transition-opacity -translate-x-1/2 left-1/2 duration-300 bg-gray-100 border border-solid border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 bottom-12"
          >
            <div className="px-2 py-2">
              <p>컨텐츠에 대한 내용이 들어갑니다.</p>
            </div>
            <div className="absolute w-0 h-0 border-8 border-solid border-transparent border-t-gray-200 left-1/2"></div>
          </div>
        </div>
        {/* Dark Tooltip */}
        <div className="group flex relative">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Dark Tooltip
          </button>
          <div
            role="tooltip"
            className="absolute z-10 invisible inline-block w-52 text-sm text-white transition-opacity -translate-x-1/2 left-1/2 duration-300 bg-black border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 bottom-12"
          >
            <div className="px-2 py-2">
              <p>컨텐츠에 대한 내용이 들어갑니다.</p>
            </div>
            <div className="absolute w-0 h-0 border-8 border-solid border-transparent border-t-black left-1/2"></div>
          </div>
        </div>
      </div>
    )
  }`;

  const PlacementTooltipCode: string = `const PlacementTooltip = () => {

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
            className="absolute z-10 invisible inline-block w-56 text-sm text-gray-500 transition-opacity -translate-x-1/2 left-1/2 duration-300 bg-black border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 bottom-12"
          >
            <div className="text-white px-3 py-2">
              <p>컨텐츠에 대한 내용이 들어갑니다.</p>
            </div>
            <div className="absolute w-0 h-0 border-8 border-solid border-transparent border-t-black left-1/2"></div>
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
            className="absolute z-10 invisible inline-block w-56 text-sm text-gray-500 transition-opacity translate-x-full -right-2 duration-300 bg-black border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 top-1/2 -translate-y-1/2"
          >
            <div className="text-white px-3 py-2">
              <p>컨텐츠에 대한 내용이 들어갑니다.</p>
            </div>
            <div className="absolute w-0 h-0 border-8 border-solid border-transparent border-r-black top-1/2 -translate-y-1/2 -left-4" />
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
            className="absolute z-10 invisible inline-block w-56 text-sm text-gray-500 transition-opacity -translate-x-1/2 left-1/2 duration-300 bg-black border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 top-12"
          >
            <div className="text-white px-3 py-2">
              <p>컨텐츠에 대한 내용이 들어갑니다.</p>
            </div>
            <div className="absolute w-0 h-0 border-8 border-solid border-transparent border-b-black -top-4 left-1/2" />
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
            className="absolute z-10 invisible inline-block w-56 text-sm text-gray-500 transition-opacity -translate-x-1/2 right-5 duration-300 bg-black border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 top-1/2 -translate-y-1/2"
          >
            <div className="text-white px-3 py-2">
              <p>컨텐츠에 대한 내용이 들어갑니다.</p>
            </div>
            <div className="absolute w-0 h-0 border-8 border-solid border-transparent border-l-black top-1/2 -translate-y-1/2 -right-4" />
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
    title: 'Tooltip',
    description: `구성 요소에 마우스를 올리거나 초점을 맞추었을 때 간단한 설명해줄 수 있는 도구입니다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={PrimaryTooltipCode} />
      <IframeTooltip />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={ColorContrastTooltipCode} />
      <IframeColorContrast />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={PlacementTooltipCode} />
      <IframePlacementTooltip />
      <hr className="border-t border-solid border-gray-300 mt-12" />
    </div>
  );
};

export default Tooltip;
