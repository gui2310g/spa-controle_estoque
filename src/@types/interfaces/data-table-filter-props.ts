import type { Column } from "@tanstack/react-table"

export interface DataTableFilterProps<TData> {
  column: Column<TData, unknown>
  placeholder?: string
}
