import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeGridBasic from './iframeGridBasic';
import IframeGridBasic2X from './iframeGridBasic2x';
import IframeGridRow from './iframeGridComplex';
import IframeGridGap from './iframeGridGap';

const Grid = () => {
  const gridBasic: string = `const gridBasic = () => {
  return (
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="grid grid-cols-2 w-full text-center gap-2 text-sm text-gray-500">
          <div className="bg-gray-100 py-2">item-1</div>
          <div className="bg-gray-100 py-2">item-1</div>
          <div className="bg-gray-100 py-2">item-1</div>
          <div className="bg-gray-100 py-2">item-1</div>
        </div>
      </div>
    )
  }`;

  const gridBasic2x: string = `const gridBasic2x = () => {
  return (
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="grid grid-cols-6 w-full text-center gap-2 text-sm text-gray-500">
          <div className="col-span-2 bg-gray-100 py-2">item-2</div>
          <div className="col-span-4 bg-gray-100 py-2">item-4</div>
          <div className="col-span-4 bg-gray-100 py-2">item-4</div>
          <div className="col-span-2 bg-gray-100 py-2">item-2</div>
        </div>
      </div>
    )
  }`;

  const gridComplex: string = `const gridComplex = () => {
    return (
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="grid grid-cols-6 w-full text-center gap-2 text-sm text-gray-500">
          <div className="bg-gray-100 py-4 col-span-3 row-span-3">col-span-3 row-span-3</div>
          <div className="bg-gray-100 py-4 col-span-2 row-span-2">col-span-2 row-span-2</div>
          <div className="bg-gray-100 py-4">col-span-2</div>
          <div className="bg-gray-100 py-4">col-span-1</div>
          <div className="bg-gray-100 py-4 col-span-3">col-span-3</div>
        </div>
      </div>
    )
  }`;

  const gridGap: string = `const gridGap = () => {
	const [gap, setGap] = useState<number>(0)
    return (
      <div className="p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="gap-4">
          <div className="col-span-1 bg-gray-100 py-4">col-span-1</div>
          <div className="col-span-2 bg-gray-100 py-4">col-span-2</div>
          <div className="col-span-4 bg-gray-100 py-4">col-span-4</div>
          <div className="col-span-3 bg-gray-100 py-4">col-span-3</div>
          <div className="col-span-3 bg-gray-100 py-4">col-span-3</div>
          <div className="col-span-1 bg-gray-100 py-4">col-span-1</div>
        </div>
        <div className="flex gap-x-2 mt-4">
          <div className="flex items-center gap-x-2 gap">
            <input id="simpleDscRadio01" name="group2" type="radio" className="h-5 w-5" defaultChecked={true} onChange={()=>setGap(0)} />
            <label htmlFor="simpleDscRadio01" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
              gap 0
            </label>
          </div>
          <div className="flex items-center gap-x-2">
            <input id="simpleDscRadio02" name="group2" type="radio" className="h-5 w-5" onChange={()=>setGap(1)} />
            <label htmlFor="simpleDscRadio02" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
              gap 1 (4px)
            </label>
          </div>
          <div className="flex items-center gap-x-2">
            <input id="simpleDscRadio03" name="group2" type="radio" className="h-5 w-5" onChange={()=>setGap(2)} />
            <label htmlFor="simpleDscRadio03" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
              gap 2 (8px)
            </label>
          </div>
          <div className="flex items-center gap-x-2">
            <input id="simpleDscRadio04" name="group2" type="radio" className="h-5 w-5" onChange={()=>setGap(3)} />
            <label htmlFor="simpleDscRadio04" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
              gap 3 (12px)
            </label>
          </div>
          <div className="flex items-center gap-x-2">
            <input id="simpleDscRadio05" name="group2" type="radio" className="h-5 w-5" onChange={()=>setGap(4)} />
            <label htmlFor="simpleDscRadio05" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
              gap 4 (16px)
            </label>
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
          path: '/layout/grid',
          children: [
            {
              label: 'Layout',
              path: '/layout/grid',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo: PageInfoType = {
    title: 'Grid',
    description: `Grid는 두 방향(가로-세로) 레이아웃 시스템 (2차원)으로 flex보다 더 복합적인 레이아웃 표현이 가능하다. 
	부모요소의 태그를 Grid Container라고 부르고 자식요소는 Grid Item이라고 부릅니다. Grid는 컨테이너에 display: grid를 설정하는 것으로 시작합니다.`,
  };

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      {/* basic grid 1x */}
      <CodeBoard code={gridBasic} />
      <IframeGridBasic />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* basic grid 2x */}
      <CodeBoard code={gridBasic2x} />
      <IframeGridBasic2X />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/*  */}
      <CodeBoard code={gridComplex} />
      <IframeGridRow />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* grid gap */}
      <CodeBoard code={gridGap} />
      <IframeGridGap />
    </div>
  );
};

export default Grid;
