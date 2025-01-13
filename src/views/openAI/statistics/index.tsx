import { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import Navigation from '@/store/aiMenu';
import './index.less';

const ServiceDEMO02 = () => {
  const items = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/openAI/serviceDEMO02',
          children: [
            {
              label: 'serviceDEMO02',
              path: '/openAI/serviceDEMO02',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: 'ServiceDemo01',
    description: ``,
  };

  const navigate = useNavigate();
  const location = useLocation();

  const getLocationPath = () => {
    let pathKey = location.pathname.split('/');
    return pathKey[1];
  };

  const [sideBarToggle, setSideBarToggle] = useState(true);

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto w-full">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <div className="flex border">
        <div className="flex flex-col justify-between h-full relative whitespace-nowrap">
          {sideBarToggle ? (
            <ul className="space-y-1 overflow-y-auto p-4 flex-1 sm:p-2">
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
                          <i
                            className="block w-4 h-4 bg-no-repeat bg-cover"
                            style={{ backgroundImage: `url(${group.icon})` }}
                          ></i>{' '}
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
                                      <NavLink
                                        to={grandchild.path}
                                        className="block p-2 font-medium text-left text-sm sm:text-xs"
                                      >
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
                                  <NavLink
                                    to={child.path}
                                    className="rounded-lg  w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                                  >
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
        </div>
        <div>
          <div
            // ref={chatScreenRef}
            className={`flex flex-col w-full h-full p-4 overflow-hidden bg-white border border-solid border-gray-200 dark:bg-slate-900 relative`}
          >
            <div className="flex gap-2 items-center">
              <span className="text-lg font-base">테스트 유저</span>
              <span className="inline-flex items-center gap-x-2 text-gray-600/50"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDEMO02;
