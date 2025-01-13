import { SelecterDeleteItem } from '@/interfaces/UtilityInterface';
const IframeDeleteModal = ({onToggle, onRemove}:SelecterDeleteItem) => { 
    return (
        <div className="w-full h-full fixed top-0 left-0 z-10">
            <div className="w-full h-full bg-black opacity-30 absolute top-0 left-0"></div>
            <section className="w-80 lg:w-1/2 sm:w-1/2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl">
                    <div className="p-6 text-center">
                        <h2 className="text-base font-semibold uppercase dark:text-white mb-4">
                            해당 데이터를 삭제하시겠습니까?
                        </h2>
                        <div className="flex gap-x-4">
                            <button className="py-2 w-full rounded-lg bg-blue-600 text-white text-sm" onClick={onRemove}>확인</button>
                            <button className="py-2 w-full rounded-lg bg-white border border-solid border-blue-600 text-blue-600 text-sm" onClick={()=>onToggle(false)}>취소</button>
                        </div>
                    </div>
            </section>
       </div>
    );
  };
  
  export default IframeDeleteModal;
  