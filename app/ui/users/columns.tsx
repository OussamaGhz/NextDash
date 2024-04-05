"use client";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { ArrowUpDown, View, Delete } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export type UserData = {
  email: string;
  username: string;
  createdAt: string; 
  role: string;
};

export const columns: ColumnDef<UserData>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    //format data dd/mm/yy
    cell: (info) => {
      const date = new Date(info.getValue() as string);
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      return <div>{formattedDate}</div>;
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
            ? (info.getValue() as string).charAt(0).toUpperCase() +
              (info.getValue() as string).slice(1)
            : ""}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const route = useRouter();

      return (
        <div className="flex space-x-2  ">
          {/* View Button with Icon */}
          <Button
            onClick={() => {
              console.log("Viewing user:", row.original);
              
              route.push(`/dashboard/users/${row.original.username}`);
            }}
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
      );
    },
  },
];


function deleteUser(user: UserData) {
  console.log("Deleting user:", user);
  // Implement delete logic here
}
