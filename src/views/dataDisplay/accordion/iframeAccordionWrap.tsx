import { ChevronDownIcon } from '@heroicons/react/24/outline';
const IframeWrapAccordion = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Wrap Accordion</div>
      <div className="flex p-6 border-gray-200 border border-solid rounded-lg">
        <div className="w-full divide-y divide-gray-200 rounded-xl border border-solid border-gray-100 bg-white">
          <details className="group p-6 [&_summary::-webkit-details-marker]:hidden border-solid" open>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">Q. 아코디언 제목입니다</h2>
              <ChevronDownIcon className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" />
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              A. 아코디언 내용입니다! 아코디언 내용입니다! <br />
              아코디언 내용입니다! 아코디언 내용입니다!
            </p>
          </details>
          <details className="group p-6 [&_summary::-webkit-details-marker]:hidden border-solid" open>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">Q. 아코디언 제목입니다</h2>
              <ChevronDownIcon className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" />
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              A. 아코디언 내용입니다! 아코디언 내용입니다! <br />
              아코디언 내용입니다! 아코디언 내용입니다!
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default IframeWrapAccordion;
