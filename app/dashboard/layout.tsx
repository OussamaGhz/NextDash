import React, { Children } from "react";
import Navbar from "../ui/dashboard/navbar";
import SideBar from "../ui/dashboard/sidebar";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="flex h-screen">
      <div className="flex-1  bg-bgSoft w-full">
        <SideBar />
      </div>
      <div className="flex-4 flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
