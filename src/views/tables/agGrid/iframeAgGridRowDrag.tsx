import { useCallback, useMemo, useState,} from 'react';
import { AgGridReact } from 'ag-grid-react';
import {ColDef,} from 'ag-grid-community';
import { OlympicDataType } from '@/interfaces/UtilityInterface';
const IframeAgGridRowDrag = () =>{
  const [rowData, setRowData] = useState<OlympicDataType[]>();
  const columnDefs: ColDef[] = [
    { field: 'athlete' },
    { field: 'country' },
    { field: 'year', width: 100 },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
  ];
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      width: 170,
      sortable: true,
      filter: true,
    };
  }, []);

  const onGridReady = useCallback(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data: OlympicDataType[]) => setRowData(data));
  }, []);

  return(
    <>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-gray-400 mb-4">
        Row Dragging
        <span className="text-sm font-normal ml-2">드래그 앤 드랍으로 column뿐 아니라 row영역도 이동이 가능합니다.</span>
      </h2>
      <div className="ag-theme-alpine h-96">
        <AgGridReact<OlympicDataType>
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowDragManaged={true}
          rowDragEntireRow={true}
          rowDragMultiRow={true}
          rowSelection={'multiple'}
          animateRows={true}
          onGridReady={onGridReady}
        />
      </div>
    </>
  )
}
export default IframeAgGridRowDrag