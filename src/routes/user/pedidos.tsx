import { createFileRoute } from '@tanstack/react-router'
import { DataTable } from '@/components/data-table/data-table'
import { PedidosColumns } from '@/utils/columns/pedidos-columns'
import { getPedidosData } from '@/data/pedidos-data'

export const Route = createFileRoute('/user/pedidos')({
  component: RouteComponent,
})

const data = getPedidosData()

function RouteComponent() {
  return (
    <DataTable
      columns={PedidosColumns}
      data={data}
      filterColumn="nome"
      filterPlaceholder="Filtrar nomes..."
      showAddButton={true}
    />
  )
}
