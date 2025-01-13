import { FormCardModalProps } from '@/interfaces/UtilityInterface';
const IframeCardAdd = ({ setNewTitle, setNewText, onClose, onCreate }: FormCardModalProps) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10">
      <div className="w-full h-full bg-black opacity-30 absolute top-0 left-0" onClick={onClose}></div>
      <section className="w-80 lg:w-1/2 sm:w-1/2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl">
        <div className="p-6 text-center">
          <h2 className="text-base font-semibold uppercase dark:text-white">생성할 정보를 입력해주세요</h2>
          <div className="flex flex-col gap-3">
            <div>
              <label htmlFor="inputName" className="text-left block text-xs font-medium text-gray-700 dark:text-white">
                제목
              </label>
              <input
                type="text"
                placeholder="제목"
                onChange={(e) => {
                  setNewTitle(e.target.value);
                }}
                className="mt-1 w-full bg-transparent rounded-md border-gray-200 border-solid border shadow-sm text-sm h-8 px-2"
              />
            </div>
            <div>
              <label htmlFor="inputName" className="text-left block text-xs font-medium text-gray-700 dark:text-white">
                내용
              </label>
              <input
                type="text"
                placeholder="내용"
                onChange={(e) => {
                  setNewText(e.target.value);
                }}
                className="mt-1 w-full bg-transparent rounded-md border-gray-200 border-solid border shadow-sm text-sm h-8 px-2"
              />
            </div>
            <div className="flex gap-x-4">
              <button
                onClick={onClose}
                className="px-4 py-2 mt-2 w-full rounded-lg border border-solid border-blue-600 text-blue-600 flex items-center justify-center text-sm"
              >
                닫기
              </button>
              <button
                onClick={onCreate}
                className="px-4 py-2 mt-2 w-full rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm"
              >
                생성하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IframeCardAdd;
