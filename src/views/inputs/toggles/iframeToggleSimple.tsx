const IframeToggleSimple = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Simple toggle</div>
      <div className="flex flex-col items-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
        <fieldset>
          <div className="mt-4">
            <label htmlFor="toggelSimple" className="relative h-8 w-14 cursor-pointer block">
              <input type="checkbox" id="toggelSimple" className="peer sr-only" />
              <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-blue-500"></span>
              <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default IframeToggleSimple;
