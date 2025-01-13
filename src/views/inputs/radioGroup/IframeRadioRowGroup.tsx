const IframeRadioRowGroup = () => {
  return (
    <div className="flex flex-col gap-5 mt-6">
      <div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Simple inline list</div>
      <div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
        <fieldset>
          <legend className="hidden">인라인 라디오</legend>
          <div className="mt-2 flex gap-x-2">
            <div className="flex items-center gap-x-2">
              <input id="simpleDscRadio01" name="group2" type="radio" className="h-5 w-5" defaultChecked={true} />
              <label
                htmlFor="simpleDscRadio01"
                className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
              >
                1번 라디오
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <input id="simpleDscRadio02" name="group2" type="radio" className="h-5 w-5" />
              <label
                htmlFor="simpleDscRadio02"
                className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
              >
                2번 라디오
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <input id="simpleDscRadio03" name="group2" type="radio" className="h-5 w-5" />
              <label
                htmlFor="simpleDscRadio03"
                className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
              >
                3번 라디오
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default IframeRadioRowGroup;
