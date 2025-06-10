import type { Users } from '@/@types/types/Users'

export function getData(): Array<Users> {
  return [
    {
      id: '728ed52f',
      nome: 'Guilherme Fontes',
      DataCriacao: new Date(2023, 9, 1),
      email: 'm@example.com',
    },
    {
      id: '728ed52g',
      nome: 'João Silva',
      DataCriacao: new Date(2023, 9, 2),
      email: 'joao@hootmail.com',
    },
    {
      id: '728ed52h',
      nome: 'Maria Oliveira',
      DataCriacao: new Date(2023, 9, 3),
      email: 'amora@outlook.com',
    },
  ]
}
