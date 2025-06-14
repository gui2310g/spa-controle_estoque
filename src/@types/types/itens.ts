import type { Pedidos } from "./pedidos";
import type { Produto } from "./produtos";
import type { Users } from "./usuario";

export type Itens = {
    id:  number;
    pedido?: Pedidos
    produto?: Produto
    quantidade?: number;
    preco?: number;
    usuario?: Users
}