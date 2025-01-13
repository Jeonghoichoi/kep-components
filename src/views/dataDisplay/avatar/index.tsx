import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeAvatar from './iframeAvatar';
import IframeAvatarToolip from './iframeAvatarToolip';
import IframeAvatarDotIndicator from './iframeAvatarDotIndicator';
import IframeAvatarStacked from './iframeAvatarStacked';
import IframeAvatarWithText from './iframeAvatarWithText';
import IframeAvatarDropdown from './iframeAvatarDropdown';
import IframeAvatarSizes from './iframeAvatarSizes';

const Avatar = () => {
  const PrimaryAvatarcode: string = `const AvatarImages = () => {

    return (
      <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
        <div className="flex flex-col gap-4 items-center">
          <img
            className="w-10 h-10 rounded"
            src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
            alt="Default avatar"
          />
          <span>Default Type</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="https://dev.semokids.com/contents/images/avatar_picture_2.jpg"
            alt="Rounded avatar"
          />
          <span>Round Type</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img
            className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="https://dev.semokids.com/contents/images/avatar_picture_3.jpg"
            alt="Bordered avatar"
          />
          <span>Bordered Type</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-12 h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
            </svg>
          </div>
          <span>Placehoder Type</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
          </div>
          <span>Placehoder Initial Type</span>
        </div>
      </div>
    )
  }`;

  const AvatarTooltipcode: string = `const AvatarTooltip = () => {

    return (
      <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
        <div className="relative group">
          <div
            id="tooltip-jese"
            role="tooltip"
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-10 invisible group-hover:visible group-hover:opacity-100 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            {name1}
            <div className="tooltip-arrow" data-popper-arrow="top"></div>
          </div>
          <img
            data-tooltip-target="tooltip-jese"
            className="w-10 h-10 rounded"
            src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
            alt="avatar_picture_1"
          />
        </div>
        <div className="relative group">
          <div
            id="tooltip-jese"
            role="tooltip"
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-10 invisible group-hover:visible group-hover:opacity-100 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            {name2}
            <div className="tooltip-arrow" data-popper-arrow="top"></div>
          </div>
          <img
            data-tooltip-target="tooltip-jese"
            className="w-10 h-10 rounded"
            src="https://dev.semokids.com/contents/images/avatar_picture_2.jpg"
            alt="avatar_picture_2"
          />
        </div>
        <div className="relative group">
          <div
            id="tooltip-jese"
            role="tooltip"
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-10 invisible group-hover:visible group-hover:opacity-100 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            {name3}
            <div className="tooltip-arrow" data-popper-arrow="top"></div>
          </div>
          <img
            data-tooltip-target="tooltip-jese"
            className="w-10 h-10 rounded"
            src="https://dev.semokids.com/contents/images/avatar_picture_3.jpg"
            alt="avatar_picture_3"
          />
        </div>
        <div className="relative group">
          <div
            id="tooltip-jese"
            role="tooltip"
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-10 invisible group-hover:visible group-hover:opacity-100 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            {name4}
            <div className="tooltip-arrow" data-popper-arrow="top"></div>
          </div>
          <img
            data-tooltip-target="tooltip-jese"
            className="w-10 h-10 rounded"
            src="https://dev.semokids.com/contents/images/avatar_picture_4.jpg"
            alt="avatar_picture_4"
          />
        </div>
      </div>
    )
  }`;

  const AvatarDotIndicatorCode: string = `const AvatarDotIndicator = () => {

    return (
      <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
        <div className="relative">
          <img
            className="w-10 h-10 rounded-full"
            src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
            alt="avatar_picture_1"
          />
          <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white border-solid dark:border-gray-800 rounded-full"></span>
        </div>
        <div className="relative">
          <img
            className="w-10 h-10 rounded"
            src="https://dev.semokids.com/contents/images/avatar_picture_2.jpg"
            alt="avatar_picture_2"
          />
          <span className="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white border-solid dark:border-gray-800 rounded-full"></span>
        </div>
        <div className="relative">
          <img
            className="w-10 h-10 rounded-full"
            src="https://dev.semokids.com/contents/images/avatar_picture_3.jpg"
            alt="avatar_picture_3"
          />
          <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white border-solid dark:border-gray-800 rounded-full"></span>
        </div>
        <div className="relative">
          <img
            className="w-10 h-10 rounded"
            src="https://dev.semokids.com/contents/images/avatar_picture_4.jpg"
            alt="avatar_picture_4"
          />
          <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white border-solid dark:border-gray-800 rounded-full"></span>
        </div>
      </div>
    )
  }`;

  const AvatarStackedCode: string = `const AvatarStacked = () => {

    return (
      <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
        <div className="flex mb-5 -space-x-4">
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
            alt="avatar_picture_1"
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://dev.semokids.com/contents/images/avatar_picture_2.jpg"
            alt="avatar_picture_2"
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://dev.semokids.com/contents/images/avatar_picture_3.jpg"
            alt="avatar_picture_3"
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://dev.semokids.com/contents/images/avatar_picture_4.jpg"
            alt="avatar_picture_4"
          />
        </div>
        <div className="flex -space-x-4">
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
            alt="avatar_picture_1"
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://dev.semokids.com/contents/images/avatar_picture_2.jpg"
            alt="avatar_picture_2"
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://dev.semokids.com/contents/images/avatar_picture_3.jpg"
            alt="avatar_picture_3"
          />
          <a
            className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white border-solid rounded-full hover:bg-gray-600 dark:border-gray-800"
            href="#"
          >
            +99
          </a>
        </div>
      </div>
    )
  }`;

  const AvatarWithTextCode: string = `const AvatarWithTextCode = () => {

    return (
      <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
            alt="avatar_picture_1"
          />
          <div className="font-medium dark:text-white">
            <div>{name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              서울특별시 종로구 종로 1 | 사업자등록번호 : 102-81-11670
            </div>
          </div>
        </div>
      </div>
    )
  }`;

  const AvatarDropDownCode: string = `import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';

// 아이콘 태그화
function IconOne() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z" stroke="#FB923C" strokeWidth="2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M18.804 30H29.1963L24.0001 21L18.804 30Z" stroke="#FDBA74" strokeWidth="2" />
    </svg>
  );
}

function IconThree() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}

  const AvatarDropDown = () => {

    // 더미 데이터
    const solutions = [
      {
        name: 'Avatar Title one',
        description: 'subtitle contents one',
        path: '/#',
        icon: IconOne,
      },
      {
        name: 'Avatar Title two',
        description: 'subtitle contents two',
        path: '/#',
        icon: IconTwo,
      },
      {
        name: 'Avatar Title three',
        description: 'subtitle contents three',
        path: '/#',
        icon: IconThree,
      },
    ];
  
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">
            Avatar User DropDown
            <span className="text-sm text-gray-500 dark:text-gray-400">(아이콘 클릭 시 드롭다운 메뉴를 볼 수 있습니다.)</span>
          </div>
          <button className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">PREVIEW</button>
        </div>
        <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg h-[200px]">
          <div className="flex flex-auto justify-evenly items-start md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={\'flex flex-col items-center gap-y-1 \${\open ? '' : 'text-opacity-90'}
                    \group}
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
                      alt="avatar_picture_1"
                    />
                    <span>Click me</span>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-80 -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                <item.icon aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    );
  }`;

  const AvatarSizesCode: string = `const AvatarSizes = () => {

    return (
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg h-[200px]">
        <div className="flex flex-auto justify-evenly items-center md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
          <img
            className="w-6 h-6 rounded"
            src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
            alt="Extra small avatar"
          />
          <img
            className="w-8 h-8 rounded"
            src="https://dev.semokids.com/contents/images/avatar_picture_2.jpg"
            alt="Small avatar"
          />
          <img
            className="w-10 h-10 rounded"
            src="https://dev.semokids.com/contents/images/avatar_picture_3.jpg"
            alt="Medium avatar"
          />
          <img
            className="w-20 h-20 rounded"
            src="https://dev.semokids.com/contents/images/avatar_picture_4.jpg"
            alt="Large avatar"
          />
          <img
            className="rounded w-36 h-36"
            src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
            alt="Extra large avatar"
          />
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
          path: '/dataDisplay/avatar',
          children: [
            {
              label: 'Data Display',
              path: '/dataDisplay/avatar',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo: PageInfoType = {
    title: 'AVATAR',
    description: `아바타 구성 요소를 사용하면 다양한 스타일과 크기를 기반으로 하는 이미지 요소 또는 SVG 개체를 사용하여 사용자 프로필의
    시각적 표현을 표시할 수 있습니다.`,
  };

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={PrimaryAvatarcode} />
      <IframeAvatar />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={AvatarTooltipcode} />
      <IframeAvatarToolip />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={AvatarDotIndicatorCode} />
      <IframeAvatarDotIndicator />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={AvatarStackedCode} />
      <IframeAvatarStacked />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={AvatarWithTextCode} />
      <IframeAvatarWithText />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={AvatarDropDownCode} />
      <IframeAvatarDropdown />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={AvatarSizesCode} />
      <IframeAvatarSizes />

      {/* <iframe src="/inputs/button/iframeButton" height="400" width="400" /> */}
    </div>
  );
};

export default Avatar;
