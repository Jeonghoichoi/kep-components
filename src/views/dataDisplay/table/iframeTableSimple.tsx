import { useState } from 'react';
import { TrashIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { numberFormat } from '@/utils/util';
import { tableData } from '@/interfaces/UtilityInterface';
import IframeDeleteModal from './iframeDeleteModal';
const IframeTableSimple = () => {
    const [tableItem, setTableItem] = useState<tableData[]>([
        {
            key: "1",
            name: "1리틀 키즈캔 그림책 영어놀이",
            info: "6세부터 8세까지 가능",
            limit: 24,
            cost: 604000,
        },
        {
            key: "2",
            name: "2수학의 원리를 알려주는 원리수학!",
            info: "8세 이상",
            limit: 5,
            cost: 124000,
        },
        {
            key: "3",
            name: "3수학의 원리를 알려주는 원리수학!",
            info: "8세 이상",
            limit: 5,
            cost: 124000,
        },
        {
            key: "4",
            name: "4수학의 원리를 알려주는 원리수학!",
            info: "8세 이상",
            limit: 5,
            cost: 124000,
        },
    ])

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [dataIndex, setDataIndex] = useState<number>();
    
    // 모달 창 열기
    const handleViewModal = (): void => {
        setIsModalVisible(true)
    }
    // 삭제
    const handleRemove = ():void => {
        const updatedData = [...tableItem];
        updatedData.splice(dataIndex!, 1);
        setTableItem(updatedData);
        setIsModalVisible(false);
    }

  return (
    <>
        <div className="flex flex-col gap-5 mt-12">
            <div className="flex items-center justify-between">
                <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Simple Deletable Table</div>
            </div>
            <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg overflow-x-auto">
                <div className="overflow-x-auto w-full">
                    <table className="min-w-full border-b border-solid border-gray-200 bg-white text-sm dark:bg-slate-900 dark:text-slate-400">
                        <thead className="border-b border-solid border-gray-200">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-center">순서</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium">이름</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium">정보</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium">제한인원</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium">가격</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium">관리</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {tableItem.map((item, index)=>{
                                return(
                                    <tr className="border-solid" key={item.key}> 
                                        <td className="text-center">{index+ 1}</td>
                                        <td className="whitespace-nowrap px-4 py-2 " >{item.name}</td>
                                        <td className="whitespace-nowrap px-4 py-2">{item.info}</td>
                                        <td className="whitespace-nowrap px-4 py-2">{item.limit}</td>
                                        <td className="whitespace-nowrap px-4 py-2">{numberFormat(item.cost)}</td>
                                        <td className="whitespace-nowrap px-4 py-2">
                                            <button className="flex text-xs text-gray-800 dark:text-slate-400" onClick={()=>{handleViewModal(); setDataIndex(index)}}><TrashIcon className="w-4 h-4"/></button>
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
            {isModalVisible ? <IframeDeleteModal onToggle={setIsModalVisible} onRemove={handleRemove} /> : null}
        </div>
    </>
  );
};

export default IframeTableSimple;
