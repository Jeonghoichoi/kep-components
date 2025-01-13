const IframeBadgedot = () => {
    const state: string = 'Badge';
  
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">With border and dot</div>
        <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
          <div className="flex flex-auto justify-evenly items-center">
            <span className="flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 gap-x-1">
                <svg className="w-1 h-1 bg-gray-600 rounded" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
                {state}
            </span>
            <span className="flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 gap-x-1">
               <svg className="w-1 h-1 bg-red-700 rounded-full" viewBox="0 0 0 0" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
              {state}
            </span>
            <span className="flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 gap-x-1">
              <svg className="w-1 h-1 bg-yellow-700 rounded-full" viewBox="0 0 0 0" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
              {state}
            </span>
            <span className="flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 gap-x-1">
              <svg className="w-1 h-1 bg-green-600 rounded-full" viewBox="0 0 0 0" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
              {state}
            </span>
            <span className="flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 gap-x-1">
              <svg className="w-1 h-1 bg-blue-700 rounded-full" viewBox="0 0 0 0" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
              {state}
            </span>
            <span className="flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 gap-x-1">
              <svg className="w-1 h-1 bg-indigo-700 rounded-full" viewBox="0 0 0 0" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
              {state} 
            </span>
            <span className="flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 gap-x-1">
              <svg className="w-1 h-1 bg-purple-700 rounded-full" viewBox="0 0 0 0" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
              {state}
            </span>
            <span className="flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 gap-x-1">
              <svg className="w-1 h-1 bg-pink-700 rounded-full" viewBox="0 0 0 0" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
              {state}
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default IframeBadgedot;
  