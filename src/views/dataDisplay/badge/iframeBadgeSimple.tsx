const IframeBadgeSimple = () => {
    const state: string = 'Badge';
  
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Simple badge</div>
        <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
          <div className="flex flex-auto justify-evenly items-center md:flex-wrap md:gap-4">
            <span className="flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">{state}</span>
            <span className="flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700">{state}</span>
            <span className="flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800">{state}</span>
            <span className="flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700">{state}</span>
            <span className="flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">{state}</span>
            <span className="flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">{state}</span>
            <span className="flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700">{state}</span>
            <span className="flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700">{state}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default IframeBadgeSimple;
  