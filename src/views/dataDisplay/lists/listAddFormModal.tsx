import { useState } from 'react';
import { FormModalProps } from '@/interfaces/UtilityInterface';
import { v4 as uuidv4 } from 'uuid';

const ListAddFormModal = ({ onToggle, onDataChange }: FormModalProps) => {
  const [addFormModalData, setAddFormModalData] = useState({
    key: '',
    name: '',
    email: '',
    cost: '',
  });

  // 하위 컴포넌트에서 데이터를 상위 컴포넌트로 전달
  const handleSubmit = () => {
    // uuid를 사용하여 고유한 key 생성
    const newData = {
      ...addFormModalData,
      key: uuidv4(),
    };

    onDataChange([newData]);
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
              <h3 className="text-3xl font-semibold">List 데이터 추가</h3>
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
                    이름
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={addFormModalData.name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="이름을 입력해주세요."
                    required={true}
                    onChange={(e) => {
                      setAddFormModalData((prevState) => ({
                        ...prevState,
                        name: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                    이메일
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={addFormModalData.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="admin@company.com"
                    required={true}
                    onChange={(e) => {
                      setAddFormModalData((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="cost" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                    가격
                  </label>
                  <input
                    type="number"
                    name="cost"
                    id="cost"
                    value={addFormModalData.cost}
                    placeholder="가격을 입력해주세요."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required={true}
                    onChange={(e) => {
                      setAddFormModalData((prevState) => ({
                        ...prevState,
                        cost: e.target.value,
                      }));
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
                추가하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ListAddFormModal;
