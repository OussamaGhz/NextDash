import React, { Children } from "react";
import Navbar from "../ui/dashboard/navbar";
import SideBar from "../ui/dashboard/sidebar/sidebar";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {


  

  return (
    <div className="flex">
      <div className="flex-1 h-screen ">
        <SideBar />
      </div>
      <div className="flex-4 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
