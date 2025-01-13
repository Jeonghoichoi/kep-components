const IframeAvatarToolip = () => {
  const name1: string = '카직스';
  const name2: string = '모데카이저';
  const name3: string = '아펠리오스';
  const name4: string = '아우렐리온 솔';

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Avatar Tooltip types</div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
          <div className="relative group">
            <div
              id="tooltip-jese"
              role="tooltip"
              className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-10 invisible group-hover:visible group-hover:opacity-100 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              {name1}
              <div className="tooltip-arrow" data-popper-arrow="top"></div>
            </div>
            <img
              data-tooltip-target="tooltip-jese"
              className="w-10 h-10 rounded"
              src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
              alt="avatar_picture_1"
            />
          </div>
          <div className="relative group">
            <div
              id="tooltip-jese"
              role="tooltip"
              className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-10 invisible group-hover:visible group-hover:opacity-100 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              {name2}
              <div className="tooltip-arrow" data-popper-arrow="top"></div>
            </div>
            <img
              data-tooltip-target="tooltip-jese"
              className="w-10 h-10 rounded"
              src="https://dev.semokids.com/contents/images/avatar_picture_2.jpg"
              alt="avatar_picture_2"
            />
          </div>
          <div className="relative group">
            <div
              id="tooltip-jese"
              role="tooltip"
              className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-10 invisible group-hover:visible group-hover:opacity-100 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              {name3}
              <div className="tooltip-arrow" data-popper-arrow="top"></div>
            </div>
            <img
              data-tooltip-target="tooltip-jese"
              className="w-10 h-10 rounded"
              src="https://dev.semokids.com/contents/images/avatar_picture_3.jpg"
              alt="avatar_picture_3"
            />
          </div>
          <div className="relative group">
            <div
              id="tooltip-jese"
              role="tooltip"
              className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-10 invisible group-hover:visible group-hover:opacity-100 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              {name4}
              <div className="tooltip-arrow" data-popper-arrow="top"></div>
            </div>
            <img
              data-tooltip-target="tooltip-jese"
              className="w-10 h-10 rounded"
              src="https://dev.semokids.com/contents/images/avatar_picture_4.jpg"
              alt="avatar_picture_4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IframeAvatarToolip;
