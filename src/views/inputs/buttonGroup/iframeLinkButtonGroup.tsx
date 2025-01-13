import { Link } from 'react-router-dom';

const IframeLinkWithButtonGroup = () => {
  const Button1: string = 'Go Home';
  const Button2: string = 'Go Radio';
  const Button3: string = 'Current page';

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Links within a Button group</div>
      <div className="flex p-6 justify-center md:px-2 border-gray-200 border border-solid rounded-lg">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <Link
            to={'/home/index'}
            aria-current="page"
            className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-solid border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {Button1}
          </Link>
          <Link
            to={'/inputs/radio'}
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-solid border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {Button2}
          </Link>
          <Link
            to={'#'}
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 border-solid rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {Button3}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IframeLinkWithButtonGroup;
