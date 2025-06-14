export type Fornecedor = {
    id: number,
    nome: string,
    status?: FornecedorStatus,
    rua?: string,
    numero?: string,
    complemento?: string,
    bairro?: string,
    cidade?: string,
    estado?: string,
    cep?: string,
}

export enum FornecedorStatus {
    FISICA = 'Física',
    JURIDICA = 'Jurídica'
}