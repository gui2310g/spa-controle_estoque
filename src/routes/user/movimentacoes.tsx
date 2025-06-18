import { createFileRoute } from '@tanstack/react-router'
import { DataTable } from '@/components/data-table/data-table'
import { getMovimentacoesData } from '@/data/movimentacoes-data'
import { MovimentacoesColumns } from '@/utils/columns/movimentacoes-columns'

export const Route = createFileRoute('/user/movimentacoes')({
  component: RouteComponent,
})

const data = getMovimentacoesData()
function RouteComponent() {
  return (
    <DataTable
      columns={MovimentacoesColumns}
      data={data}
      filterColumn="nome"
      filterPlaceholder="Filtrar nomes..."
      showAddButton={true}
    />
  )
}
