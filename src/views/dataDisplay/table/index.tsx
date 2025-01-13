import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeTableSimple from './iframeTableSimple';
import IframeTableCard from './iframeTableCard';
import IframeTableCheckbox from './iframeTableCheckbox';
const Table = () => {
  const simpleDelcode = `const simpleDelcode = () => {
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
    )
  }`;
  const simpleEditcode = `const simpleEditcode = () => {
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
    )
  }`;
  const checkboxcode= `const checkboxcode = () => {
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
                        <labe></label>
                        <input
                          className="h-4 w-4 rounded border-gray-300"
                          type="checkbox"
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
    )
  }`;

  const items = [
    {
      label: 'Home',
      path: '/kep-component/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/kep-component/dataDisplay/table',
          children: [
            {
              label: 'Data Display',
              path: '/kep-component/dataDisplay/table',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: "Table",
    description: "빠른 참조를 위해 적당한 형태로 자료를 모아놓은 것이다. 행(Row)와 열(Column)으로 구성되어있으며 이를 통해 정보를 관리한다."
  }

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
     <Breadcrumbs items={items} />
     <PageInformation PageInfo={PageInfo}/>
      <CodeBoard code={simpleDelcode} />
      <IframeTableSimple />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={simpleEditcode} />
      <IframeTableCard />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={checkboxcode} />
      <IframeTableCheckbox />
    </div>
  );
};

export default Table;
