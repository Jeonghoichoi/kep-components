import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
const IframeIconAccordion = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Icon Accordion</div>
      <div className="flex p-6 border-gray-200 border border-solid rounded-lg">
        <div className="space-y-4 w-full">
          <details className="group rounded-lg bg-gray-50 p-6" open>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-medium">아코디언 제목입니다.</h2>
              <span className="relative h-5 w-5 shrink-0">
                <PlusCircleIcon className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" />
                <MinusCircleIcon className="absolute inset-0 opacity-0 group-open:opacity-100" />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              아코디언 내용입니다!! 아코디언 내용입니다!!아코디언 내용입니다!!아코디언 내용입니다!!아코디언 내용입니다!!
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default IframeIconAccordion;
