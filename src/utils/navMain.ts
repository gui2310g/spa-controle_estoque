const navMain = (): Array<{
    title: string;
    url: string;
    items: Array<{ title: string; url: string; isAdminPage?: boolean }>;
  }> => [
    {
      title: 'Controle de Estoque',
      url: '#',
      items: [
        { title: 'Usuarios', url: '#', isAdminPage: true },
        { title: 'Fornecedores', url: '#' },
        { title: 'Produtos', url: '#' },
        { title: 'Categorias', url: '#' },
        { title: 'Pedidos de Compra', url: '#' },
        { title: 'Alertas', url: '#' },
        { title: 'Itens de pedido', url: '#' },
      ],
    },
  ];
  
  const useNav = () => {
    return navMain();
  };
  
export default useNav;
