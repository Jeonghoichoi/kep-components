const IframeGridBasic2X = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Grid Basic Layout 2:1</div>
      </div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="grid grid-cols-6 w-full text-center gap-2 text-sm text-gray-500">
          <div className="col-span-2 bg-gray-100 py-4">col-span-2</div>
          <div className="col-span-4 bg-gray-100 py-4">col-span-4</div>
          <div className="col-span-4 bg-gray-100 py-4">col-span-4</div>
          <div className="col-span-2 bg-gray-100 py-4">col-span-2</div>
        </div>
      </div>
    </div>
  );
};

export default IframeGridBasic2X;
