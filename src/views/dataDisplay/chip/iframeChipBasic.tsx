const IframeChipBasic = () => { 
    const state:string[] = ["Chip Filled", "Chip Outlined"];
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Basic Chip</div>
        <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
          <div className="flex items-center gap-x-2">
              <span className="bg-gray-200 text-xs cursor-pointer border border-solid border-gray-200 px-3 py-2 rounded-2xl">{state[0]}</span>
              <span className="bg-white hover:bg-gray-100 text-xs cursor-pointer border border-solid border-gray-200 px-3 py-2 rounded-2xl">{state[1]}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default IframeChipBasic;
  