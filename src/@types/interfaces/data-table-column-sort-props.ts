import type { Column } from "@tanstack/react-table"

export interface DataTableColumnSortProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}