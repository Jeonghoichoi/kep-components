import { useState } from 'react';
import { PencilSquareIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { numberFormat } from '@/utils/util';
import { tableData } from '@/interfaces/UtilityInterface';
import IframeEditModal from './iframeEditModal';
const IframeTableCard = () => {
    const [tableItem, setTableItem] = useState<tableData[]>([
        {
            key: "1",
            name: "리틀 키즈캔 그림책 영어놀이",
            info: "6세부터 8세까지 가능",
            limit: 16,
            cost: 604000,
        },
        {
            key: "2",
            name: "수학의 원리를 알려주는 원리수학!",
            info: "8세 이상",
            limit: 5,
            cost: 124000,
        },
        {
            key: "3",
            name: "집에가고싶다",
            info: "20세 이상",
            limit: 16,
            cost: 161000,
        },
        {
            key: "4",
            name: "체육시간",
            info: "6세 이상",
            limit: 23,
            cost: 201000,
        },
    ])
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [seletedData, setSelectedData] = useState<tableData>();

    // 모달 창 열기
    const handleViewModal = (key:string|undefined): void => {
        setIsModalVisible(true)
        let item = tableItem.filter((item) => item.key === key);
        setSelectedData(item[0]);
    }
    // 데이터 수정
    const onEditData = (editData:tableData): void => {
        setSelectedData(editData);
        // console.log(seletedData);
        const editedData = tableItem.map((item)=>{
            if(item.key === editData.key){
                return editData;
            }
            return item;
        });
        setTableItem(editedData)
    }

  return (
    <>
        <div className="flex flex-col gap-5 mt-12">
            <div className="flex items-center justify-between">
                <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Editable Table</div>
            </div>
            <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg overflow-x-auto">
                <div className="overflow-x-auto w-full">
                    <table className="min-w-full border border-solid border-gray-200 bg-white text-sm dark:bg-slate-900 dark:text-slate-400">
                        <thead className="border-b border-solid border-gray-200 bg-gray-100 dark:bg-slate-900">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-center">순서</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium">이름</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-center">정보</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-center">제한인원</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-center">가격</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-center">관리</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {tableItem.map((item, index)=>{
                                return(
                                    <tr className="border-solid hover:bg-gray-50" key={item.key}> 
                                        <td className="text-center px-4 py-2">{index+ 1}</td>
                                        <td className="whitespace-nowrap px-4 py-2 " onClick={()=>{setSelectedData(item)}}>{item.name}</td>
                                        <td className="text-center whitespace-nowrap px-4 py-2">{item.info}</td>
                                        <td className="text-center whitespace-nowrap px-4 py-2">{item.limit}</td>
                                        <td className="text-center whitespace-nowrap px-4 py-2">{numberFormat(item.cost)}</td>
                                        <td className="flex justify-center whitespace-nowrap px-4 py-2">
                                            <button 
                                                className="flex text-xs text-gray-800 dark:text-slate-400" 
                                                onClick={()=>{handleViewModal(item.key)}}
                                            >
                                                <PencilSquareIcon className="w-4 h-4"/>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                            {
                                tableItem.length == 0 ? (
                                    <tr className="border-solid"> 
                                      <td className="text-center py-10" colSpan={6}>
                                        <p className="flex flex-col gap-y-2 items-center w-full justify-center text-gray-500">
                                            <QuestionMarkCircleIcon className="w-5 h-5"/> 
                                            데이터없음
                                        </p>
                                      </td>
                                    </tr>
                                ) : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalVisible ? <IframeEditModal item={seletedData!} onEditData={onEditData} onToggle={setIsModalVisible} /> : null}
        </div>
    </>
  );
};

export default IframeTableCard;
