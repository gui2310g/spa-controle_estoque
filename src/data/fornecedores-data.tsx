import type { Fornecedor } from "@/@types/types/fornecedor";
import { FornecedorStatus } from "@/@types/types/fornecedor";

export function getFornecedoresData(): Array<Fornecedor> {
    return [
        {
            id: 1,
            nome: 'Fornecedor A',
            status: FornecedorStatus.FISICA,
            rua: 'Rua A',
            numero: '123',
            complemento: 'Apto 1',
            bairro: 'Bairro A',
            cidade: 'Cidade A',
            estado: 'Estado A',
            cep: '12345-678'

        },
        {
            id: 2,
            nome: 'Fornecedor B',
            status: FornecedorStatus.JURIDICA,
            rua: 'Rua B',
            numero: '456',
            complemento: 'Sala 2',
            bairro: 'Bairro B',
            cidade: 'Cidade B',
            estado: 'Estado B',
            cep: '23456-789'
        },
        {
            id: 3,
            nome: 'Fornecedor C',
            status: FornecedorStatus.FISICA,
            rua: 'Rua C',
            numero: '789',
            complemento: 'Casa 3',
            bairro: 'Bairro C',
            cidade: 'Cidade C',
            estado: 'Estado C',
            cep: '34567-890'
        }
    ]
}