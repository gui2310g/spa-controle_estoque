export type Movimentações = {
    id: number,
    produtoId: number,
    tipo: MovimentaçaoTipo
    quantidade: 10
    Data: Date
}

export enum MovimentaçaoTipo {
    ENTRADA = "Entrada",
    SAIDA = "Saida"
}