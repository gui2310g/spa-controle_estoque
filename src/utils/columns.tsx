"use client"

import { MoreHorizontal } from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Users = {
  id: string
  nome: string
  DataCriacao: Date
  email: string
}

export const columns: Array<ColumnDef<Users>> = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "DataCriacao",
    header: "Data de Criação",
    cell: ({ row }) => {
      const data = row.original.DataCriacao
      return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
      }).format(data)
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Atualizar</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Deletar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]