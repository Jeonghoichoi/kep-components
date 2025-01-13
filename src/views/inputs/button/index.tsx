import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeButton from './iframeButton';
import IframeSecondaryButton from './iframeSecondaryButton';
import IframeSoftButton from './iframeSoftButton';
import IframeIconButton from './iframeIconButton';
import IframeRoundedButton from './iframeRoundedButton';
import IframeIcon from './iframeIcon';
import IframeHoverButton from './iframeButtonHover';
const Button = () => {
  const Primarycode: string = `const PrimaryButton = () => {

    const Button:string = 'Button' // 버튼명

    return (
      <div className="flex flex-auto justify-evenly items-end md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
        <button
          type="button"
          className="flex py-4 px-4 text-xs text-white bg-indigo-600 h-[24px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
        <button
          type="button"
          className="flex py-4 px-4 text-sm text-white bg-indigo-600 h-[28px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
        <button
          type="button"
          className="flex py-4 px-4 text-sm text-white bg-indigo-600 h-[28px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
        <button
          type="button"
          className="flex py-4 px-4 text-sm text-white bg-indigo-600 h-[28px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
        <button
          type="button"
          className="flex py-4 px-4 text-sm text-white bg-indigo-600 h-[28px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
      </div>
    )
  }`;

  const Secondarycode: string = `const SecondaryButton = () => {

    const Button:string = 'Button' // 버튼명

    return (
      <div className="flex flex-auto justify-evenly items-end md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
        <button
          type="button"
          className="flex py-2 px-4 font-semibold text-xs text-gray-800 bg-white border border-solid border-gray-200 h-[24px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
        <button
          type="button"
          className="flex py-3 px-4 font-semibold text-sm text-gray-800 bg-white border border-solid border-gray-200 h-[28px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
        <button
          type="button"
          className="flex py-4 px-4 font-semibold text-sm text-gray-800 bg-white border border-solid border-gray-200 h-[32px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
        <button
          type="button"
          className="flex py-4 px-4 font-semibold text-sm text-gray-800 bg-white border border-solid border-gray-200 h-[36px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
        <button
          type="button"
          className="flex py-4 px-4 font-semibold text-sm text-gray-800 bg-white border border-solid border-gray-200 h-[40px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
      </div>
    )
  }`;

  const Softcode: string = `const SoftButton = () => {

    const Button:string = 'Button' // 버튼명

    return (
      <div className="flex flex-auto justify-evenly items-end md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
        <button
          type="button"
          className="flex py-2 px-4 font-semibold text-xs text-gray-800 bg-white border border-solid border-gray-200 h-[24px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
        <button
          type="button"
          className="flex py-3 px-4 font-semibold text-sm text-gray-800 bg-white border border-solid border-gray-200 h-[28px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
        <button
          type="button"
          className="flex py-4 px-4 font-semibold text-sm text-gray-800 bg-white border border-solid border-gray-200 h-[32px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
        <button
          type="button"
          className="flex py-4 px-4 font-semibold text-sm text-gray-800 bg-white border border-solid border-gray-200 h-[36px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
        <button
          type="button"
          className="flex py-4 px-4 font-semibold text-sm text-gray-800 bg-white border border-solid border-gray-200 h-[40px] items-center justify-items-center rounded"
        >
          {Button}
        </button>
      </div>
    )
  }`;

  const IconWithButton: string = `import { useState } from "react";

const IconWithButton = () => {

    const Button:string = 'Button' // 버튼명

    const [isSwitch, setIsSwitch] = useState<boolean>(false); // 아이콘 스위치 토글

    return (
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
          <button type="button" className="flex h-[24px] w-[24px] items-center justify-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button type="button" className="flex h-[32px] w-[32px] items-center justify-items-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button type="button" className="flex h-[40px] w-[40px] items-center justify-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  }`;

  const RoundedButtons = `import { useState } from "react";

const RoundedButtons = () => {
    
    const Button:string = 'Button' // 버튼명

    const [isColorToggle, setIsColorToggle] = useState<boolean>(false); // 컬러 스위치 토글

    return (
      <div className="flex flex-auto justify-evenly items-end md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
      <button
        type="button"
        className={\`flex py-1 px-2 text-xs \${
          isColorToggle ? "bg-indigo-600 text-white" : "bg-white text-gray-800 border border-solid border-gray-200"
        } h-[24px] items-center justify-items-center rounded-full\`}
      >
        {Button}
      </button>
      <button
        type="button"
        className={\`flex py-1 px-2 text-sm \${
          isColorToggle ? "bg-indigo-600 text-white" : "bg-white text-gray-800 border border-solid border-gray-200"
        } h-[28px] items-center justify-items-center rounded-full\`}
      >
        {Button}
      </button>
      <button
        type="button"
        className={\`flex py-1.5 px-2.5 text-sm \${
          isColorToggle ? "bg-indigo-600 text-white" : "bg-white text-gray-800 border border-solid border-gray-200"
        } h-[32px] items-center justify-items-center rounded-full\`}
      >
        {Button}
      </button>
      <button
        type="button"
        className={\`flex py-2 px-3 text-sm \${
          isColorToggle ? "bg-indigo-600 text-white" : "bg-white text-gray-800 border border-solid border-gray-200"
        } h-[36px] items-center justify-items-center rounded-full\`}
      >
        {Button}
      </button>
      <button
        type="button"
        className={\`flex py-2.5 px-3.5 text-sm \${
          isColorToggle ? "bg-indigo-600 text-white" : "bg-white text-gray-800 border border-solid border-gray-200"
        } h-[40px] items-center justify-items-center rounded-full\`}
      >
        {Button}
      </button>
    </div>
    )
  }`;
  const HoverButton: string = `const HoverButton = () => {
  return(
    <div className="flex justify-evenly p-6 md:px-2 border-gray-200 border border-solid rounded-lg gap-x-4">
        <button 
        className="text-sm border-2 text-blue-500 font-semibold border-solid border-blue-500 flex items-center gap-x-1 py-2 px-4 rounded 
        hover:bg-blue-500 hover:text-white transition-all group hover:ease-out">
            다음 버튼 <ArrowRightIcon className="w-4 h-4 group-hover:animate-translateX15 duration-15"/>
        </button>
        <button 
        className="text-sm border-2 text-blue-500 font-semibold border-solid border-blue-500 flex items-center gap-x-1 py-2 px-4 rounded 
        hover:bg-blue-500 hover:text-white transition-all hover:ease-out">
            확인
        </button>
        <button 
        className="text-sm shadow-2xl border font-semibold flex items-center gap-x-1 py-2 px-4 rounded transition-all duration-300 group text-gray-400 
        hover:ease-out  hover:-translate-y-1 hover:shadow-xl">
            <ArrowLeftIcon className="w-4 h-4 group-hover:animate-translateXreverse15 duration-15 "/> 뒤로가기
        </button>
        <button 
        className="text-sm shadow-2xl border font-semibold flex items-center gap-x-1 py-2 px-4 rounded transition-all duration-300 group text-gray-400 
        hover:bg-gray-100">
            취소
        </button>
    </div>
  )  
];`
  const items: BreadcrumbsItem[] = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/inputs/button',
          children: [
            {
              label: 'Inputs',
              path: '/inputs/button',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo: PageInfoType = {
    title: 'Button',
    description:
      '사용자의 동작을 통해 이벤트 값을 받을 수 있으며, 읽어온 값에 따라 UI를 호출시키고, 상태를 변경시킬 수 있습니다.',
  };

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      {/* Primary Button */}
      <CodeBoard code={Primarycode} />
      <IframeButton />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* Secondary buttons */}
      <CodeBoard code={Secondarycode} />
      <IframeSecondaryButton />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* Soft buttons */}
      <CodeBoard code={Softcode} />
      <IframeSoftButton />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* icon width buttons */}
      <CodeBoard code={IconWithButton} />
      <IframeIconButton />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* rounded buttons */}
      <CodeBoard code={RoundedButtons} />
      <IframeRoundedButton />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* icon buttons */}
      <CodeBoard code={RoundedButtons} />
      <IframeIcon />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* hover buttons */}
      <CodeBoard code={HoverButton} />
      <IframeHoverButton />
      {/* <iframe src="/inputs/button/iframeButton" height="400" width="400" /> */}
    </div>
  );
};

export default Button;
