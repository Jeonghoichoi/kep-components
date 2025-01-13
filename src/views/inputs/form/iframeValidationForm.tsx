const IframeValidationForm = () => {
  return (
    <div className="flex flex-col gap-5 mt-6">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Validation Check Form</div>
      </div>
      <div className="flex p-6 bg-white md:px-2 border-gray-600 border border-solid rounded-lg dark:bg-slate-900">
        <form className="w-full">
          <div className="mb-6">
            <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
              이름
            </label>
            <input
              type="text"
              id="username-success"
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
              placeholder="김교보123"
            ></input>
            <p className="mt-2 text-sm text-green-600 dark:text-green-500">사용할 수 있는 이름입니다.</p>
          </div>
          <div>
            <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">
              이름
            </label>
            <input
              type="text"
              id="username-error"
              className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
              placeholder="김교보"
            ></input>
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">중복된 이름입니다.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IframeValidationForm;
