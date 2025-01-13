import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeFlex from './iframeFlex';
import IframeFlexJustify from './iframeFlexJustify';
import IframeFlexAlign from './iframeFlexAlign';

const Flex = () => {
  const flexLayout = `const flexLayout = () => {
    return (
      <section className="p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <ul className="flex gap-x-2 mb-4">
          <li className="flex items-center gap-x-1">
            <input id="flexDirection01" name="group3" type="radio" className="h-4 w-4" defaultChecked={true} onChange={()=>setFlexClass("row")} />
            <label htmlFor="flexDirection01" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
                flexDirection Row
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input id="flexDirection02" name="group3" type="radio" className="h-4 w-4" onChange={()=>setFlexClass("col")} />
            <label htmlFor="flexDirection02" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
                flexDirection Col
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input id="flexDirection03" name="group3" type="radio" className="h-4 w-4" onChange={()=>setFlexClass("row-reverse")} />
            <label htmlFor="flexDirection03" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
                flexDirection Row-reverse
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input id="flexDirection04" name="group3" type="radio" className="h-4 w-4" onChange={()=>setFlexClass("col-reverse")} />
            <label htmlFor="flexDirection04" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
                flexDirection Col-reverse
            </label>
          </li>
        </ul>
        <div className="flex gap-4 flex-row">
          <span className="bg-slate-600 text-white p-2 text-sm rounded">Item 1</span>
          <span className="bg-slate-600 text-white p-2 text-sm rounded">Item 2</span>
          <span className="bg-slate-600 text-white p-2 text-sm rounded">Item 3</span>
        </div>
      </section>
    )
  }`;

  const flexLayoutJustify = `const flexLayoutJustify = () => {
    return (
      <section className="p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <ul className="flex gap-x-2 mb-4">
          <li className="flex items-center gap-x-1">
              <input id="simpleDscRadio01" name="group2" type="radio" className="h-4 w-4" defaultChecked={true} onChange={()=>setJustifyClass("start")} />
              <label htmlFor="simpleDscRadio01" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
                  Justify Start
              </label>
          </li>
          <li className="flex items-center gap-x-1">
              <input id="simpleDscRadio02" name="group2" type="radio" className="h-4 w-4" onChange={()=>setJustifyClass("end")} />
              <label htmlFor="simpleDscRadio02" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
                  Justify End
              </label>
          </li>
          <li className="flex items-center gap-x-1">
              <input id="simpleDscRadio03" name="group2" type="radio" className="h-4 w-4" onChange={()=>setJustifyClass("center")} />
              <label htmlFor="simpleDscRadio03" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
                  Justify Center
              </label>
          </li>
          <li className="flex items-center gap-x-1">
              <input id="simpleDscRadio04" name="group2" type="radio" className="h-4 w-4" onChange={()=>setJustifyClass("between")} />
              <label htmlFor="simpleDscRadio04" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
                  Justify Between
              </label>
          </li>
          <li className="flex items-center gap-x-1">
              <input id="simpleDscRadio05" name="group2" type="radio" className="h-4 w-4" onChange={()=>setJustifyClass("evenly")} />
              <label htmlFor="simpleDscRadio05" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
                  Justify Evenly
              </label>
          </li>
        </ul>
        <div className="flex gap-4 justify-start">
          <span className="bg-slate-600 text-white p-2 text-sm rounded">Item 1</span>
          <span className="bg-slate-600 text-white p-2 text-sm rounded">Item 2</span>
          <span className="bg-slate-600 text-white p-2 text-sm rounded">Item 3</span>
        </div>
      </section>
    )
  }`;
  const flexLayoutAlign = `const flexLayoutAlign = () => {
    return (
      <section className="p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <ul className="flex gap-x-2 mb-4">
          <li className="flex items-center gap-x-1">
            <input id="align01" name="group2" type="radio" className="h-4 w-4" defaultChecked={true} onChange={()=>setAlignClass("start")} />
            <label htmlFor="align01" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
            start
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input id="align02" name="group2" type="radio" className="h-4 w-4"  onChange={()=>setAlignClass("end")} />
            <label htmlFor="align02" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
            end
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input id="align03" name="group2" type="radio" className="h-4 w-4"  onChange={()=>setAlignClass("center")} />
            <label htmlFor="align03" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
            center
            </label>
          </li>
          <li className="flex items-center gap-x-1">
            <input id="align04" name="group2" type="radio" className="h-4 w-4"  onChange={()=>setAlignClass("stretch")} />
            <label htmlFor="align04" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
            stretch
            </label>
          </li>
        </ul>
        <div className="flex gap-4 items-start">
          <span className="bg-slate-600 text-white py-1 px-10 text-sm rounded ">Item 1</span>
          <span className="bg-slate-600 text-white py-2 px-10 text-sm rounded">Item 2</span>
          <span className="bg-slate-600 text-white py-3 px-10 text-sm rounded">Item 3</span>
        </div>
      </section>
    )
  }`;

  const items = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/layout/flex',
          children: [
            {
              label: 'Layout',
              path: '/layout/flex',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: 'Flex',
    description:
      '전체 레이아웃을 수직/수평으로 정렬할 수 있게 제어를 하며, 브라우저 사이즈가 동적으로 변할 때에도 유연하게 요소를 배치, 정렬, 분산할 수 있는 방법을 제공합니다...',
  };

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      {/* flex Layout direction */}
      <CodeBoard code={flexLayout} />
      <IframeFlex />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* flex Layout Justify */}
      <CodeBoard code={flexLayoutJustify} />
      <IframeFlexJustify />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* flex Layout Align */}
      <CodeBoard code={flexLayoutAlign} />
      <IframeFlexAlign />
    </div>
  );
};

export default Flex;
