import { useState, useMemo, useCallback } from "react";
import { AgGridReact } from 'ag-grid-react';
import {ColDef} from 'ag-grid-community';
import Element from "./element";

const IframeAgGridButton = () =>{

  const [rowData, setRowData] = useState();
  const columnDefs: ColDef[] = [
    {
      field: 'athlete',
    },
    {
      field: 'country',
      flex: 1,
      cellRenderer: Element,
    },
    {
      field: 'age',
      flex: 1,
    },
  ];

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      resizable: true,
      minWidth: 130,
    };
  }, []);


  const onGridReady = useCallback(() => {
    fetch('https://www.ag-grid.com/example-assets/small-olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => {
        setRowData(data);
      });
  }, []);

  return(
    <>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-gray-400 mb-4">
        버튼(링크)이 있는 Grid
        <span className="text-sm font-normal ml-2">링크버튼을 이용하여 해당 페이지로 이동 가능합니다.</span>
      </h2>
      <div className="ag-theme-alpine h-96">
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
          />
      </div>
    </>
  )
}
export default IframeAgGridButton