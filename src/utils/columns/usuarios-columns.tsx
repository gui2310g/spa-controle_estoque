'use client'

import type { ColumnDef } from '@tanstack/react-table'
import type { Users } from '@/@types/types/usuario'
import { Button } from '@/components/ui/button'
import { ReusableDialog } from '@/components/ui/dialog'
import { DataTableSort } from '@/components/data-table/data-table-sort'

export const UsuarioColumns: Array<ColumnDef<Users>> = [
  {
    accessorKey: 'id',
    header: 'id',
  },
  {
    accessorKey: 'nome',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return <DataTableSort column={column} title="Email" />
    },
  },
  {
    accessorKey: 'DataCriacao',
    header: 'Data de Criação',
    cell: ({ row }) => {
      const data = row.original.DataCriacao
      return new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
      }).format(data)
    },
  },
  {
    id: 'actions',
    cell: () => {
      return (
        <div className="flex gap-2">
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
