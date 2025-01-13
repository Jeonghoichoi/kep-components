import { useEffect, useState } from 'react';

const IframeAlertRightBottom = () => {
  const [alert, setAlert] = useState<boolean>(false);
  const [delay, setDelay] = useState<number>(5);

  useEffect(() => {
    if (alert && delay > 0) {
      let timer = setInterval(() => {
        setDelay((prevDelay) => prevDelay - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } else {
      setAlert(false);
    }
  }, [alert, delay]);

  return (
    <div className="flex flex-col gap-5 mt-12">
      <h2 className="text-lg text-slate-900 dark:text-gray-400">Alert Right Bottom</h2>
      <div className="p-6 border-gray-200 border border-solid rounded-lg">
        <button
          className="bg-gray-50 text-sm p-4"
          onClick={() => {
            setAlert(true);
            setDelay(5);
          }}
        >
          {' '}
          우측 하단 Alert 보기{' '}
        </button>
        {alert ? (
          <aside className="fixed bottom-12 end-12 z-50 flex items-center justify-center gap-4 rounded-lg bg-green-100 p-4 text-green-600">
            <a href="#" target="_blank" className="text-sm font-medium hover:opacity-75">
            👋 Welcome 👋  <br />
            안녕하세요 KEP 웹입니다. 만나서 반가워요! &ensp;
            {delay} 초 뒤에 사라집니다. 🙂  <br />
            </a>
          </aside>
        ) : null}
      </div>
    </div>
  );
};

export default IframeAlertRightBottom;
