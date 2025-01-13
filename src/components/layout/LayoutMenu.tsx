import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Navigation from '@/store/Menu';
import Theme from './Theme';
import { ArrowRightOnRectangleIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import Logo from '@/assets/logo.svg';

const LayoutMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  const getLocationPath = () => {
    let pathKey = location.pathname.split('/');
    return pathKey[1];
  };

  useEffect(() => {
    setLoading(true);
    if (Navigation.length > 0) {
      setLoading(false);
    }
  }, [loading]);

  const logout = () => {
    alert('로그아웃');
    navigate('/login');
  };

  const [sideBarToggle, setSideBarToggle] = useState(true);

  return (
    <div className="border-r border-solid border-gray-200 w-fit h-screen sticky top-0 z-10">
      <div className="p-4 border-b border-solid border-gray-200 flex items-center justify-center relative">
        <NavLink
          to="/home/index"
          className="font-bold text-md text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2"
        >
          <img className="w-8 h-8" src={Logo} alt="logo" />
          {sideBarToggle ? '세모가방' : null}
        </NavLink>
        <button
          className="w-6 h-6 bg-gray-50 border border-solid border-gray-300 flex items-center justify-center rounded-full absolute -right-3 hover:bg-gray-100"
          onClick={() => {
            setSideBarToggle(!sideBarToggle);
          }}
        >
          {sideBarToggle ? <ChevronDoubleLeftIcon className="w-3 h-3" /> : <ChevronDoubleRightIcon className="w-3 h-3" />}
        </button>
      </div>
      <div className="flex flex-col justify-between h-full relative max-h-[calc(100%-65px)] whitespace-nowrap">
        {sideBarToggle ? (
          <ul className="space-y-1 overflow-y-auto p-4 flex-1 sm:p-2 ">
            {Navigation.map((group) =>
              group.type ? (
                <li key={group.key}>
                  <details className="group/item [&_summary::-webkit-details-marker]:hidden" open={true}>
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 dark:text-gray-400 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ">
                      <span className="text-sm sm:text-xs font-medium"> {group.label}</span>
                      <span className="shrink-0 transition duration-300 group-open/item:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>
                    <ul className="mt-2 space-y-1 px-4">
                      {group.children?.map((child) =>
                        child.type ? (
                          <li key={child.key}>
                            <details
                              className="group/edit [&_summary::-webkit-details-marker]:hidden"
                              open={getLocationPath() === child.key ? true : false}
                            >
                              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <span className="text-sm sm:text-xs font-medium"> {child.label}</span>
                                <span className="shrink-0 transition duration-300 group-open/edit:-rotate-180">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </summary>
                              <ul>
                                {child.children?.map((grandchild) => (
                                  <li key={grandchild.key} className="active_link">
                                    {grandchild.path && (
                                      <NavLink
                                        to={grandchild.path}
                                        className="block rounded-lg px-6 py-2 font-medium text-left dark:text-gray-400 text-gray-500 hover:bg-gray-100 hover:text-gray-700 text-sm sm:text-xs"
                                      >
                                        {grandchild.label}
                                      </NavLink>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </details>
                          </li>
                        ) : (
                          child && (
                            <li key={child.key} className="active_link">
                              {child.path && (
                                <NavLink
                                  to={child.path}
                                  className="block text-left rounded-lg px-4 py-2 font-medium dark:text-gray-400 text-gray-500 hover:bg-gray-100 hover:text-gray-700 text-sm sm:text-xs"
                                >
                                  {child.label}
                                </NavLink>
                              )}
                            </li>
                          )
                        ),
                      )}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={group.key} className="active_link">
                  {group.path && (
                    <NavLink
                      to={group.path}
                      className="text-left block rounded-lg px-4 py-2 text-sm sm:text-xs font-medium dark:text-gray-400 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      {group.label}
                    </NavLink>
                  )}
                  <ul>{group.children?.map((child) => <li key={child.key}>{child.label}</li>)}</ul>
                </li>
              ),
            )}
          </ul>
        ) : (
          <ul className="space-y-1 p-4 flex-1 sm:p-2">
            {Navigation.map((group) =>
              group.type ? (
                <li key={group.key}>
                  <details className="group/item" open={true}>
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 relative group ">
                      <span className="">
                        <i className="block w-4 h-4 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${group.icon})` }}></i>{' '}
                      </span>
                      <span className="shrink-0 transition duration-300 group-open/item:-rotate-180 dark:contrast-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="whitespace-nowrap font-bold text-xs absolute bg-slate-800 left-full top-0 rounded-lg text-white p-2 z-10 invisible group-hover:visible after:w-3 after:h-3 after:absolute after:bg-gray-800 after:rotate-45 after:-z-10 after:-left-1 after:top-1/2 after:-translate-y-1/2">
                        {group.label}
                      </span>
                    </summary>

                    <ul className="mt-2 space-y-2 p-4 bg-gray-50 rounded-lg dark:bg-slate-800">
                      {group.children?.map((child) =>
                        child.type ? (
                          <li key={child.key} className="group relative w-8 h-8">
                            <span className="flex items-center justify-center w-full h-full">
                              {' '}
                              <i
                                className="block w-4 h-4 bg-no-repeat bg-cover"
                                style={{ backgroundImage: `url(${child.icon})` }}
                              ></i>{' '}
                            </span>
                            <ul className="hidden shadow-lg group-hover:block absolute left-full -top-2 bg-gray-800 text-white rounded-lg p-4 z-10 after:block after:w-3 after:h-3 after:absolute  after:bg-gray-800 after:rotate-45 after:-left-1 after:top-5">
                              <li className="p-1 font-bold text-left text-sm sm:text-xs border-b border-solid border-white whitespace-nowrap">
                                {child.label}
                              </li>
                              {child.children?.map((grandchild) => (
                                <li key={grandchild.key} className="active_link">
                                  {grandchild.path && (
                                    <NavLink to={grandchild.path} className="block p-2 font-medium text-left text-sm sm:text-xs">
                                      {grandchild.label}
                                    </NavLink>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : (
                          child && (
                            <li key={child.key}>
                              {child.path && (
                                <NavLink to={child.path} className="rounded-lg  w-8 h-8 flex items-center justify-center hover:bg-gray-100">
                                  <i
                                    className="block w-4 h-4 bg-no-repeat bg-cover"
                                    style={{ backgroundImage: `url(${child.icon})` }}
                                  ></i>
                                </NavLink>
                              )}
                            </li>
                          )
                        ),
                      )}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={group.key} className="active_link group relative">
                  {group.path && (
                    <NavLink to={group.path} className="block rounded-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800">
                      <i className="block w-4 h-4 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${group.icon})` }}></i>
                      <span className="whitespace-nowrap font-bold text-xs absolute bg-slate-800 left-full top-0 rounded-lg text-white p-2 z-10 invisible group-hover:visible after:w-3 after:h-3 after:absolute after:bg-gray-800 after:rotate-45 after:-z-10 after:-left-1 after:top-1/2 after:-translate-y-1/2">
                        {group.label}
                      </span>
                    </NavLink>
                  )}
                  <ul>{group.children?.map((child) => <li key={child.key}>{child.label}</li>)}</ul>
                </li>
              ),
            )}
          </ul>
        )}
        {/* 설정 및 로그아웃 etc */}
        <ul className="flex flex-col gap-y-2 p-4 m-0 border-t border-solid border-gray-200">
          <li>
            <Theme sideBarToggle={sideBarToggle} />
          </li>
          <li>
            <button
              className="flex items-center gap-x-2 text-gray-500 dark:text-gray-400"
              onClick={() => {
                logout();
              }}
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              {sideBarToggle ? <span className="text-xs">로그아웃</span> : null}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default LayoutMenu;
