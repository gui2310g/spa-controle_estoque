import type { Movimentacoes } from "@/@types/types/movimentacoes";
import { MovimentacaoTipo } from "@/@types/types/movimentacoes";

export function getMovimentacoesData(): Array<Movimentacoes> {
    return [
        {
            id: 1,
            produtoId: 1,
            tipo: MovimentacaoTipo.ENTRADA,
            quantidade: 10,
            Data: new Date('2024-03-12') 
        },
        {
            id: 2,
            produtoId: 1,
            tipo: MovimentacaoTipo.SAIDA,
            quantidade: 5,
            Data: new Date('2024-01-20') 
        },
        {
            id: 3,
            produtoId: 1,
            tipo: MovimentacaoTipo.SAIDA,
            quantidade: 25,
            Data: new Date('2024-12-12') 
        },
    ]
}