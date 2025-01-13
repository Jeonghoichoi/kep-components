import { useState, useEffect, useRef } from 'react';

const iframePlacementPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.addEventListener('click', onClose);

    return () => {
      window.removeEventListener('click', onClose);
    };
  }, []);

  const onClose = (e: MouseEvent) => {
    // 외부 클릭을 감지
    if (buttonRef.current && !buttonRef.current.contains(e.target as HTMLButtonElement)) {
      // 타겟에 대한 Element요소 지정해야함.
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">
            Triggering Popover
            <span className="text-sm text-gray-500 dark:text-gray-400">(상태 값으로 컨트롤 할 수 있습니다.)</span>
          </div>
        </div>
        <div className="flex justify-center gap-8 p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
          <div className="group flex relative">
            <button
              ref={buttonRef}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Click Me
            </button>
            {isOpen && (
              <div
                role="tooltip"
                className="absolute z-10 visible opacity-100 bottom-12 inline-block w-64 text-sm text-gray-500 transition-opacity -translate-x-1/2 left-1/2 duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
              >
                <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">상단 팝오버 입니다.</h3>
                </div>
                <div className="px-3 py-2">
                  <p>컨텐츠에 대한 내용이 들어갑니다.</p>
                  <p>컨텐츠에 대한 내용이 들어갑니다..</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default iframePlacementPopover;
