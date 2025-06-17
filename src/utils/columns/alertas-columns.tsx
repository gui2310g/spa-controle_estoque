import type { Alertas } from '@/@types/types/alertas'
import type { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { ReusableDialog } from '@/components/ui/dialog'

export const AlertasColumns: Array<ColumnDef<Alertas>> = [
  {
    header: 'Id',
    accessorKey: 'id',
  },
  {
    header: 'IdProduto',
    accessorKey: 'produtoId',
  },
  {
    header: 'Mensagem',
    accessorKey: 'mensagem',
  },
  {
    accessorKey: 'DataCriacao',
    header: 'Data de Criação',
    cell: ({ row }) => {
      const data = row.original.dataCriacao
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
