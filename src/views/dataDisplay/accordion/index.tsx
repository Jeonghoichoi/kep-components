import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeSimpleAccordion from './iframeAccordionSimple';
import IframeIconAccordion from './iframeAccordionIcon';
import IframeBorderAccordion from './iframeAccordionBorder';
import IframeWrapAccordion from './iframeAccordionWrap';
const Accordion = () => {
  const simpleAccordion: string = `const simpleAccordion = () => {
		return (
			<div className="space-y-4 w-full">
				<details className="group [&_summary::-webkit-details-marker]:hidden" open>
					<summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
						<h2 className="font-medium">지식성장 회원이 되고싶으면 어떻게 해야하나요?</h2>
						<ChevronDownIcon className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" />
					</summary>
					<p className="mt-4 px-4 leading-relaxed text-gray-700">
					가입하면 됩니다.
					</p>
				</details>
				<details className="group [&_summary::-webkit-details-marker]:hidden">
					<summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
						<h2 className="font-medium"> Lorem ipsum dolor sit amet consectetur adipisicing?</h2>
						<ChevronDownIcon className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" />
					</summary>
					<p className="mt-4 px-4 leading-relaxed text-gray-700">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
						molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
						voluptate dicta quo officiis explicabo consequuntur distinctio corporis
						earum similique!
					</p>
				</details>
			</div>
		)
	  }`;
  const iconAccordion: string = `const iconAccordion = () => {
		return (
			<div className="space-y-4 w-full">
				<details className="group rounded-lg bg-gray-50 p-6" open>
					<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
						<h2 className="font-medium">아코디언 제목입니다.</h2>
						<span className="relative h-5 w-5 shrink-0">
							<PlusCircleIcon className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" />
							<MinusCircleIcon className="absolute inset-0 opacity-0 group-open:opacity-100" />
						</span>
					</summary>
					<p className="mt-4 leading-relaxed text-gray-700">
						아코디언 내용입니다!! 아코디언 내용입니다!!아코디언 내용입니다!!아코디언 내용입니다!!아코디언 내용입니다!!
					</p>
				</details>
			</div>
		)
	  }`;
  const borderAccordion: string = `const borderAccordion = () => {
		return (
			<div className="space-y-4 w-full">
				<details
					className="group border-s-4 border-solid border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
					open
				>
					<summary className="flex cursor-pointer items-center justify-between gap-1.5">
					<h2 className="text-lg font-medium text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>
					<span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
						<PlusIcon className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45" />
					</span>
					</summary>
					<p className="mt-4 leading-relaxed text-gray-700">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
					molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
					voluptate dicta quo officiis explicabo consequuntur distinctio corporis
					earum similique!
					</p>
				</details>
			</div>
		)
	  }`;
  const wrapAccordion: string = `const wrapAccordion = () => {
		return (
			<div className="w-full divide-y divide-gray-200 rounded-xl border border-solid border-gray-100 bg-white">
				<details className="group p-6 [&_summary::-webkit-details-marker]:hidden border-solid" open>
					<summary  className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
						<h2 className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>
						<ChevronDownIcon className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" />
					</summary>
					<p className="mt-4 leading-relaxed text-gray-700">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
						molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
						voluptate dicta quo officiis explicabo consequuntur distinctio corporis
						earum similique!
					</p>
				</details>
				<details className="group p-6 [&_summary::-webkit-details-marker]:hidden border-solid" open>
					<summary  className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
						<h2 className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>
						<ChevronDownIcon className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" />
					</summary>
					<p className="mt-4 leading-relaxed text-gray-700">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
						molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
						voluptate dicta quo officiis explicabo consequuntur distinctio corporis
						earum similique!
					</p>
				</details>
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
          path: '/dataDisplay/accordion',
          children: [
            {
              label: 'Data Display',
              path: '/dataDisplay/accordion',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo: PageInfoType = {
    title: 'Accordion',
    description: `아코디언은 세로로 쌓여있는 아이템 리스트이며 펼치고 숨기는 기능을 갖고 있습니다.
    레이블을 클릭하면 콘텐츠나 하위 메뉴를 보여주는 영역이 펼쳐집니다. 아코디언을 활용하여 
    작은 영역에서 효과적으로 사이트를 탐색하거나 정보를 확인할 수 있습니다.
    `,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      {/* 일반 아코디언 */}
      <CodeBoard code={simpleAccordion} />
      <IframeSimpleAccordion />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 아이콘이 있는 아코디언 */}
      <CodeBoard code={iconAccordion} />
      <IframeIconAccordion />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* border 아코디언 */}
      <CodeBoard code={borderAccordion} />
      <IframeBorderAccordion />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* wrap 아코디언 */}
      <CodeBoard code={wrapAccordion} />
      <IframeWrapAccordion />
      <hr className="border-t border-solid border-gray-300 mt-12" />
    </div>
  );
};

export default Accordion;
