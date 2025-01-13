import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeToggleSimple from './iframeToggleSimple';
import IframeToggleShort from './iframeToggleShort';
import IframeToggleIcon from './iframeToggleIcon';
const Toggles = () => {
  const toggelSimple: string = `const toggelSimple = () => {
    return (
      <fieldset>
        <div className="mt-4">
          <label htmlFor="toggelSimple" className="relative h-8 w-14 cursor-pointer block">
            <input type="checkbox" id="toggelSimple" className="peer sr-only" />
            <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-blue-500"></span>
            <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
          </label>
        </div>
      </fieldset>
    )
  }`;
  const toggelShort: string = `const toggelShort = () => {
    return (
      <fieldset>
        <div className="mt-4">
          <label htmlFor="toggelShort" className="relative h-8 w-12 cursor-pointer block">
            <input type="checkbox" id="toggelShort" className="peer sr-only" />
            <span className="absolute inset-0 m-auto h-4 rounded-full bg-gray-300 peer-checked:bg-blue-500"></span>
            <span className="absolute inset-y-0 start-0 m-auto h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6 shadow border border-solid border-gray-200"></span>
          </label>
          </div>
      </fieldset>
    )
  }`;

  const toggelWithIcon: string = `const toggelShort = () => {
  return (
    <fieldset>
        <div className="mt-4">
          <label htmlFor="iconToggle" className="relative h-8 w-14 cursor-pointer block">
            <input
              type="checkbox"
              id="iconToggle"
              className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
            />
            <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-blue-600">
              <svg
                data-unchecked-icon
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                data-checked-icon
                xmlns="http://www.w3.org/2000/svg"
                className="hidden h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-blue-500"></span>
          </label>
        </div>
      </fieldset>
    )
  }`;

  const items: BreadcrumbsItem[] = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/inputs/toggles',
          children: [
            {
              label: 'Inputs',
              path: '/inputs/toggles',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo: PageInfoType = {
    title: 'Toggles',
    description: `Toggles 는 사용자가 어떤 기능을 켜거나 끌 수 있도록 해야하는 경우에 사용된다. 예를 들어 알람을 받을지 말지 설정하거나
    웹페이지를 다크모드로 보여줄지말지를 설정할 수 있다. 직관성을 긴 알약 형태의 도형 안에 동그란 도형이 좌우로 움직이는
    움직이는 형태로 디자인 하는 경우가 있다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={toggelSimple} />
      <IframeToggleSimple />
      <hr className="border-t border-solid border-gray-300 mt-12"></hr>
      <CodeBoard code={toggelShort} />
      <IframeToggleShort />
      <hr className="border-t border-solid border-gray-300 mt-12"></hr>
      <CodeBoard code={toggelWithIcon} />
      <IframeToggleIcon />
    </div>
  );
};

export default Toggles;
