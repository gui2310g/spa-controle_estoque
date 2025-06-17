import { createFileRoute } from '@tanstack/react-router'
import { DataTable } from '@/components/data-table/data-table'
import { UsuarioColumns } from '@/utils/columns/usuarios-columns'
import { getUsuariosData } from '@/data/usuarios-data'

export const Route = createFileRoute('/admin/usuarios')({
  component: UsuariosRoute,
})

const data = getUsuariosData()

function UsuariosRoute() {
  return (
    <DataTable
      columns={UsuarioColumns}
      data={data}
      filterColumn="email"
      filterPlaceholder="Filtrar emails..."
      showAddButton={false}
    />
  )
}
