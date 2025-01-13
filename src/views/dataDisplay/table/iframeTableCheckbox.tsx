import { useState } from 'react';
import { QuestionMarkCircleIcon} from '@heroicons/react/24/outline';
import { numberFormat } from '@/utils/util';
import { tableData } from '@/interfaces/UtilityInterface';
const IframeTableCheckbox = () => {
  const [tableItem, setTableItem] = useState<tableData[]>([
    {
      key: '1',
      name: '리틀 키즈캔 그림책 영어놀이',
      info: '6세부터 8세까지 가능',
      limit: 24,
      cost: 604000,
    },
    {
      key: '2',
      name: '1수학의 원리를 알려주는 원리수학!',
      info: '8세 이상',
      limit: 5,
      cost: 124000,
    },
    {
      key: '3',
      name: '2수학의 원리를 알려주는 원리수학!',
      info: '8세 이상',
      limit: 5,
      cost: 124000,
    },
    {
      key: '4',
      name: '지식성장~입니다',
      info: '8세 이상',
      limit: 5,
      cost: 124000,
    },
  ]);

  const [checkAll, setCheckAll] = useState<boolean>(false);
  //체크
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, tableNo: string): void => {
    // 테이블 데이터 내 checked 필드 추가
    setTableItem([...tableItem.map((item) => (item.key === tableNo ? { ...item, checked: e.target.checked } : item))]);
  };
  //전체 삭제
  const handleRemoveAll = (): void => {
    setTableItem(tableItem.filter((data) => !data));
    alert('전체 삭제 되었습니다.');
  };
  //선택삭제
  const handleRomoveSelect = (): void | null => {
    // 데이터 선택을 안한 경우
    if (!tableItem.some((item) => item.checked === true)) {
      alert('데이터를 선택해주세요!!');
      return null;
    }
    // 선택된 값만 체크
    let updatedTableItem = tableItem.filter((item) => !item.checked);
    setTableItem(updatedTableItem);
    setCheckAll(false)
  };

  const handleAllSelect = (): void => {
    setTableItem([...tableItem.map(item => {
      item.checked = !checkAll;
        return item;
      })
    ]);
    setCheckAll(!checkAll);
  }
  return (
    <>
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Simple Deletable Table</div>
        </div>
        <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg overflow-x-auto">
          <div className="overflow-x-auto w-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs dark:text-slate-400">
                총 {tableItem.length}개
              </span>
              <div className="flex gap-x-2">
                <button className="border border-gray-300 py-1 px-3 text-xs rounded text-gray-500 hover:bg-gray-50" onClick={handleRemoveAll}>
                  전체 삭제
                </button>
                <button className="border border-gray-300 py-1 px-3 text-xs rounded text-gray-500 hover:bg-gray-50" onClick={handleRomoveSelect}>
                  선택 삭제
                </button>
              </div>
            </div>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm dark:bg-slate-900 dark:text-slate-400">
              <thead className="">
                <tr className="bg-gray-100 dark:bg-slate-700">
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                      <label htmlFor="selectAll"></label>
                      <input
                        className="h-4 w-4 rounded border-gray-300"
                        type="checkbox"
                        id="selectAll"
                        onChange={handleAllSelect}
                        checked={checkAll ? true : false}
                      />
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-center">순서</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium">이름</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium">정보</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium">제한인원</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium">가격</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tableItem.map((item, index) => {
                  return (
                    <tr className="border-solid" key={item.key}>
                      <td className="text-center">
                        <label htmlFor={`row${index}`}></label>
                        <input
                          className="h-4 w-4 rounded border-gray-300"
                          type="checkbox"
                          id={`row${index}`}
                          onChange={(e) => {
                            handleCheck(e, item.key);
                          }}
                          checked={checkAll == true ? true : undefined}
                        />
                      </td>
                      <td className="text-center">{index + 1}</td>
                      <td className="whitespace-nowrap px-4 py-2 ">{item.name}</td>
                      <td className="whitespace-nowrap px-4 py-2">{item.info}</td>
                      <td className="whitespace-nowrap px-4 py-2">{item.limit}</td>
                      <td className="whitespace-nowrap px-4 py-2">{numberFormat(item.cost)}</td>
                    </tr>
                  );
                })}
                {tableItem.length == 0 ? (
                  <tr className="border-solid">
                    <td className="text-center py-10" colSpan={6}>
                      <p className="flex flex-col gap-y-2 items-center w-full justify-center text-gray-500">
                        <QuestionMarkCircleIcon className="w-5 h-5" />
                        데이터없음
                      </p>
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default IframeTableCheckbox;
