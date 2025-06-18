import type { Movimentacoes } from '@/@types/types/movimentacoes'
import type { ColumnDef } from '@tanstack/react-table'
import { DataTableSort } from '@/components/data-table/data-table-sort'
import { ReusableDialog } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export const MovimentacoesColumns: Array<ColumnDef<Movimentacoes>> = [
  {
    header: 'id',
    accessorKey: 'id',
  },
  {
    header: 'IdProduto',
    accessorKey: 'produtoId',
  },
  {
    accessorKey: 'tipo',
    header: ({ column }) => {
      return <DataTableSort column={column} title="Tipo" />
    },
  },
  {
    accessorKey: 'quantidade',
    header: 'Quantidade',
  },
  {
    accessorKey: 'data',
    header: 'Data da Movimentaçao',
    cell: ({ row }) => {
      const data = row.original.Data
      return new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
      }).format(data)
    },
  },
  {
    id: 'actions',
    cell: () => {
      return (
        <div className="flex justify-end gap-5">
          <ReusableDialog
            trigger={<Button variant="outline">Deletar</Button>}
            title="Deletar item"
            description="Certeza que deseja deletar este item?"
            onConfirm={() => {
              console.log('Item Deletado')
            }}
          ></ReusableDialog>
        </div>
      )
    },
  },
]
