const IframeBreakPoint = () => {
    return (
      <div className="flex flex-col gap-5 mt-12">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-gray-400">KEP COMPONENT Default breakpoints</h2>
        <ul className="dark:text-slate-400">
            <li>• <span className="font-semibold ">2xl</span>: max-width: 1535px</li>
            <li>• <span className="font-semibold">xl</span>: max-width: 1279px</li>
            <li>• <span className="font-semibold">lg</span>: max-width: 1023px</li>
            <li>• <span className="font-semibold">md</span>: max-width: 767px</li>
            <li>• <span className="font-semibold">sm</span>: max-width: 639px</li>
        </ul>
        <iframe src="https://tailwindcss.com/docs/screens" className="w-full h-72"></iframe>
        <div className="p-6 border-gray-200 border border-solid rounded-lg relative "> 
           <div className="flex items-center justify-center w-full h-40 text-center bg-gray-50 2xl:bg-gray-100 xl:bg-gray-200 lg:bg-gray-300 md:bg-gray-400 sm:bg-gray-500">
                <p className="text-sm text-gray-500 2xl:hidden">반응형 입니다.<br /> 해상도를 조절해보세요!</p>
                <p className="text-sm text-gray-500 hidden 2xl:block xl:hidden">2xl반응형 입니다.<br /> 해상도를 조절해보세요!</p>
                <p className="text-sm text-gray-500 hidden xl:block lg:hidden">xl 반응형 입니다. <br /> 해상도를 조절해보세요!</p>
                <p className="text-sm text-gray-500 hidden lg:block md:hidden">lg 반응형 입니다. <br /> 해상도를 조절해보세요!</p>
                <p className="text-sm text-gray-500 hidden md:block sm:hidden">md 반응형 입니다. <br /> 해상도를 조절해보세요!</p>
                <p className="text-sm text-white hidden sm:block">sm 반응형 입니다. <br /> 해상도를 조절해보세요!</p>
           </div>
        </div>
      </div>
    );
  };
  
  export default IframeBreakPoint;
