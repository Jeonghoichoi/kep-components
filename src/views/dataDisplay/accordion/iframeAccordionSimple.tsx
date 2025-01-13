import { ChevronDownIcon } from '@heroicons/react/24/outline';
const IframeSimpleAccordion = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Simple Accordion</div>
      <div className="flex p-6 border-gray-200 border border-solid rounded-lg">
        <div className="space-y-4 w-full">
          <details className="group [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">지식성장 회원이 되고싶으면 어떻게 해야하나요?</h2>
              <ChevronDownIcon className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" />
            </summary>
            <p className="mt-4 px-4 leading-relaxed text-gray-700">가입하면 됩니다.</p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium"> Lorem ipsum dolor sit amet consectetur adipisicing?</h2>
              <ChevronDownIcon className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" />
            </summary>
            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam
              neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum
              similique!
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default IframeSimpleAccordion;
