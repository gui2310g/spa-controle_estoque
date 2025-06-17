import type { NavSection } from '@/@types/types/nav'

export const AdminNav = (): Array<
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
      { title: 'Usuários', path: 'usuarios' },
      { title: 'Fornecedores', path: 'fornecedores' },
      { title: 'Produtos', path: 'produtos' },
      { title: 'Categorias', path: 'categorias' },
      { title: 'Pedidos de Compra', path: 'pedidos' },
      { title: 'Alertas', path: 'alertas' },
      { title: 'Itens de pedido', path: 'itens' },
    ],
  },
]
