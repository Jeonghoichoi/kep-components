import { SelectedLoadItem } from '@/interfaces/UtilityInterface';

const ListViewModal = ({ onToggle, item }: SelectedLoadItem) => {
  return (
    <>
      <div
        id="registerform-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full"
      >
        <div className="relative my-6 mx-auto max-w-3xl w-full">
          {/* content 영역 */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{item?.key}번 리스트 데이터</h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form className="space-y-6" action="#">
                <div>
                  <label htmlFor="text" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                    타이틀
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={item?.title}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="아이디를 입력해주세요."
                    required={true}
                    disabled={true}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                    디스크립션
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={item?.description}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="admin@company.com"
                    required={true}
                    disabled={true}
                  />
                </div>
                <div>
                  <label htmlFor="cost" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                    가격
                  </label>
                  <input
                    type="string"
                    name="cost"
                    id="cost"
                    value={item?.cost}
                    placeholder="가격을 입력해주세요."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required={true}
                    disabled={true}
                  />
                </div>
                <div>
                  <label htmlFor="cost" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                    뱃지여부
                  </label>
                  <input
                    type="string"
                    name="badge"
                    id="badge"
                    value={item?.isBadge ? '있음' : '없음'}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required={true}
                    disabled={true}
                  />
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onToggle}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ListViewModal;
