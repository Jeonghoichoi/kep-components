const iframeColorContrastTooltip = () => {
  return (
    <>
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Simple Tooltip</div>
        </div>
        <div className="flex justify-center gap-12 p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
          {/* Light Tooltip */}
          <div className="group flex relative">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Light Tooltip
            </button>
            <div
              role="tooltip"
              className="absolute z-10 invisible inline-block w-52 text-sm text-gray-600 transition-opacity -translate-x-1/2 left-1/2 duration-300 bg-gray-100 border border-solid border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 bottom-12"
            >
              <div className="px-2 py-2">
                <p>컨텐츠에 대한 내용이 들어갑니다.</p>
              </div>
              <div className="absolute w-0 h-0 border-8 border-solid border-transparent border-t-gray-200 left-1/2"></div>
            </div>
          </div>
          {/* Dark Tooltip */}
          <div className="group flex relative">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Dark Tooltip
            </button>
            <div
              role="tooltip"
              className="absolute z-10 invisible inline-block w-52 text-sm text-white transition-opacity -translate-x-1/2 left-1/2 duration-300 bg-black border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 bottom-12"
            >
              <div className="px-2 py-2">
                <p>컨텐츠에 대한 내용이 들어갑니다.</p>
              </div>
              <div className="absolute w-0 h-0 border-8 border-solid border-transparent border-t-black left-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default iframeColorContrastTooltip;
