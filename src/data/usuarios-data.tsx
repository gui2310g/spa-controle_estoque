import type { Users } from '@/@types/types/usuario'

export function getUsuariosData(): Array<Users> {
  return [
    {
      id: 1,
      nome: 'Guilherme Fontes',
      DataCriacao: new Date(2023, 9, 1),
      email: 'm@example.com',
    },
    {
      id: 2,
      nome: 'João Silva',
      DataCriacao: new Date(2023, 9, 2),
      email: 'joao@hootmail.com',
    },
    {
      id: 3,
      nome: 'Maria Oliveira',
      DataCriacao: new Date(2023, 9, 3),
      email: 'amora@outlook.com',
    },
  ]
}
