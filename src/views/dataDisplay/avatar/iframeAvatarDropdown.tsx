import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Item } from '@/interfaces/UtilityInterface';
import { Popover, Transition } from '@headlessui/react';
import { faker } from '@faker-js/faker';

function IconOne() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z" stroke="#FB923C" strokeWidth="2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M18.804 30H29.1963L24.0001 21L18.804 30Z" stroke="#FDBA74" strokeWidth="2" />
    </svg>
  );
}

function IconThree() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}

const IframeAvatarDropdown = () => {
  const solutions: Item[] = [
    {
      key: '1',
      name: 'Avatar Title one',
      description: 'subtitle contents one',
      path: '/#',
      icon: <IconOne />,
    },
    {
      key: '2',
      name: 'Avatar Title two',
      description: 'subtitle contents two',
      path: '/#',
      icon: <IconTwo />,
    },
    {
      key: '3',
      name: 'Avatar Title three',
      description: 'subtitle contents three',
      path: '/#',
      icon: <IconThree />,
    },
  ];

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">
        Avatar User DropDown
        <span className="text-sm text-gray-500 dark:text-gray-400">(아이콘 클릭 시 드롭다운 메뉴를 볼 수 있습니다.)</span>
      </div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg h-[200px]">
        <div className="flex flex-auto justify-evenly items-start md:flex-row md:gap-x-4 sm:flex-col sm:items-center sm:gap-y-4 ">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className={`group flex flex-col items-center gap-y-1 ${open ? '' : 'text-opacity-90'}`}>
                  <img className="w-10 h-10 rounded-full" src={faker.image.url()} alt="avatar_picture_1" />
                  <span>Click Me</span>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 mt-3 max-w-sm w-80 -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                        {solutions.map((item) => (
                          <Link
                            key={item.key}
                            to={item.path}
                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                              {item.icon}
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">{item.name}</p>
                              <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default IframeAvatarDropdown;
