const iframePopover = () => {
  return (
    <>
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Simple Popover</div>
        </div>
        <div className="flex justify-center p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
          <div className="group flex relative">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Hover me
            </button>
            <div
              role="tooltip"
              className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity -translate-x-1/2 left-1/2 duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 group-focus-within:visible group-hover:visible opacity-100 bottom-12"
            >
              <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">팝오버 타이틀</h3>
              </div>
              <div className="px-3 py-2">
                <p>컨텐츠에 대한 내용이 들어갑니다.</p>
                <p>컨텐츠에 대한 내용이 들어갑니다..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default iframePopover;
