const IframeSoftButton = () => {
  const Button: string = 'Button';

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Soft Buttons</div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
          <button
            type="button"
            className="flex py-1 px-2 font-semibold text-xs text-indigo-600 bg-indigo-50 h-[24px] items-center justify-items-center rounded"
          >
            {Button}
          </button>
          <button
            type="button"
            className="flex py-1 px-2 font-semibold text-sm text-indigo-600 bg-indigo-50 h-[28px] items-center justify-items-center rounded"
          >
            {Button}
          </button>
          <button
            type="button"
            className="flex py-1.5 px-2.5 font-semibold text-sm text-indigo-600 bg-indigo-50 h-[32px] items-center justify-items-center rounded"
          >
            {Button}
          </button>
          <button
            type="button"
            className="flex py-2 px-3 font-semibold text-sm text-indigo-600 bg-indigo-50 h-[36px] items-center justify-items-center rounded"
          >
            {Button}
          </button>
          <button
            type="button"
            className="flex py-2.5 px-3.5 font-semibold text-sm text-indigo-600 bg-indigo-50 h-[40px] items-center justify-items-center rounded"
          >
            {Button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IframeSoftButton;
