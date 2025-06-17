import { createFileRoute } from '@tanstack/react-router'
import { DataTable } from '@/components/data-table/data-table'
import { AlertasColumns } from '@/utils/columns/alertas-columns'
import { getAlertasData } from '@/data/alertas-data'

export const Route = createFileRoute('/admin/alertas')({
  component: RouteComponent,
})

const data = getAlertasData()

function RouteComponent() {
  return (
    <DataTable
      columns={AlertasColumns}
      data={data}
      filterColumn="nome"
      filterPlaceholder="Filtrar categorias..."
      showAddButton={false}
    />
  )
}
