import type React from 'react';

export interface DataTableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  body?: (row: any) => React.ReactNode;
  className?: string;
}

export interface DataTableProps {
  items: any[];
  columns: DataTableColumn[];
  loading?: boolean;
  rows?: number;
  dataKey?: string;
  onRowClick?: (row: any) => void;
  className?: string;
  rowClassName?: (row: any) => Record<string, boolean> | string;
}
