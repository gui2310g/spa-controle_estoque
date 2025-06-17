import type { NavSection } from '@/@types/types/nav'

export const navMain = (
  isAdmin: boolean,
): Array<
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
      ...(isAdmin ? [{ title: 'Usuários', path: 'usuarios' }] : []),
      { title: 'Fornecedores', path: 'fornecedores' },
      { title: 'Produtos', path: 'produtos' },
      ...(isAdmin ? [{ title: 'Categorias', path: 'categorias' }] : []),
      { title: 'Pedidos de Compra', path: 'pedidos' },
      ...(isAdmin ? [{ title: 'Alertas', path: 'alertas' }] : []),
      ...(!isAdmin ? [{ title: 'Movimentações', path: 'movimentações' }] : []),
      { title: 'Itens de pedido', path: 'itens' },
    ],
  },
]
