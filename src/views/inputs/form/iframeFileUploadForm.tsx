const IframeFileUploadForm = () => {
  return (
    <div className="flex flex-col gap-5 mt-6">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">FileUpload Form</div>
      </div>
      <div className="flex p-6 bg-white md:px-2 border-gray-600 border border-solid rounded-lg dark:bg-slate-900">
        <form className="w-full">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">
              계정정보에 필요한 사진을 등록해주세요.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IframeFileUploadForm;
