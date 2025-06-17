import { createFileRoute } from '@tanstack/react-router'
import { DataTable } from '@/components/data-table/data-table'
import { FornecedoresColumns } from '@/utils/columns/fornecedores-columns'
import { getFornecedoresData } from '@/data/fornecedores-data'

export const Route = createFileRoute('/admin/fornecedores')({
  component: FornecedoresRoute,
})

const data = getFornecedoresData()

function FornecedoresRoute() {
  return (
    <DataTable
      columns={FornecedoresColumns}
      data={data}
      filterColumn="nome"
      filterPlaceholder="Filtrar nomes..."
      showAddButton={false}
    />
  )
}
