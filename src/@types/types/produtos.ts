import type { Categoria } from "./categorias";

export type Produto = {
    id: number;
    nome?: string;
    descricao?: string;
    preco?: number;
    estoque_atual?: number;
    estoque_minimo?: number;
    categoria?: Categoria;
    sku?: string;
}


