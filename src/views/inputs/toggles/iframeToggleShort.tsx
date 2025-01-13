const IframeToggleShort = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Short toggle</div>
      <div className="flex flex-col items-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
        <fieldset>
          <div className="mt-4">
            <label htmlFor="toggelShort" className="relative h-8 w-12 cursor-pointer block">
              <input type="checkbox" id="toggelShort" className="peer sr-only" />
              <span className="absolute inset-0 m-auto h-4 rounded-full bg-gray-300 peer-checked:bg-blue-500"></span>
              <span className="absolute inset-y-0 start-0 m-auto h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6 shadow border border-solid border-gray-200"></span>
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default IframeToggleShort;
