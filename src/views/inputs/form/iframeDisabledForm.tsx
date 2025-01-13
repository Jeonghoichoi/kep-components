const IframeDisabledForm = () => {
  return (
    <div className="flex flex-col gap-5 mt-6">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Disabled And ReadOnly Form</div>
      </div>
      <div className="flex p-6 bg-white md:px-2 border-gray-600 border border-solid rounded-lg">
        <form className="w-full">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Disabled Input
            </label>
            <input
              type="text"
              id="disabled-input"
              aria-label="disabled input"
              className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value="Disabled input"
              disabled
            ></input>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Disabled + ReadOnly
            </label>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value="Disabled readonly input"
              disabled
              readOnly
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IframeDisabledForm;
