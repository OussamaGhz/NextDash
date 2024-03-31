import { Input } from "@/components/ui/input";
import React from "react";
import { MessageCircle, AlarmClock, WholeWord } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16  mx-5">
      <h1 className="text-xl text-center">Dashboard</h1>
      <div className="flex gap-4 items-center">
        <Input placeholder="Search" className="bg-inherit" />
        <Link href="/dashboard">
          <MessageCircle/>
        </Link>
        <Link href="/dashboard">
          <AlarmClock/>
        </Link>
        <Link href="/dashboard">
          <WholeWord/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
