import type { Pedidos } from '@/@types/types/pedidos'
import type { ColumnDef } from '@tanstack/react-table'
import { DataTableSort } from '@/components/data-table/data-table-sort'
import { ReusableDialog } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export const PedidosColumns: Array<ColumnDef<Pedidos>> = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'fornecedores.nome',
    header: ({ column }) => {
      return <DataTableSort column={column} title="Fornecedor" />
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return <DataTableSort column={column} title="Status" />
    },
  },
  {
    accessorKey: 'data',
    header: 'Data',
    cell: ({ row }) => {
      const data = row.original.data
      return new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
      }).format(data)
    },
  },
  {
    header: 'itens',
    accessorKey: 'itens.length',
    cell: ({ row }) => row.original.itens.length.toString(),
  },
  {
    id: 'actions',
    cell: () => {
      return (
        <div className="flex justify-end gap-5">
          <ReusableDialog
            trigger={<Button variant="outline">Atualizar</Button>}
            title="Atualizar Item"
            description="Preencha os campos para atualizar um novo item."
            onConfirm={() => {
              console.log('Item adicionado!')
            }}
          >
            <form>
              <input
                type="text"
                placeholder="Nome"
                className="w-full border rounded p-2 mb-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded p-2 mb-2"
              />
            </form>
          </ReusableDialog>
          <ReusableDialog
            trigger={<Button variant="outline">Deletar</Button>}
            title="Deletar produto"
            description="Certeza que deseja deletar produto?"
            onConfirm={() => {
              console.log('produt Deletado')
            }}
          ></ReusableDialog>
        </div>
      )
    },
  },
]
