const IframeInputSelect = () => {
  return (
    <div className="flex flex-col gap-5 mt-6">
      <div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">
        Input with inline leading add-on and trailing dropdown
      </div>
      <div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg text-left">
        <fieldset className="w-full">
          <legend className="hidden">기본 인풋 + 셀렉트 박스</legend>
          <div className="relative mt-2 rounded-md shadow-sm w-1/3 mx-auto">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">단위</span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-slate-900"
              placeholder="0.00"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Currency
              </label>
              <select
                id="currency"
                name="currency"
                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>mm</option>
                <option>cm</option>
              </select>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default IframeInputSelect;
