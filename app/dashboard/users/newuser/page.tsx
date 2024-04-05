import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const NewUserPage: React.FC = async () => {
  const createUser = async (formData: FormData) => {
    "use server";
    const username = formData.get("username") as string;
    const hashedPwd = formData.get("password") as string;
    const isAdmin = formData.get("isAdmin") as string;
    const email = formData.get("email") as string;
    const isActive = formData.get("isActive") as string;
    const role = isAdmin === "yes" ? "admin" : "user";
    const active = isActive === "yes" ? true : false;
    console.log(username, hashedPwd, email, role, active);

     await prisma.user.create({
       data: {
         email,
         hashedPwd,
         username,
         role,
         active,
       },
     });
  };

  return (
    <form
      action={createUser}
      className="container mx-auto flex flex-col bg-bgSoft p-6 gap-7"
    >
      <div className="flex md:gap-24 gap-10">
        <div className="w-1/2 flex flex-col gap-3">
          <Input
            name="username"
            className="bg-bg h-16 border-gray-700 "
            placeholder="username"
          />
          <Input
          name="password"
            className="bg-bg h-16 border-gray-700"
            placeholder="password"
          />
          <div>
            <Label>Is Admin?</Label>
            <select className="flex h-16 w-full bg-bg rounded-md border-gray-700 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          <Input className="bg-bg h-16 border-gray-700" placeholder="email" name="email"/>
          <Input className="bg-bg h-16 border-gray-700" placeholder="photo" name="photo"/>
          <div>
            <Label>Is Active?</Label>
            <select className="flex h-16 w-full bg-bg rounded-md border-gray-700 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </div>
      <Input
        className="bg-bg h-64 w-full border-gray-700 placeholder:text-start"
        name="adress"
        type="password"
        placeholder="adress"
      />
      <Button className="bg-red-600 my-4">Create</Button>
    </form>
  );
};

export default NewUserPage;
