import { createFileRoute } from '@tanstack/react-router'
import { DataTable } from '@/components/data-table/data-table'
import { ProdutosColumns } from '@/utils/columns/produtos-columns';
import { getProdutosData } from '@/utils/data/produtos-data'

export const Route = createFileRoute('/admin/produtos')({
  component: RouteComponent,
})

const data = getProdutosData();

function RouteComponent() {
  return (
      <DataTable
        columns={ProdutosColumns}
        data={data}
        filterColumn="nome"
        filterPlaceholder="Filtrar nomes..."
        showAddButton={false}
      />
    )
}
