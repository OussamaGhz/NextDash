"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdDashboardCustomize
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
          icon: <MdDashboardCustomize />,
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
    <div className="flex h-screen bg-bgSoft">
      {/* Sidebar */}
      <div
        className={`w-64 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out mt-10 bg-inherit z-10`}
      >
        {/* Sidebar content */}
        <nav>
          <ul className="py-5 px-10 w-full">
            {menuItems.map((menuItem) => (
              <li key={menuItem.title}>
                <h3
                  className={`${isSidebarOpen ? "block" : "hidden"} md:block`}
                >
                  {menuItem.title}
                </h3>
                <ul className="px-4 flex flex-col gap-2 my-5">
                  {menuItem.list.map((item) => (
                    <li
                      key={item.title}
                      className="h-10 mx-4 flex items-center hover:opacity-45 rounded-lg"
                    >
                      <Link
                        href={item.path}
                        className="flex gap-3 w-full items-center"
                      >
                        {item.icon}
                        <span
                          className={`${
                            isSidebarOpen ? "inline" : "hidden"
                          } md:inline`}
                        >
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

      {/* Page content */}
      <div className="flex-1">
        {/* Header */}
        <div className="shadow px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-500 focus:outline-none md:hidden"
            >
              {isSidebarOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Main content */}
        {/* Your main content here */}
      </div>
    </div>
  );
};

export default SideBar;
