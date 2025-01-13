import { CheckBadgeIcon, ExclamationCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline';
const IframeBadgeTheme = () => {
    const state: string[] = ["Succeeded GitHub Actions", "Failed GitHub Actions!", "Idea"];
  
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Theme</div>
        <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
          <div className="flex flex-auto justify-evenly items-center">
            <span className="flex items-center rounded-xl bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 gap-x-1">
                <CheckBadgeIcon className="w-4 h-4" />
                {state[0]}
            </span>
            <span className="flex items-center rounded-xl bg-red-100 px-2 py-1 text-xs font-medium text-red-800 gap-x-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {state[1]}
            </span>
            <span className="flex items-center rounded-xl bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 gap-x-1">
                <LightBulbIcon className="w-4 h-4" />
                {state[2]}
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default IframeBadgeTheme;
  