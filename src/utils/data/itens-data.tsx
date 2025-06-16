import type { Itens } from '@/@types/types/itens'

export function getItensData(): Array<Itens> {
  return [
    {
      id: 1,
      pedido: { id: 1 },
      produto: { id: 2 },
      quantidade: 10,
      preco: 350,
      usuario: { nome: "Usuario A"},
    },
    {
        id: 2,
        pedido: { id: 5 },
        produto: { id: 2 },
        quantidade: 5,
        preco: 2599.43,
        usuario: { nome: "Teste"},
      },
  ]
}
