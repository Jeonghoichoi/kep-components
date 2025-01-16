import { faker } from '@faker-js/faker';

const IframeAvatarWithText = () => {
  const name: string = 'My name is Kyobobook';

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Avatar With Text</div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="flex flex-auto justify-evenly items-end md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
          <div className="flex items-center space-x-4">
            <img className="w-10 h-10 rounded-full" src={faker.image.url()} alt="avatar_picture_1" />
            <div className="font-medium dark:text-white">
              <div>{name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                서울특별시 종로구 종로 1 | 사업자등록번호 : 102-81-11670
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IframeAvatarWithText;
