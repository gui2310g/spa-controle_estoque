import { createFileRoute } from '@tanstack/react-router'
import { DataTable } from '@/components/data-table/data-table'
import { CategoriasColumns } from '@/utils/columns/categorias-columns'
import { getCategoriasData } from '@/utils/data/categorias-data'

export const Route = createFileRoute('/admin/categorias')({
  component: RouteComponent,
})

const data = getCategoriasData()

function RouteComponent() {
  return (
    <DataTable
      columns={CategoriasColumns()}
      data={data}
      filterColumn="nome"
      filterPlaceholder="Filtrar categorias..."
      showAddButton={true}
    />
  )
}
