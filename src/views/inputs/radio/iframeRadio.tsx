const IframeRadio = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center dark:text-gray-400 text-slate-900">Simple Radio</div>
      <div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
        <fieldset>
          <div className="flex items-center gap-x-2">
            <input id="simpleRadio" name="push-notifications" type="radio" className="h-5 w-5" />
            <label
              htmlFor="simpleRadio"
              className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer dark:text-gray-400"
            >
              simpleRadio
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default IframeRadio;
