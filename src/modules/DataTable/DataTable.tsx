import { DataTable as ReactDataTable } from "primereact/datatable";
import { Spinner } from "modules";
import type { DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import type { DataTableProps } from "./dataTable.types";

export function DataTable(props: DataTableProps) {
  const {
    items,
    columns,
    loading,
    rows = 10,
    dataKey = "id",
    onRowClick,
    className,
  } = props;

  return (
    <ReactDataTable
      value={items as DataTableValueArray}
      loading={loading}
      loadingIcon={<Spinner />}
      paginator
      rows={rows}
      dataKey={dataKey}
      rowHover
      className={`${className ?? ""}`}
      onRowClick={(e) => onRowClick?.(e.data)}
    >
      {columns.map((item) => (
        <Column
          key={item.field}
          field={item.field}
          header={item.header}
          sortable={item.sortable}
          body={item.body ? (row: any) => item.body!(row) : undefined}
        />
      ))}
    </ReactDataTable>
  );
}
