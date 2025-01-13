import { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { MembertableData, CustomfilterParamsType } from '@/interfaces/UtilityInterface';
import {ColDef} from 'ag-grid-community';
const iframeAgGrid = () => {
  // tabe Data
  const [rowData] = useState<MembertableData[]>([
    {id: 1, name: "노해윤", member: "회원", city: "서울", children: "2명" },
    {id: 2, name: "추희주", member: "비회원", city: "수원", children: "3명" },
    {id: 3, name: "한경화", member: "회원",city: "용인", children: "1명" },
    {id: 4, name: "권기윤", member: "회원",city: "과천", children: "3명" },
    {id: 5, name: "백희영", member: "비회원",city: "남양주", children: "2명" },
    {id: 6, name: "홍선영", member: "비회원",city: "파주", children: "1명" },
    {id: 7, name: "풍상미", member: "회원",city: "서울", children: "2명" },
    {id: 8, name: "추승수", member: "비회원",city: "서울", children: "1명" },
    {id: 9, name: "복현수", member: "회원",city: "서울", children: "1명" },
    {id: 10, name: "장수빈", member: "회원",city: "서울", children: "1명" },
  ]);
  //테이블 항목(thead)
  const [columnDefs] = useState<object[]>([
    { 
      field: "name", 
      checkboxSelection: true, 
      headerCheckboxSelection: true,
      headerName: '이름'
    },
    { 
      field: "member",
      headerName: '회원 상태' 
    },
    { 
      field: "city", 
      headerName: '지역' 
    },
    { 
      field: "children",  
      headerName: '자녀 수' 
    }
  ]);
  // 필터
  const customfilterParams: CustomfilterParamsType = {
    filterOptions: ['contains', 'notContains'],
    textFormatter: (r: string | null) => {
      if (r == null) return null;
      return r
        .toLowerCase()
        .replace(/[àáâãäå]/g, 'a')
        .replace(/æ/g, 'ae')
        .replace(/ç/g, 'c')
        .replace(/[èéêë]/g, 'e')
        .replace(/[ìíîï]/g, 'i')
        .replace(/ñ/g, 'n')
        .replace(/[òóôõö]/g, 'o')
        .replace(/œ/g, 'oe')
        .replace(/[ùúûü]/g, 'u')
        .replace(/[ýÿ]/g, 'y');
    },
    debounceMs: 200,
    maxNumConditions: 1,
  };
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      sortable: true,
      filter: true,
      filterParams: customfilterParams,
    };
  }, []);
  return (
    <>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-gray-400 mb-4">
        기본 Grid(Filter, Sortable)
        <span className="text-sm font-normal ml-2">CheckBox 기능 첨부를 하였고 테이블 헤드를 클릭하여, 각 컬럼 별 Sortable과 Filter 사용이 가능합니다. </span>
      </h2>
      <div className="ag-theme-alpine h-96">
          <AgGridReact 
          rowData={rowData} 
          columnDefs={columnDefs} 
           rowSelection={'multiple'}
          defaultColDef={defaultColDef} 
          ></AgGridReact>
      </div>
    </>
  );
};

export default iframeAgGrid;
