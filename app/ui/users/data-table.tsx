"use client";
import * as React from "react";
import { UserData } from "./columns";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  SortingState,
  ColumnFiltersState, 
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Ensure these UI components are implemented as needed

import { Button } from "@/components/ui/button"; // Ensure this component is implemented as needed
import { Input } from "@/components/ui/input";
// Assuming the UserData interface and columns are defined elsewhere and imported here

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
}

export function UsersDataTable({ columns, data }: DataTableProps<UserData>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <div className="flex items-center py-4 bg-inherit">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="w-40 text-bg  bg-white rounded-full border-none mx-10 h-1/2 placeholder:text-black"
        />
      </div>
      <div className="rounded-md overflow-hidden">
        <Table>
          <TableHeader >
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-center">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    <div className="flex justify-center">
                       {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </div>
                   
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 px-36">
        <Button
          variant="outline"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
