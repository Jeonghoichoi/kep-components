import { faker } from '@faker-js/faker';

const IframeAvatarStacked = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Avatar Stacked</div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
          <div className="flex -space-x-4">
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={faker.image.url()}
              alt="avatar_picture_1"
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={faker.image.url()}
              alt="avatar_picture_2"
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={faker.image.url()}
              alt="avatar_picture_3"
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={faker.image.url()}
              alt="avatar_picture_4"
            />
          </div>
          <div className="flex -space-x-4">
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={faker.image.url()}
              alt="avatar_picture_1"
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={faker.image.url()}
              alt="avatar_picture_2"
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={faker.image.url()}
              alt="avatar_picture_3"
            />
            <a
              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white border-solid rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +99
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IframeAvatarStacked;
