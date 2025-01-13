import { useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/outline";
import {ColDef, } from 'ag-grid-community';
const iframeAgGridPinning = () => {
  // const gridRef = useRef<AgGridReact<OlympicDataType>>(null);
  const gridRef = useRef<any>(null);
  const [rowData, setRowData] = useState();
  const columnDefs: ColDef[] = [
    {
      headerName: '#',
      colId: 'rowNum',
      valueGetter: 'node.id',
      width: 80,
      pinned: 'left',
    },
    { field: 'athlete', width: 150, pinned: 'left' },
    { field: 'age', width: 90, pinned: 'left' },
    { field: 'country', width: 150 },
    { field: 'year', width: 90 },
    { field: 'date', width: 110 },
    { field: 'sport', width: 150 },
    { field: 'gold', width: 100 },
    { field: 'silver', width: 100 },
    { field: 'bronze', width: 100 },
    { field: 'total', width: 100, pinned: 'right' },
  ];
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      resizable: true,
    };
  }, []);
  //데이터 불러오기
  const onGridReady = useCallback(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  //고정해제
  const clearPinned = useCallback(() => {
    gridRef.current.columnApi.applyColumnState({
      defaultState: { pinned: null },
    });
  }, []);
  // 기본레이아웃으로 고정*(#, Athlete, Age = left / pinned= right)
  const resetPinned = useCallback(() => {
    gridRef.current.columnApi.applyColumnState({
      state: [
        { colId: 'rowNum', pinned: 'left' },
        { colId: 'athlete', pinned: 'left' },
        { colId: 'age', pinned: 'left' },
        { colId: 'total', pinned: 'right' },
      ],
      defaultState: { pinned: null },
    });
  }, []);

  // const pinCountry = useCallback(() => {
  //   gridRef.current.columnApi.applyColumnState({
  //     state: [{ colId: 'country', pinned: 'left' }],
  //     defaultState: { pinned: null },
  //   });
  // }, []);
  
  //이동하기
  const jumpToRow = useCallback(() => {
    const value = (document.getElementById("row") as HTMLInputElement | null)?.value;
    const index = Number(value  );
    if (typeof index === 'number' && !isNaN(index)) {
      gridRef.current.api.ensureIndexVisible(index);
    }
  }, []);
  
  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-gray-400 mb-4">
        고정과 이동이 가능한 Grid
        <span className="text-sm font-normal ml-2">테이블 헤드를 드래그하여 고정 영역으로 이동할 수 있고 상단 이동하기 input을 이용하여 Row이동이 가능합니다.</span>
      </h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-x-1 border-emerald-500 border hover:bg-emerald-500 text-emerald-500 rounded text-sm hover:text-white px-2 py-1" onClick={clearPinned}>
            <LockOpenIcon className="w-4 h-4" /> 고정 해제하기
          </button>
          <button className="flex items-center gap-x-1 border-emerald-500 border hover:bg-emerald-500 text-emerald-500 rounded text-sm hover:text-white px-2 py-1" onClick={resetPinned}>
            <LockClosedIcon className="w-4 h-4" /> 기본 레이아웃으로 고정하기
          </button>
          {/* <button onClick={pinCountry}>Left = Country</button> */}
        </div>

        <div className="flex items-center gap-1 text-sm">
          이동하기: 
          <input
            placeholder="N번째로 Row 이동하기"
            type="number"
            className=" border border-gray-200 p-1 rounded"
            id="row"
            onInput={jumpToRow}
          />
        </div>
      </div>

      <div className="ag-theme-alpine " style={{height: '400px'}}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        />
      </div>
  </div>
  );
};

export default iframeAgGridPinning;
