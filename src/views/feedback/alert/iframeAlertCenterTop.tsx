import { useEffect, useState } from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

const IframeAlertCenterTop = () => {
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
      <h2 className="text-lg text-slate-900 dark:text-gray-400">Alert Center Top</h2>
      <div className="p-6 border-gray-200 border border-solid rounded-lg">
        <button
          className="bg-gray-50 text-sm p-4"
          onClick={() => {
            setAlert(true);
          }}
        >
          {' '}
          가운데 상단 Alert{' '}
        </button>
        {alert ? (
          <aside className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 p-2 text-white">
            <ShieldCheckIcon className="w-5 h-5" />
            성공적으로 저장하였습니다.
          </aside>
        ) : null}
      </div>
    </div>
  );
};

export default IframeAlertCenterTop;
