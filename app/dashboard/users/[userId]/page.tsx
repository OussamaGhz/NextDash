import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UserPage = ({
  params,
}: {
  params: {
    userId: string;
  };
}) => {
  return (
    <div className="flex bg-bg h-full w-full justify-between flex-col md:flex-row gap-5">
      <Card className=" w-1/4 h-1/2 rounded-lg p-2 bg-red-600">
        <AspectRatio ratio={3/3}/>
      </Card>
      <form className="bg-bgSoft w-3/4  rounded-lg flex flex-col gap-6 p-5">
        <div>
          <Label>Usename</Label>
          <Input
            type="text"
            placeholder="hello"
            className="bg-bg border-gray-700"
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="hello@gmail.com"
            className="bg-bg border-gray-700"
          />
        </div>
        <div>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="password"
            className="bg-bg border-gray-700"
          />
        </div>
        <div>
          <Label>Adress</Label>
          <Input type="text" className="bg-bg border-gray-700 h-20" />
        </div>
        <div>
          <Label>Is Admin?</Label>
          <div className="bg-bg border-gray-700 h-10">
            <select className="flex h-10 w-full bg-bg rounded-md border-gray-700 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div>
          <Label>Is Active?</Label>
          <div className="bg-bg border-gray-700 h-10 ">
            <select className="flex h-10 w-full bg-bg rounded-md border-gray-700 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <Button className="bg-red-600 my-4">Update</Button>
      </form>
    </div>
  );
};
export default UserPage;
