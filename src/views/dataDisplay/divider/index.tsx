import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeDividerSimple from './iframeDividerSimple';
import IframeDividerDotted from './iframeDividerDotted';
import IframeDividerVertical from './iframeDividerVertical';
import IframeDividerText from './iframeDividerText';
const Divider = () => {
  const simpleDivider = `const simpleDivider = () => {
  return (
    <hr className="border-t border-solid border-gray-300 w-full"/>
  )}`;
  const dottedDivider = `const dottedDivider = () => {
  return (
    <hr className="border-t border-dashed border-gray-300 w-full"/>
  )}`;
  const verticalDivider = `const verticalDivider = () => {
  return (
    <div className="h-8 bg-gray-500" style={{width: "2px"}}></div>
  )}`;
  const textDivider = `const textDivider = () => {
  return (
    <div className="flex items-center gap-x-4">
      <span className="w-full h-px bg-gray-500"></span>
      <span className="whitespace-nowrap">중간 영역</span>
      <span className="w-full h-px bg-gray-500"></span>
    </div>
  )}`;

  const items: BreadcrumbsItem[] = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/dataDisplay/divider',
          children: [
            {
              label: 'Data Display',
              path: '/dataDisplay/divider',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo: PageInfoType = {
    title: 'Divider',
    description: `특정한 단락을 나누거나 컨텐츠와 컨텐츠 간의 구간을 나누는 구분선입니다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 w-full h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      {/* 일반 구분선 */}
      <CodeBoard code={simpleDivider} />
      <IframeDividerSimple />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* dotted 구분선 */}
      <CodeBoard code={dottedDivider} />
      <IframeDividerDotted />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 세로 구분선 */}
      <CodeBoard code={verticalDivider} />
      <IframeDividerVertical />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 구분선 사이 글자 */}
      <CodeBoard code={textDivider} />
      <IframeDividerText />
      <hr className="border-t border-solid border-gray-300 mt-12" />
    </div>
  );
};

export default Divider;
