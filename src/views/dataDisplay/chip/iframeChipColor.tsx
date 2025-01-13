const IframeChipColor = () => { 
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Color Chip</div>
        <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
          <div className="flex items-center gap-x-2">
            <span className="bg-blue-200 text-xs cursor-pointer px-3 py-2 rounded-2xl">
              primary
            </span>
            <span className="bg-green-200 text-xs cursor-pointer px-3 py-2 rounded-2xl">
              primary
            </span>
            <span className="text-xs cursor-pointer border border-solid border-blue-200 text-blue-500 px-3 py-2 rounded-2xl">
              primary
            </span>
            <span className="text-xs cursor-pointer border border-solid border-green-200 text-green-500 px-3 py-2 rounded-2xl">
              primary
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default IframeChipColor;
  