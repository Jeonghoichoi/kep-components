import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
const IframeHoverButton = () => {
   return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Hover Buttons</div>
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
      </div>
    );
  };
  
  export default IframeHoverButton;
  