import { SelectedUpdateItem } from '@/interfaces/UtilityInterface';

const ListUpdateModal = ({ onToggle, onUpdate, item }: SelectedUpdateItem) => {
  // 하위 컴포넌트에서 데이터를 상위 컴포넌트로 전달
  const handleSubmit = () => {
    // 수정된 아이템을 상위 컴포넌트로 전달
    if (item) {
      onUpdate(item);
    }
    // 모달 닫기
    onToggle();
  };

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
                  <label htmlFor="key" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                    번호
                  </label>
                  <input
                    type="text"
                    name="key"
                    id="key"
                    value={item?.key}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="타이틀을 입력해주세요."
                    required={true}
                    onChange={(e) => onUpdate({ ...item, key: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="title" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                    타이틀
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={item?.title}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="타이틀을 입력해주세요."
                    required={true}
                    onChange={(e) => onUpdate({ ...item, title: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                    디스크립션
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    value={item?.description}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required={true}
                    onChange={(e) => {
                      onUpdate({ ...item, description: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="cost" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                    가격
                  </label>
                  <input
                    type="text"
                    name="cost"
                    id="cost"
                    value={item?.cost}
                    placeholder="가격을 입력해주세요."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required={true}
                    onChange={(e) => {
                      // item을 복사하고 cost만 업데이트
                      onUpdate({ ...item, cost: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="badge" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                    뱃지여부
                  </label>
                  <input
                    type="checkbox"
                    name="badge"
                    id="badge"
                    checked={item?.isBadge}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    onChange={(e) => {
                      onUpdate({ ...item, isBadge: e.target.checked });
                    }}
                  />
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onToggle}
              >
                취소
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmit}
              >
                수정하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ListUpdateModal;
