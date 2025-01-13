import { Link } from 'react-router-dom';
import { BreadcrumbsItem } from '@/interfaces/UtilityInterface';
import { HomeIcon } from '@heroicons/react/24/outline';
const Breadcrumbs = (props: { items: BreadcrumbsItem[] }) => {
  return (
    <nav className="order-first flex space-x-2 text-sm font-semibold mb-8 md:hidden" aria-label="Breadcrumbs">
      {props.items.map((main) => (
        <div key={main.label} className="flex space-x-2 w-full">
          <Link to={main.path} className="dark:text-gray-400 text-slate-500 hover:text-slate-600 flex gap-x-1">
            <HomeIcon className="w-4 h-4" />
            {main.label}
          </Link>
          {main.children && (
            <div className="flex">
              {main.children.map((sub) => (
                <div key={sub.label} className="flex space-x-2">
                  <Link to={sub.path} className="dark:text-gray-400 text-slate-500 hover:text-slate-600">
                    / {sub.label}
                  </Link>
                  {sub.children && (
                    <div className="flex">
                      {sub.children.map((third) => (
                        <Link
                          to={third.path}
                          className="dark:text-gray-400 text-slate-500 hover:text-slate-600"
                          key={third.label}
                        >
                          / {third.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
export default Breadcrumbs;
