import { useState } from 'react';
import DefaultModal from './DefaultModal';

const IframeDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-5 mt-12">
      <h2 className="text-lg text-slate-900 dark:text-gray-400">Default Modal</h2>
      <div className="p-6 border-gray-200 border border-solid rounded-lg relative h-92">
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={onToggle}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Click Me!!
          </button>
        </div>
        {isOpen && <DefaultModal onToggle={onToggle} />}
      </div>
    </div>
  );
};

export default IframeDialog;
