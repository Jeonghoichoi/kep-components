import Breadcrumbs from '@/components/common/Breadcrumbs';
import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeRadio from './iframeRadio';
const Radio = () => {
  const code: string = `const Radio = () => {
  const Radio:<string> = 'Radio' 
  return (
    <div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
      <fieldset>
        <div className="flex items-center gap-x-2">
          <input id="simpleRadio" name="push-notifications" type="radio" className="h-5 w-5" />
          <label
            htmlFor="simpleRadio"
            className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer dark:text-gray-400"
          >
            simpleRadio
          </label>
        </div>
      </fieldset>
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
          path: '/inputs/radio',
          children: [
            {
              label: 'Inputs',
              path: '/inputs/radio',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo: PageInfoType = {
    title: 'Radio',
    description:
      '라디오 버튼은 기본적으로 가장 일반적으로 사용되는 옵션이 선택되어 있어야 합니다. 라디오 버튼은 일반적으로 작은 원으로 렌더링되며 선택 시,채워지거나 강조 표시됩니다.',
  };

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={code} />
      <IframeRadio />
    </div>
  );
};

export default Radio;
