import { Payment, columns } from "@/app/payment/columns";
import { DataTable } from "@/app/payment/data-table";

export default async function DemoPage() {
  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    {
      id: "e123f45a",
      amount: 150,
      status: "pending",
      email: "user123@provider.com",
    },
    {
      id: "b234a67b",
      amount: 75,
      status: "pending",
      email: "hello@domain.com",
    },
    {
      id: "c345b78c",
      amount: 200,
      status: "processing",
      email: "contact@sample.net",
    },
    {
      id: "d456c89d",
      amount: 50,
      status: "processing",
      email: "info@website.org",
    },
    {
      id: "f567d90e",
      amount: 175,
      status: "pending",
      email: "admin@site.com",
    },
    {
      id: "g678e01f",
      amount: 90,
      status: "processing",
      email: "support@help.com",
    },
    // Add more entries as needed
  ];

  return (
    <div className="container mx-auto overflow--scroll bg-bgSoft">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
