const IframeAvatar = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Primary Avatar types</div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
          <div className="flex flex-col gap-4 items-center">
            <img
              className="w-10 h-10 rounded"
              src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
              alt="Default avatar"
            />
            <span>Default Type</span>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://dev.semokids.com/contents/images/avatar_picture_2.jpg"
              alt="Rounded avatar"
            />
            <span>Round Type</span>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="https://dev.semokids.com/contents/images/avatar_picture_3.jpg"
              alt="Bordered avatar"
            />
            <span>Bordered Type</span>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg>
            </div>
            <span>Placehoder Type</span>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
            </div>
            <span>Placehoder Initial Type</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IframeAvatar;
