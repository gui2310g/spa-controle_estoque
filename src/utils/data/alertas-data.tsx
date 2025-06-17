import type { Alertas } from "@/@types/types/alertas";

export function getAlertasData(): Array<Alertas>  {
    return [
        {
            id: 1,
            produtoId: 1,
            mensagem: "Estoque do produto Roupas abaixo do minimo",
            dataCriacao: new Date(2023, 9, 3)
        },
        {
            id: 2,
            produtoId: 4,
            mensagem: "Estoque do produto Tenis zerado",
            dataCriacao: new Date(2025, 6, 16)
        }
    ]
}