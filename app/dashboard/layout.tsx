import React, { Children } from "react";
import Navbar from "../ui/dashboard/navbar";
import SideBar from "../ui/dashboard/sidebar";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      
      <div>
        <SideBar />
        {children}
      </div>
    </>
  );
};

export default Layout;
