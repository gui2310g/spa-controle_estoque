import type { DataTableFilterProps } from '@/@types/interfaces/data-table-filter-props'
import { Input } from '@/components/ui/input'

export function DataTableFilter<TData>({
  column,
  placeholder = 'Filtrar...',
}: DataTableFilterProps<TData>) {
  return (
    <Input
      placeholder={placeholder}
      value={(column.getFilterValue() as string) || ''}
      onChange={(event) => column.setFilterValue(event.target.value)}
      className="max-w-sm"
    />
  )
}