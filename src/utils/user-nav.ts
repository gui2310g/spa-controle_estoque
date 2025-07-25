import type { NavSection } from '@/@types/types/nav'

export const navMain = (): Array<
  Omit<NavSection, 'items'> & {
    items: Array<{
      title: string
      path: string 
    }>
  }
> => [
  {
    title: 'Controle de Estoque',
    url: '#',
    items: [
      { title: 'Fornecedores', path: 'fornecedores' },
      { title: 'Produtos', path: 'produtos' },
      { title: 'Pedidos de Compra', path: 'pedidos' },
      { title: 'Movimentações', path: 'movimentacoes' },
      { title: 'Itens de pedido', path: 'itens' },
    ],
  },
]
