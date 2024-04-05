import Container from "@/app/ui/container";
import { UserData, columns } from "@/app/ui/users/columns";
import { UsersDataTable } from "@/app/ui/users/data-table";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function DemoPage() {

  // const users: UserData[] = await prisma.user.findMany();
  // console.log(users);
  
  const userData: UserData[] = [
    {
      email: "tnguyen@mahoney.org",
      username: "mark86",
      createdAt: "2016-07-30T06:26:23",
      role: "moderator",
    },
    {
      email: "scruz@blackwell-wilcox.com",
      username: "jennifersantos",
      createdAt: "1970-03-09T12:53:25",
      role: "moderator",
    },
    {
      email: "mcintyrestacy@yahoo.com",
      username: "davidrussell",
      createdAt: "2011-04-12T13:56:59",
      role: "user",
    },
    {
      email: "brett15@gmail.com",
      username: "kelseygardner",
      createdAt: "2011-09-02T13:22:54",
      role: "moderator",
    },
    {
      email: "mariawright@collins.com",
      username: "ygarcia",
      createdAt: "1983-06-03T13:53:30",
      role: "moderator",
    },
    {
      email: "uhayes@hotmail.com",
      username: "bishopelijah",
      createdAt: "1980-03-05T05:49:08",
      role: "moderator",
    },
    {
      email: "michelletorres@yahoo.com",
      username: "johnstonpatricia",
      createdAt: "2005-09-15T16:40:29",
      role: "admin",
    },
    {
      email: "stephengriffith@richardson.org",
      username: "thomaspoole",
      createdAt: "1979-05-23T19:38:01",
      role: "user",
    },
    {
      email: "morganpalmer@gmail.com",
      username: "williamsmichael",
      createdAt: "1994-11-17T18:40:46",
      role: "moderator",
    },
    {
      email: "pclements@gmail.com",
      username: "carlosgallagher",
      createdAt: "2019-08-20T14:21:16",
      role: "admin",
    },
  ];

  return (
    <Container>
      <div className="w-full">
        <UsersDataTable columns={columns} data={userData} />
      </div>
    </Container>
  );
}
