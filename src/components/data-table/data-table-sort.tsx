import { ArrowUpDown } from 'lucide-react'
import type { DataTableColumnSortProps } from '@/@types/interfaces/data-table-column-sort-props'
import { Button } from '@/components/ui/button'

export function DataTableSort<TData, TValue>({
  column,
  title,
}: DataTableColumnSortProps<TData, TValue>) {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  )
}
