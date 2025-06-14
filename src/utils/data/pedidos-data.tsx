import type { Pedidos } from '@/@types/types/pedidos'
import { pedidoStatus } from '@/@types/types/pedidos'

export function getPedidosData(): Array<Pedidos> {
  return [
    {
      id: 1,
      fornecedores: {
        id: 1,
        nome: 'Fornecedor A',
      },
      status: pedidoStatus.PENDENTE,
      data: new Date('2023-10-01'),
      itens: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    },
    {
      id: 2,
      fornecedores: {
        id: 2,
        nome: 'Fornecedor B',
      },
      status: pedidoStatus.CONCLUIDO,
      data: new Date('2023-10-02'),
      itens: [
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    },
    {
      id: 3,
      fornecedores: {
        id: 1,
        nome: 'Fornecedor C',
      },
      status: pedidoStatus.CONCLUIDO,
      data: new Date('2023-10-03'),
      itens: [
        {
          id: 5,
        },
      ],
    },
    {
      id: 4,
      fornecedores: {
        id: 1,
        nome: 'Fornecedor A',
      },
      status: pedidoStatus.CANCELADO,
      data: new Date('2023-10-04'),
      itens: [
        {
          id: 6,
        },
        {
          id: 7,
        },
        {
          id: 8,
        },
        {
          id: 9,
        },
      ],
    },
  ]
}
