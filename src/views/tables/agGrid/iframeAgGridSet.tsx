import {useCallback,useMemo,useState,} from 'react';
import { AgGridReact } from 'ag-grid-react';
import {ColDef} from 'ag-grid-community';
import { OlympicDataType2 } from '@/interfaces/UtilityInterface';

const iframeAgGridSet = () => {
    const [rowData, setRowData] = useState<OlympicDataType2[] >();
    const columnDefs : ColDef[]= [
        // set filters
        { field: 'athlete', filter: true },
        { field: 'country', filter: false },
        // 
        { field: 'date', headerName: 'Date' },
        // number filters
        { field: 'gold', filter: 'agNumberColumnFilter' },
        { field: 'silver', filter: 'agNumberColumnFilter' },
        { field: 'bronze', filter: 'agNumberColumnFilter' },
    ];
    const defaultColDef = useMemo<ColDef>(() => {
        return {
            flex: 1,
            minWidth: 200,
            resizable: true,
            filter: true,
            floatingFilter: true,
            editable: true,
        };
    }, []);
    const onGridReady = useCallback(() => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data: OlympicDataType2[]) =>
        setRowData(
          data.map((rowData) => {
            const dateParts = rowData.date.split('/');
            return {
              ...rowData,
              date: `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`,
              dateObject: new Date(
                parseInt(dateParts[2]),
                parseInt(dateParts[1]) - 1,
                parseInt(dateParts[0])
              ),
              countryObject: {
                name: rowData.country,
              },
              hasGold: rowData.gold > 0,
            };
          })
        )
      );
  }, []);
    
    return (
        <>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-gray-400 mb-4">
              Resize 및 Input Filter
              <span className="text-sm font-normal ml-2">각 항목을 double Click하여 수정할 수 있습니다. 테이블 헤드 구분 선을 이용하여 길이를 늘릴 수 있습니다. 또한 input Filter를 이용하여 date, number, string 검색이 가능합니다.</span>
            </h2>
            <div className="ag-theme-alpine h-96">
                <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
                rowHeight={40}
                pagination={true}
                />
            </div>
        </>
    );
};

export default iframeAgGridSet;
