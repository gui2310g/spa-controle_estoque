import type { Users } from './columns'

export function getData(): Array<Users> {
  return [
    {
      id: '728ed52f',
      nome: 'Guilherme Fontes',
      DataCriacao: new Date(2023, 9, 1),
      email: 'm@example.com',
    },
  ]
}
