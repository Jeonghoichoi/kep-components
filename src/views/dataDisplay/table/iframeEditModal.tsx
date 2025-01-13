import { SelecterEditItem } from '@/interfaces/UtilityInterface';
const IframeEditModal = ({onToggle, item, onEditData}:SelecterEditItem) => { 
    const onsubmit = () => {
    
        if( item.name.length && item.info.length > 0 && item.cost.toString.length > 1 && item.limit.toString.length > 1){
            console.log(item.cost.toString())
            onEditData(item)
            onToggle(false);
        }else{
            alert('필수항목을 입력하세요')
        }
    }
    
    return (
        <div className="w-full h-full fixed top-0 left-0 z-10">
            <div className="w-full h-full bg-black opacity-30 absolute top-0 left-0"></div>
            <section className="lg:w-1/2 sm:w-1/2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl">
                <div className="p-6 text-center">
                    <h2 className="text-base font-semibold uppercase dark:text-white mb-5">
                        수정
                    </h2>
                    <form>
                        <div className="grid grid-cols-2 gap-2 mb-4 dark:text-slate-400">
                            <div className="col-span-2">
                                <label htmlFor="inputName" className="text-left block text-xs font-medium text-gray-700 dark:text-white">
                                    <span className="text-red-500">*</span>이름
                                </label>
                                <input
                                    type="text"
                                    defaultValue={item.name}
                                    className="mt-1 w-full bg-transparent rounded-md border-gray-200 border-solid border shadow-sm text-sm h-8 px-2"
                                    onChange={(e)=>{onEditData({...item, name: e.target.value})}}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="inputName" className="text-left block text-xs font-medium text-gray-700 dark:text-white">
                                    <span className="text-red-500">*</span>제한인원
                                </label>
                                <input
                                    type="number"
                                    defaultValue={item.limit}
                                    className="mt-1 w-full bg-transparent rounded-md border-gray-200 border-solid border shadow-sm text-sm h-8 px-2"
                                    onChange={(e)=>{onEditData({...item, limit: e.target.valueAsNumber})}}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="inputName" className="text-left block text-xs font-medium text-gray-700 dark:text-white">
                                    <span className="text-red-500">*</span>정보
                                </label>
                                <input
                                    type="text"
                                    defaultValue={item.info}
                                    className="mt-1 w-full bg-transparent rounded-md border-gray-200 border-solid border shadow-sm text-sm h-8 px-2"
                                    onChange={(e)=>{onEditData({...item, info: e.target.value})}}
                                    required
                                />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="inputName" className="text-left block text-xs font-medium text-gray-700 dark:text-white">
                                    <span className="text-red-500">*</span>가격
                                </label>
                                <input                                  
                                    type="number"
                                    defaultValue={item.cost}
                                    className="mt-1 w-full bg-transparent rounded-md border-gray-200 border-solid border shadow-sm text-sm h-8 px-2"
                                    onChange={(e)=>{onEditData({...item, cost: e.target.valueAsNumber})}}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <button className="py-2 w-full rounded-lg bg-blue-600 text-white text-sm" onClick={()=>{onsubmit()}}>확인</button>
                            <button className="py-2 w-full rounded-lg bg-white border border-solid border-blue-600 text-blue-600 text-sm" onClick={()=>onToggle(false)}>취소</button>
                        </div>
                    </form>
                </div>
            </section>
       </div>
    );
  };
  
  export default IframeEditModal;
  