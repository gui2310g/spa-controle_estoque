import type { Categoria } from '@/@types/types/categorias'
import type { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { ReusableDialog } from '@/components/ui/dialog'

export function CategoriasColumns(): Array<ColumnDef<Categoria>> {
  return [
    {
      header: 'Id',
      accessorKey: 'id',
    },
    {
      header: 'Nome',
      accessorKey: 'nome',
    },
    {
      header: 'Produtos',
      accessorKey: 'produtos.length',
      cell: ({ row }) => row.original.produtos.length.toString(),
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
}
