import { useState, useEffect, useMemo } from 'react';
import {
  useReactTable,
  ColumnDef,
  PaginationState,
  getCoreRowModel,
  getPaginationRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getFilteredRowModel,
  getSortedRowModel,
  SortingFn,
  flexRender,
  sortingFns,
  FilterFn,
} from '@tanstack/react-table';
import { RankingInfo, rankItem, compareItems } from '@tanstack/match-sorter-utils';
import { faker } from '@faker-js/faker/locale/ko';
import Filter from './Filters';
import CheckBox from './CheckBox';
import DebouncedInput from './DebouncedInput';

type dataType = {
  id: number;
  storeName: string;
  name: string;
  typeName: string;
  approvalStatusName?: string;
  saleName?: string;
  filterFn?: string;
  sortingFn?: SortingFn<any>;
};

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

// filter 함수
const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);

  addMeta({ itemRank });

  return itemRank.passed;
};

// sorting 함수
const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
  let dir = 0;

  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(rowA.columnFiltersMeta[columnId]?.itemRank!, rowB.columnFiltersMeta[columnId]?.itemRank!);
  }
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

const ReactTable = () => {
  const [data, setData] = useState<dataType[]>([]);
  const refreshData = () => setData(() => getData());

  const [rowSelection, setRowSelection] = useState<{}>({});
  const [globalFilter, setGlobalFilter] = useState<string | number>('');

  const getData = () => {
    let data = Array.from({ length: 500 }, () => ({
      id: faker.datatype.number(),
      storeName: faker.company.name(),
      name: faker.commerce.productName(),
      typeName: faker.random.word(),
      // approvalStatusName: faker.random.word(),
      // saleName: faker.random.word(),
    }));
    return data;
  };
  useEffect(() => {
    setData(getData());
  }, []);

  const COLUMNS = [
    {
      id: 'select',
      header: ({ table }: any) => (
        <CheckBox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }: any) => (
        <div className="px-1">
          <CheckBox
            {...{
              key: row.original.id,
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
    },
    {
      header: '상품번호',
      accessorKey: 'id',
    },
    {
      header: '회사명',
      accessorKey: 'storeName',
      filterFn: fuzzyFilter, // optional 처리
      sortingFn: fuzzySort, // optional 처리
    },
    {
      header: '상품명',
      accessorKey: 'name',
    },
    {
      header: '상품유형',
      accessorKey: 'typeName',
    },
  ];

  const columns = useMemo<ColumnDef<dataType, any>[]>(() => COLUMNS, []);

  // 페이징 처리
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 50,
  });

  const pagination = useMemo(() => ({ pageIndex, pageSize }), [pageIndex, pageSize]);

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      pagination,
      rowSelection,
      globalFilter,
    },
    enableRowSelection: true, //enable row selection for all rows
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  console.log(table.getSelectedRowModel().flatRows);

  return (
    <div className="flex flex-col gap-5 mt-12 h-full">
      <div className="flex items-center gap-x-4">
        <div>
          <DebouncedInput
            className="w-full rounded-md border-gray-200 border-solid border shadow-sm sm:text-sm h-8 px-2 dark:bg-slate-900"
            value={globalFilter ?? ''}
            onChange={(value) => setGlobalFilter(String(value))}
            placeholder="검색해주세요."
          />
        </div>
        <div>
          <button
            className="flex py-4 px-4 text-xs text-white bg-indigo-600 h-[24px] items-center justify-items-center rounded"
            onClick={() => refreshData()}
          >
            데이터 리프레시
          </button>
        </div>
      </div>
      <div>컬럼을 선택하면 Sorting 처리가 됩니다.</div>
      <div className="react-table overflow-auto h-[32rem]">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? 'cursor-pointer select-none'
                                : 'flex flex-col justify-center h-full',
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {{
                              asc: ' 🔼',
                              desc: ' 🔽',
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        선택된 데이터:
        {table.getSelectedRowModel().flatRows.map((data) => (
          <div key={data.id} className="flex flex-col gap-y-4">
            <div className="flex gap-x-4">
              <span>id: {data.original.id}</span>
              <span>storeName: {data.original.storeName}</span>
              <span>name: {data.original.name}</span>
              <span>typeName: {data.original.typeName}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        페이지 버튼 이동:
        <button className="border rounded p-1" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
          맨처음
        </button>
        <button className="border rounded p-1" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          이전
        </button>
        <button className="border rounded p-1" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          다음
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          맨끝
        </button>
      </div>
      <span className="flex items-center gap-1">
        <div>페이지 정보:</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>
      </span>
      <span className="flex items-center gap-1">
        페이지 바로 이동:
        <input
          type="number"
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            if (Number(e.target.value) < 1) {
              e.target.value = '1';
              return alert('0 보다 작은 수로 이동할 수 없습니다.');
            }
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            table.setPageIndex(page);
          }}
          className="border p-1 rounded w-16"
        />
      </span>
      <div className="flex gap-x-2 items-center">
        <span>페이지 당 보여질 갯수:</span>
        <select
          className="w-32 h-8 border border-solid border-gray-400 rounded text-gray-600 dark:bg-slate-900"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[50, 100, 150, 200, 250].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ReactTable;
