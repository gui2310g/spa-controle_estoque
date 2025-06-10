'use client'

import * as React from 'react'

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { ReusableDialog } from '../ui/dialog'
import { DataTablePagination } from './data-table-pagination'
import { DataTableFilter } from './data-table-filter'

import type {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from '@tanstack/react-table'

import type { DataTableProps } from '@/@types/interfaces/data-table-props'
import { Button } from '@/components/ui/button'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function DataTable<TData, TValue>({
  columns,
  data,
  filterColumn,
  filterPlaceholder = 'Filtrar...',
  dialogTitle,
  dialogDescription,
  dialogContent,
  showAddButton = true,
  onDialogConfirm,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: { sorting, columnFilters, columnVisibility },
    filterFns: {
      fuzzy: (row, columnId, filterValue) => {
        const value = row.getValue(columnId)
        return String(value)
          .toLowerCase()
          .includes(String(filterValue).toLowerCase())
      },
    },
  })

  return (
    <div className="rounded-md max-w-7xl w-full">
      <div className="flex items-center justify-between py-4">
        {table.getColumn(filterColumn) && (
          <DataTableFilter
            column={table.getColumn(filterColumn)!}
            placeholder={filterPlaceholder}
          />
        )}

        {showAddButton && (
          <ReusableDialog
            trigger={<Button variant="outline">Adicionar</Button>}
            title={dialogTitle ?? 'Default Title'}
            description={dialogDescription}
            onConfirm={onDialogConfirm}
          >
            {dialogContent}
          </ReusableDialog>
        )}
      </div>

      <div className="border overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Sem resultados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table} />
    </div>
  )
}
