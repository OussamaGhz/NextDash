import { ColumnDef } from '@tanstack/react-table';
import React from 'react';

export type UserData = {
    email: string;
    username: string;
    createdAt: string; // Assuming you want to store dates as Date objects
    role: string;
    // Actions are not included here as they don't represent data coming from your data source but rather functionalities you'll implement in the UI
  }
  

export const columns: ColumnDef<UserData>[] = [
  {
    accessorKey: 'email',
    header: 'Email',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'username',
    header: 'Username',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: info => info.getValue() // Customize date format as needed
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: info => info.getValue(),
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <div>
        {/* View Button */}
        <button onClick={() => viewUser(row.original)}>View</button>
        {/* Delete Button */}
        <button onClick={() => deleteUser(row.original)}>Delete</button>
      </div>
    ),
  },
];

// Dummy functions for view and delete actions
function viewUser(user: UserData) {
  console.log('Viewing user:', user);
  // Implement view logic here
}

function deleteUser(user: UserData) {
  console.log('Deleting user:', user);
  // Implement delete logic here
}
