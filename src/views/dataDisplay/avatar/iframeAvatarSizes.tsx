import { faker } from '@faker-js/faker';

const IframeAvatarSizes = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Avatar Sizes</div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg h-[200px]">
        <div className="flex flex-auto justify-evenly items-center md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
          <img className="w-6 h-6 rounded" src={faker.image.url()} alt="Extra small avatar" />
          <img className="w-8 h-8 rounded" src={faker.image.url()} alt="Small avatar" />
          <img className="w-10 h-10 rounded" src={faker.image.url()} alt="Medium avatar" />
          <img className="w-20 h-20 rounded" src={faker.image.url()} alt="Large avatar" />
          <img className="rounded w-36 h-36" src={faker.image.url()} alt="Extra large avatar" />
        </div>
      </div>
    </div>
  );
};

export default IframeAvatarSizes;
