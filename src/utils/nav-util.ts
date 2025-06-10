import type { NavSection } from '@/@types/types/nav'

const navMain = (): Array<NavSection> => [
  {
    title: 'Controle de Estoque',
    url: '#',
    items: [
      { title: 'Usuarios', adminUrl: 'admin/usuarios', isAdminPage: true },
      {
        title: 'Fornecedores',
        adminUrl: 'admin/fornecedores',
        userUrl: 'user/fornecedores',
      },
      {
        title: 'Produtos',
        adminUrl: 'admin/produtos',
        userUrl: 'user/produtos',
      },
      {
        title: 'Categorias',
        adminUrl: 'admin/categorias',
        userUrl: 'user/categorias',
      },
      {
        title: 'Pedidos de Compra',
        adminUrl: 'admin/pedidos',
        userUrl: 'user/pedidos',
      },
      { title: 'Alertas', adminUrl: 'admin/alertas' },
      {
        title: 'Itens de pedido',
        adminUrl: 'admin/itens',
        userUrl: 'user/itens',
      },
    ],
  },
];

export default navMain;
