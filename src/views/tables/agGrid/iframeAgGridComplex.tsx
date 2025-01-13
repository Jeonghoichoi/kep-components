import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { RowSpanParams, ColDef, ICellRendererComp, ICellRendererParams } from 'ag-grid-community';

class ShowCellRenderer implements ICellRendererComp {
    ui: any;
  
    init(params: ICellRendererParams) {
      const cellBlank = !params.value;
      if (cellBlank) {
        return;
      }
  
      this.ui = document.createElement('div');
      this.ui.innerHTML =
        '<div class="show-name">' +
        params.value.name +
        '' +
        '</div>' +
        '<div class="show-presenter">' +
        params.value.presenter +
        '</div>';
    }
  
    getGui() {
      return this.ui;
    }
  
    refresh() {
      return false;
    }
  }

const iframeAgGridComplex = () => {
    function rowSpan(params: RowSpanParams) {
        if (params.data.show) {
          return 4;
        } else {
          return 1;
        }
      }
      
    const rowData = [
        {
            localTime: '5:00am',
            show: { name: 'Wake Up Dublin', presenter: 'Andrew Connell' },
            a: 0.231,
            b: 0.523,
            c: 0.423,
            d: 0.527,
            e: 0.342,
        },
        { localTime: '5:15am', a: 0.423, b: 0.452, c: 0.523, d: 0.543, e: 0.452 },
        { localTime: '5:30am', a: 0.537, b: 0.246, c: 0.426, d: 0.421, e: 0.523 },
        { localTime: '5:45am', a: 0.893, b: 0.083, c: 0.532, d: 0.983, e: 0.543 },
        {
            localTime: '6:00am',
            show: { name: 'Pure Back In The Day', presenter: 'Kevin Flanagan' },
            a: 0.231,
            b: 0.523,
            c: 0.423,
            d: 0.527,
            e: 0.342,
        },
        {
            localTime: '7:00am',
            show: { name: 'Wake Up Dublin', presenter: 'Andrew Connell' },
            a: 0.231,
            b: 0.523,
            c: 0.423,
            d: 0.527,
            e: 0.342,
        },
        { localTime: '7:15am', a: 0.423, b: 0.452, c: 0.523, d: 0.543, e: 0.452 },
        { localTime: '7:30am', a: 0.537, b: 0.246, c: 0.426, d: 0.421, e: 0.523 },
        { localTime: '7:45am', a: 0.893, b: 0.083, c: 0.532, d: 0.983, e: 0.543 },
        { localTime: '8:00am', a: 0.231, b: 0.523, c: 0.423, d: 0.527, e: 0.342 },
    ];

    const columnDefs = [
      { field: 'localTime' },
      {
        field: 'show',
        cellRenderer: ShowCellRenderer,
        rowSpan: rowSpan,
        cellClassRules: {
          'show-cell': 'value !== undefined',
        },
        width: 200,
        cellDataType: false,
      },
      { field: 'a' },
      { field: 'b' },
      { field: 'c' },
      { field: 'd' },
      { field: 'e' },
    ];
    const defaultColDef = useMemo<ColDef>(() => {
      return {
        resizable: true,
        width: 170,
      };
    }, []);


    return (
        <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-gray-400 mb-4">
                복합 컬럼이 가능한 Grid
                <span className="text-sm font-normal ml-2"></span>
            </h2>
            <div className="ag-theme-alpine h-96">
                <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                suppressRowTransform={true}
                />
            </div>
        </div>
    );
};

export default iframeAgGridComplex;
