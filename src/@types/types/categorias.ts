import type { Produto } from "./produtos";

export type Categoria = {
    id: number;
    nome: string;
    produtos: Array<Produto>
}