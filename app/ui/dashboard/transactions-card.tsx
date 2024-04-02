import { Payment, columns } from "@/app/payment/columns";
import { DataTable } from "@/app/payment/data-table";

export default async function DemoPage() {
  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      date: "2022-01-01",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
      date: "2022-01-02",
    },
    {
      id: "e123f45a",
      amount: 150,
      status: "pending",
      email: "user123@provider.com",
      date: "2022-01-03",
    },
    {
      id: "b234a67b",
      amount: 75,
      status: "pending",
      email: "hello@domain.com",
      date: "2022-01-04",
    },
    {
      id: "c345b78c",
      amount: 200,
      status: "processing",
      email: "contact@sample.net",
      date: "2022-01-05",
    },
    {
      id: "d456c89d",
      amount: 50,
      status: "processing",
      email: "info@website.org",
      date: "2022-01-06",
    },
    {
      id: "f567d90e",
      amount: 175,
      status: "pending",
      email: "admin@site.com",
      date: "2022-01-07",
    },
    {
      id: "g678e01f",
      amount: 90,
      status: "processing",
      email: "support@help.com",
      date: "2022-01-08",
    },
    // Add more entries as needed
  ];

  return (
    <div className="container mx-auto overflow--scroll bg-bgSoft rounded-lg p-2">
      <DataTable columns={columns} data={data}/>
    </div>
  );
}
