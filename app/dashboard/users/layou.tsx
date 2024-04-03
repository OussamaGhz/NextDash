import React, { Children } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <div className="flex-4 flex flex-col mx-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
