import { PlusIcon } from '@heroicons/react/24/outline';
const IframeBorderAccordion = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Border Accordion</div>
      <div className="flex p-6 border-gray-200 border border-solid rounded-lg">
        <div className="space-y-4 w-full">
          <details
            className="group border-s-4 border-solid border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">Q.아코디언 제목입니다</h2>
              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <PlusIcon className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45" />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              A.아코디언 내용입니다! 아코디언 내용입니다! <br />
              아코디언 내용입니다! 아코디언 내용입니다!
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default IframeBorderAccordion;
