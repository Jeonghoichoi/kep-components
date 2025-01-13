const iframeUserProfile = () => {
  return (
    <>
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">UserProfile Popover</div>
        </div>
        <div className="flex justify-center p-6 md:px-2 border-gray-200 border border-solid rounded-lg h-52">
          <div className="group flex items-end relative">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-10"
            >
              유저 프로필
            </button>
            <div
              role="tooltip"
              className="absolute z-10 border-solid invisible inline-block w-64 text-sm text-gray-500 transition-opacity -translate-x-1/2 left-1/2  duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 group-focus-within:visible group-hover:visible opacity-100 bottom-12"
            >
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <a href="#">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={'https://dev.semokids.com/contents/images/avatar_picture_1.jpg'}
                      alt="product-thumnail 1-이미지"
                    />
                  </a>
                  <div>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
                  <a href="#">김교보</a>
                </p>
                <p className="mb-3 text-sm font-normal">
                  <a href="#" className="hover:underline">
                    @kyoboKim001
                  </a>
                </p>
                <p className="mb-4 text-sm">
                  YouTubeStudio 대표이사
                  <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
                    useProfile@kyobobook.com
                  </a>
                </p>
                <ul className="flex text-sm">
                  <li className="mr-2">
                    <a href="#" className="hover:underline">
                      <span className="font-semibold text-gray-900 dark:text-white">799명</span>
                      <span>팔로잉</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      <span className="font-semibold text-gray-900 dark:text-white">3,758명</span>
                      <span>팔로워</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div data-popper-arrow></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default iframeUserProfile;
