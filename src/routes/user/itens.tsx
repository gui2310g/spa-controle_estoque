import { createFileRoute } from '@tanstack/react-router'
import { DataTable } from '@/components/data-table/data-table'
import { ItensColumns } from '@/utils/columns/itens-columns'
import { getItensData } from '@/data/itens-data'

export const Route = createFileRoute('/user/itens')({
  component: RouteComponent,
})

const data = getItensData()
function RouteComponent() {
  return (
    <DataTable
      columns={ItensColumns}
      data={data}
      filterColumn="nome"
      filterPlaceholder="Filtrar nomes..."
      showAddButton={true}
    />
  )
}
