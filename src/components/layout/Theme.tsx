import { Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import { useStore } from '@/store/theme';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
// import { Switch } from "@headlessui/react";
const Theme = ({sideBarToggle}: {sideBarToggle: boolean}) => {
  const DarkEffect = useStore((state) => state); // state => state 현재상태를 가져온 후 반환하는 함수
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="flex items-center gap-x-2 text-gray-500 dark:text-gray-400"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Cog6ToothIcon className="h-5 w-5" />
        {sideBarToggle ? <span className="text-xs">설정</span> : null}
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md sm:max-w-full ">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-slate-900 shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-gray-400">설정</Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <div className="mt-8">
                          <div className="flex items-center justify-between">
                            <h2 className="font-bold text-gray-500 dark:text-gray-400">다크모드</h2>
                            <button className="text-gray-400 flex item-center gap-x-1" onClick={()=>{
                              DarkEffect.toggleDarkMode();
                              if(DarkEffect.darkMode){
                                document.documentElement.classList.remove("dark");
                              }else{
                                document.documentElement.classList.add("dark");
                              }
                            }}>
                              {DarkEffect.darkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-slate-900" />}
                              모드로 변경
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export default Theme;
