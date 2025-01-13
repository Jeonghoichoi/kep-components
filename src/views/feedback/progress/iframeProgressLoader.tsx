import './index.less';
const IframeProgressLoader = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <h2 className="text-lg text-slate-900 dark:text-gray-400">SVG Triangle Loader</h2>
      <div className="p-6 border-gray-200 border border-solid rounded-lg relative h-60 flex items-center justify-center">
        <div className="loader triangle">
          <svg viewBox="0 0 86 80" fill="none" strokeWidth="10px" strokeLinecap="round" strokeLinejoin="round" stroke="#3b3b3b">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default IframeProgressLoader;
