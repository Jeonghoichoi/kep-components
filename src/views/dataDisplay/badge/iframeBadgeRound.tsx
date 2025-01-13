const IframeBadgeRound = () => {
    const state: string = 'Badge';
  
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Round Simple badge</div>
        <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
          <div className="flex flex-auto justify-evenly items-center">
            <span className="flex items-center rounded-xl bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600">{state}</span>
            <span className="flex items-center rounded-xl bg-red-100 px-2 py-1 text-xs font-medium text-red-700">{state}</span>
            <span className="flex items-center rounded-xl bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">{state}</span>
            <span className="flex items-center rounded-xl bg-green-100 px-2 py-1 text-xs font-medium text-green-700">{state}</span>
            <span className="flex items-center rounded-xl bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">{state}</span>
            <span className="flex items-center rounded-xl bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">{state}</span>
            <span className="flex items-center rounded-xl bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">{state}</span>
            <span className="flex items-center rounded-xl bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700">{state}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default IframeBadgeRound;
  