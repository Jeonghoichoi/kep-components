import { faker } from '@faker-js/faker';

const IframeAvatarDotIndicator = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Dot Indicator</div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
          <div className="relative">
            <img className="w-10 h-10 rounded-full" src={faker.image.url()} alt="avatar_picture_1" />
            <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white border-solid dark:border-gray-800 rounded-full"></span>
          </div>
          <div className="relative">
            <img className="w-10 h-10 rounded" src={faker.image.url()} alt="avatar_picture_2" />
            <span className="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white border-solid dark:border-gray-800 rounded-full"></span>
          </div>
          <div className="relative">
            <img className="w-10 h-10 rounded-full" src={faker.image.url()} alt="avatar_picture_3" />
            <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white border-solid dark:border-gray-800 rounded-full"></span>
          </div>
          <div className="relative">
            <img className="w-10 h-10 rounded" src={faker.image.url()} alt="avatar_picture_4" />
            <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white border-solid dark:border-gray-800 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IframeAvatarDotIndicator;
