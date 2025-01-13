const IframeRadioDscGroup = () => {
  return (
    <div className="flex flex-col gap-5 mt-6">
      <div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">List with description</div>
      <div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
        <fieldset>
          <legend className="hidden">설명이 하단에 있는 라디오</legend>
          <div className="mt-2 space-y-2">
            <div className="flex items-start gap-x-2">
              <input id="simpleDscColRadio01" name="group3" type="radio" className="h-5 w-5" defaultChecked={true} />
              <div className="flex gap-x-2 items-center flex-col">
                <label
                  htmlFor="simpleDscColRadio01"
                  className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
                >
                  1번 라디오
                </label>
                <span className="text-xs text-blue-500">description</span>
              </div>
            </div>
            <div className="flex items-start gap-x-2">
              <input id="simpleDscColRadio02" name="group3" type="radio" className="h-5 w-5" />
              <div className="flex gap-x-2 items-center flex-col">
                <label
                  htmlFor="simpleDscColRadio02"
                  className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
                >
                  2번 라디오
                </label>
                <span className="text-xs text-blue-500">description</span>
              </div>
            </div>
            <div className="flex items-start gap-x-2">
              <input id="simpleDscColRadio03" name="group3" type="radio" className="h-5 w-5" />
              <div className="flex gap-x-2 items-center flex-col">
                <label
                  htmlFor="simpleDscColRadio03"
                  className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
                >
                  3번 라디오
                </label>
                <span className="text-xs text-blue-500">description</span>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default IframeRadioDscGroup;
