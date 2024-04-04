"use client";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { ArrowUpDown, MoreHorizontal, View, Delete } from "lucide-react";
import { Button } from "@/components/ui/button";


export type ProductData = {
  title: string;
  descreption: string;
  price: number;
  createdAt: string;
  stock: number;
};





export const columns: ColumnDef<ProductData>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "descreption",
    header: "Descreption",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    //format data dd/mm/yy
    cell: (info) => {
      const date = new Date(info.getValue() as string);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      return <div>{formattedDate}</div>;
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: (info) => (info.getValue())
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: (info) => {
      return (
        <div
          className={`px-2 py-1 rounded-full font-bold flex items-center justify-center ${
            info.getValue() < 10
              ? "bg-red-500 text-white"
              : info.getValue() < 20
              ? "bg-yellow-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {info.getValue()}
        </div>
      );
    },
  },

  {
    accessorKey: "role",
    header: "Role",
    cell: (info) => {
      
      return (
        <div
          className={`px-2 py-1 rounded-full font-bold flex items-center justify-center ${
            info.getValue() === "admin"
              ? "bg-green-500 text-white"
              : info.getValue() === "moderator"
              ? "bg-blue-500 text-white"
              : "bg-gray-500 text-white" 
          }`}
        >
          {info.getValue() && typeof info.getValue() === "string"
            ? (info.getValue().toString().charAt(0).toUpperCase() + info.getValue().toString().slice(1))
            : ""}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex space-x-2  ">
        {/* View Button with Icon */}
        <Button
          onClick={() => viewUser(row.original)}
          className="bg-inherit px-4 py-3" // Example: Add custom classes for further styling if needed
        >
          <View className="mr-2" /> View
        </Button>

        {/* Delete Button with Icon */}
        <Button
          onClick={() => deleteUser(row.original)}
          variant="destructive"
          className="bg-inherit px-4 py-3" // Example: Add custom classes for further styling if needed
        >
          <Delete className="mr-2" /> Delete
        </Button>
      </div>
    ),
  },
];

// Dummy functions for view and delete actions
function viewUser(user: ProductData) {
  console.log("Viewing user:", user);
  // Implement view logic here
}

function deleteUser(user: ProductData) {
  console.log("Deleting user:", user);
  // Implement delete logic here
}
