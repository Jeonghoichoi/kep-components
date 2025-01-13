const IframeChipAvatar = () => { 
    const name:string = "Avatar";
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Avatar Chip</div>
        <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
          <div className="flex items-center gap-x-2">
            <span className="bg-gray-200 text-xs cursor-pointer border border-solid border-gray-200 p-1 pr-2 rounded-2xl flex items-center gap-x-1">
                <img
                className="w-6 h-6 rounded-full"
                src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
                alt="avatar_picture_1"
                />
                {name}
            </span>
            <span className="bg-white text-xs cursor-pointer border border-solid border-gray-200 p-1 pr-2 rounded-2xl flex items-center gap-x-1">
                <img
                className="w-6 h-6 rounded-full"
                src="https://dev.semokids.com/contents/images/avatar_picture_2.jpg"
                alt="avatar_picture_2"
                />
                {name}
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default IframeChipAvatar;
  