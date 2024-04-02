"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  MdDashboard,
  MdBuild,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  
} from "react-icons/md";

import { XIcon, MenuIcon } from "lucide-react";
const SideBar = () => {
  //

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  return (
    <div className="flex h-screen bg-bgSoft absolute max-w-full rounded-3xl">
    {/* Sidebar */}
    <div className={`w-80 space-y-6 pl-2 py-7 absolute inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out mt-10 bg-inherit z-10`}>
      {/* Sidebar content */}
      <nav>
        <ul className="py-5 w-full">
          {menuItems.map((menuItem) => (
            <li key={menuItem.title}>
              <h3 className={`${isSidebarOpen ? "block" : "hidden"} md:block text-gray-500 px-10 text-sm uppercase tracking-wide font-semibold`}>
                {menuItem.title}
              </h3>
              <ul className=" flex flex-col gap-2 md:my-5 relative left-12 w-48">
                {menuItem.list.map((item) => (
                  <li key={item.title} className="group">
                    <Link href={item.path} className="flex gap-3 w-full items-center text-white rounded-md p-2 group-hover:bg-blue-500 group-hover:text-white transition duration-200 ease-in-out transform group-hover:scale-105">
                      {item.icon}
                      <span className={`${isSidebarOpen ? "inline" : "hidden"} md:inline`}>
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    {/* Header Toggle Button */}
    <div className="flex-1 block md:hidden">
      <div className="shadow px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 focus:outline-none md:hidden">
            {isSidebarOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SideBar;
