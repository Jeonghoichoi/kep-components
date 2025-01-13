import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeBadgeSimple from './iframeBadgeSimple';
import IframeBadgedot from './iframeBadgedot';
import IframeBadgeRound from './iframeBadgeRound';
import IframeBadgeTheme from './iframeBadgeTheme';
const Badge = () => {
  const badgeSimpleCode: string = `const badgeSimpleCode = () => {
    const state: string = 'Badge';
    return (
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="flex flex-auto justify-evenly items-center">
          <span className="flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">{state}</span>
          <span className="flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700">{state}</span>
          <span className="flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800">{state}</span>
          <span className="flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700">{state}</span>
          <span className="flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">{state}</span>
          <span className="flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">{state}</span>
          <span className="flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700">{state}</span>
          <span className="flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700">{state}</span>
        </div>
      </div>
    )
  }`;
  const badgeDot: string = `const badgeDot = () => {
    const state: string = 'Badge';
    return (
      <div className="flex flex-auto justify-evenly items-center">
        <span className="flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 gap-x-1">
            <svg className="w-1 h-1 bg-gray-600 rounded" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
            {state}
        </span>
        <span className="flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 gap-x-1">
          <svg className="w-1 h-1 bg-red-700 rounded-full" viewBox="0 0 0 0" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
          {state}
        </span>
        <span className="flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 gap-x-1">
          <svg className="w-1 h-1 bg-yellow-700 rounded-full" viewBox="0 0 0 0" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
          {state}
        </span>
        <span className="flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 gap-x-1">
          <svg className="w-1 h-1 bg-green-600 rounded-full" viewBox="0 0 0 0" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
          {state}
        </span>
        <span className="flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 gap-x-1">
          <svg className="w-1 h-1 bg-blue-700 rounded-full" viewBox="0 0 0 0" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
          {state}
        </span>
        <span className="flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 gap-x-1">
          <svg className="w-1 h-1 bg-indigo-700 rounded-full" viewBox="0 0 0 0" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
          {state} 
        </span>
        <span className="flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 gap-x-1">
          <svg className="w-1 h-1 bg-purple-700 rounded-full" viewBox="0 0 0 0" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
          {state}
        </span>
        <span className="flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 gap-x-1">
          <svg className="w-1 h-1 bg-pink-700 rounded-full" viewBox="0 0 0 0" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
          {state}
        </span>
     </div>
    )
  }`;
  const badgeRound: string = `const badgeRound = () => {
    const state: string = 'Badge';
    return (
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
          <div className="flex flex-auto justify-evenly items-center">
            <span className="flex items-center rounded-xl bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600">{state}</span>
            <span className="flex items-center rounded-xl bg-red-100 px-2 py-1 text-xs font-medium text-red-700">{state}</span>
            <span className="flex items-center rounded-xl bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">{state}</span>
            <span className="flex items-center rounded-xl bg-green-100 px-2 py-1 text-xs font-medium text-green-700">{state}</span>
            <span className="flex items-center rounded-xl bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">{state}</span>
            <span className="flex items-center rounded-xl bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">{state}</span>
            <span className="flex items-center rounded-xl bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">{state}</span>
            <span className="flex items-center rounded-xl bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700">{state}</span>
          </div>
        </div>
    )
  }`;

  const theme: string = `const theme = () => {
    return (
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="flex flex-auto justify-evenly items-center">
          <span className="flex items-center rounded-xl bg-blue-500 px-2 py-1 text-xs font-medium text-white gap-x-1">
              <CheckBadgeIcon className="w-4 h-4" />
              {state}
          </span>
          <span className="flex items-center rounded-xl bg-red-500 px-2 py-1 text-xs font-medium text-white gap-x-1">
              <ExclamationCircleIcon className="w-4 h-4" />
              {state}
          </span>
          <span className="flex items-center rounded-xl bg-yellow-200 px-2 py-1 text-xs font-medium text-yellow-800 gap-x-1">
              <LightBulbIcon className="w-4 h-4" />
              {state}
          </span>
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
          path: '/dataDisplay/badge',
          children: [
            {
              label: 'Data Display',
              path: '/dataDisplay/badge',
            },
          ],
        },
      ],
    },
  ];
  const PageInfo: PageInfoType = {
    title: 'Badge',
    description: `Badge는 이미지나 콘텐츠의 부가 정보를 나타낼 수 있고 주목도를 높이는 기능을 한다. Badge컴포넌트는 단독으로 사용되기보다는
    아이콘,버튼,리스트, 타이트 등의 다른 컴포넌트 요소와 함께 사용되는 것이 보편적이다. 수량 카운트, 상태 표시 활용, 카테고리
    속성을 표시 등등`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      {/* Primary Button */}
      <CodeBoard code={badgeSimpleCode} />
      <IframeBadgeSimple />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={badgeDot} />
      <IframeBadgedot />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={badgeRound} />
      <IframeBadgeRound />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={theme} />
      <IframeBadgeTheme />
    </div>
  );
};

export default Badge;
