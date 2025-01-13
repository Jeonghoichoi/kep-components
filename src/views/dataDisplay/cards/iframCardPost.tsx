import { ClockIcon } from '@heroicons/react/24/outline';
const IframeCardPost = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Podcast Post</div>
        <button className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">PREVIEW</button>
      </div>
      <div className="flex p-6 border-gray-200 border border-solid rounded-lg">
        <article className="rounded-xl bg-white dark:bg-gray-900 p-4 ring ring-indigo-50">
          <div className="flex items-start gap-8">
            <div
              className="grid h-20 w-20 shrink-0 place-content-center rounded-full border-2 border-solid border-indigo-500"
              aria-hidden="true"
            >
              <div className="flex items-center gap-1">
                <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
              </div>
            </div>
            <div>
              <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                Episode #101
              </strong>
              <h3 className="mt-4 text-lg font-medium sm:text-xl">
                <a href="" className="hover:underline dark:text-gray-400">
                  {' '}
                  Some Interesting Podcast Title{' '}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla amet voluptatum sit rerum, atque, quo culpa
                ut necessitatibus eius suscipit eum accusamus, aperiam voluptas exercitationem facere aliquid fuga. Sint.
              </p>
              <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <ClockIcon className="w-4 h-4" />
                  <p className="text-xs font-medium">48:32 minutes</p>
                </div>
                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>
                <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                  Featuring{' '}
                  <a href="#" className="underline hover:text-gray-700">
                    Barry
                  </a>
                  ,
                  <a href="#" className="underline hover:text-gray-700">
                    Sandra
                  </a>{' '}
                  and
                  <a href="#" className="underline hover:text-gray-700">
                    August
                  </a>
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default IframeCardPost;
