import { useEffect, useState } from 'react';
import { ShieldExclamationIcon } from '@heroicons/react/24/outline';

const IframeAlertCenterBottom = () => {
  const [alert, setAlert] = useState<boolean>(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);
  return (
    <div className="flex flex-col gap-5 mt-12">
      <h2 className="text-lg text-slate-900 dark:text-gray-400">Alert Center Bottom</h2>
      <div className="p-6 border-gray-200 border border-solid rounded-lg">
        <button
          className="bg-gray-50 text-sm p-4 rounded"
          onClick={() => {
            setAlert(true);
          }}
        >
          {' '}
          가운데 하단 Alert 보기{' '}
        </button>
        {alert ? (
          <aside className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-2 rounded-lg bg-red-400 px-4 p-2 text-white">
            <ShieldExclamationIcon className="w-5 h-5" />
            ERROR! 저장할 수 없는 내용이 포함되어 있습니다.
          </aside>
        ) : null}
      </div>
    </div>
  );
};

export default IframeAlertCenterBottom;
