export type Movimentacoes = {
    id: number,
    produtoId: number,
    tipo: MovimentacaoTipo
    quantidade: number
    Data: Date
}

export enum MovimentacaoTipo {
    ENTRADA = "Entrada",
    SAIDA = "Saida"
}