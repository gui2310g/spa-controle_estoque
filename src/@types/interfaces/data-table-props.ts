import type { ColumnDef } from '@tanstack/react-table'

export interface DataTableProps<TData, TValue> {
  columns: Array<ColumnDef<TData, TValue>>
  data: Array<TData>
  filterColumn: string 
  filterPlaceholder?: string 
  dialogTitle?: string 
  dialogDescription?: string
  dialogContent?: React.ReactNode 
  onDialogConfirm?: () => void 
  showAddButton?: boolean
}