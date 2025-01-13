import { dataType } from '@/interfaces/UtilityInterface';
const IframeCardContents = () => {
  const data: dataType = {
    name: 'John Doe',
    topic: 'Building a SaaS product as a software developer!',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.',
    Published: '2023.06.03',
    readingTime: 6,
  };

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400"> With Content, Image, Details and Gradient Border</div>
      <div className="flex p-6 border-gray-200 border border-solid rounded-lg">
        <a href="#" className="relative block overflow-hidden rounded-lg border border-solid border-gray-100 p-6">
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
          <div className="flex ustify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-500">{data.topic}</h3>
              <p className="mt-1 text-xs font-medium text-gray-600">By. {data.name}</p>
            </div>
            <img
              alt="Default avatar"
              src="https://dev.semokids.com/contents/images/avatar_picture_2.jpg"
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
          <div className="mt-4">
            <p className="max-w-[40ch] text-sm text-gray-500">{data.text}</p>
          </div>
          <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Published</dt>
              <dd className="text-xs text-gray-500">{data.Published}</dd>
            </div>

            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Reading time</dt>
              <dd className="text-xs text-gray-500">{data.readingTime} minute</dd>
            </div>
          </dl>
        </a>
      </div>
    </div>
  );
};

export default IframeCardContents;
