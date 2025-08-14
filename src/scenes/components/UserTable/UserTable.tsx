import React from "react";
import type { User } from "../../Users/users.types";
import type { UserTableProps } from "./userTable.types";
import { DataTable } from "modules";

export const UserTable = (props: UserTableProps) => {
  const { users, onRowClick, loading } = props;
  const columns = [
    { field: "name", header: "Name", sortable: true },
    { field: "username", header: "Username", sortable: true },
    { field: "email", header: "Email", sortable: true },
    { field: "phone", header: "Phone", sortable: true },
    {
      field: "company.name",
      header: "Company",
      sortable: true,
      body: (row: User) => row.company?.name,
    },
    { field: "website", header: "Website" },
  ];

  return (
    <DataTable
      items={users}
      columns={columns}
      loading={loading}
      rows={10}
      dataKey="id"
      onRowClick={(row: User) => onRowClick?.(row)}
    />
  );
};
