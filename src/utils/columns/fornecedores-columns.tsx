import type { ColumnDef } from '@tanstack/react-table'
import type { Fornecedor } from '@/@types/types/fornecedor'
import { DataTableSort } from '@/components/data-table/data-table-sort'
import { Button } from '@/components/ui/button'
import { ReusableDialog } from '@/components/ui/dialog'

export const FornecedoresColumns: Array<ColumnDef<Fornecedor>> = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'nome',
    header: ({ column }) => {
      return <DataTableSort column={column} title="Nome" />
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return <DataTableSort column={column} title="Status" />
    },
  },
  {
    accessorKey: 'numero',
    header: 'Numero',
  },
  {
    accessorKey: 'complemento',
    header: 'Complemento',
  },
  {
    accessorKey: 'bairro',
    header: 'Bairro',
  },
  {
    accessorKey: 'cidade',
    header: 'Cidade',
  },
  {
    accessorKey: 'estado',
    header: 'Estado',
  },
  {
    accessorKey: 'cep',
    header: 'CEP',
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
