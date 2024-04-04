import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const NewUserPage: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col bg-bgSoft p-6 gap-7">
      <div className="flex md:gap-24 gap-10">
        <div className="w-1/2 flex flex-col gap-3">
          <Input
            className="bg-bg h-16 border-gray-700 "
            placeholder="username"
          />
          <Input
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
          <Input className="bg-bg h-16 border-gray-700" placeholder="email" />
          <Input className="bg-bg h-16 border-gray-700" placeholder="photo" />
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
        placeholder="adress"
      />
        <Button className="bg-red-600 my-4">Create</Button>

    </div>
  );
};

export default NewUserPage;
