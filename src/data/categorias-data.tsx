import type { Categoria } from '@/@types/types/categorias'

export function getCategoriasData(): Array<Categoria> {
  return [
    {
      id: 1,
      nome: 'Eletrônicos',
      produtos: [
        {
          id: 6,
        },
      ],
    },
    {
      id: 2,
      nome: 'Móveis',
      produtos: [
        {
          id: 2,
        },
      ],
    },
    {
      id: 3,
      nome: 'Roupas',
      produtos: [
        { id: 2 }, { id: 4 }
      ],
    },
  ]
}
