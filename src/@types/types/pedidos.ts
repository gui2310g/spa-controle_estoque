import type { Fornecedor } from "./fornecedor";
import type { Itens } from "./itens";

export type Pedidos = {
    id: number;
    fornecedores?: Fornecedor;
    status?: pedidoStatus;
    data?: Date;
    itens?: Array<Itens>
}

export enum pedidoStatus {
    PENDENTE = 'Pendente',
    CONCLUIDO = 'Concluído',
    CANCELADO = 'Cancelado'
}