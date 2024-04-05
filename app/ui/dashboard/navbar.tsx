"use client";

import React, { useState } from "react";
import { BellIcon, SearchIcon, MenuIcon, XIcon } from "lucide-react";
import { ChatBubbleLeftIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const lastRoot = pathParts[pathParts.length - 1];
  const capitalizedLastRoot =
    lastRoot.charAt(0).toUpperCase() + lastRoot.slice(1);

  return (
    <div className="shadow-sm bg-bgSoft rounded-lg mb-5">
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-between flex-row-reverse md:flex-row items-center py-3 md:space-x-10 transition-all duration-500 ease-in-out">
          {/* Hamburger Menu Button for small screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-white transition-colors duration-300 ease-in-out"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Dashboard text and logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a
              href="/"
              className="text-base font-medium text-white hover:text-white transition-colors duration-300 ease-in-out"
            >
              {capitalizedLastRoot}
            </a>
          </div>

          {/* Search input and links for medium and larger screens */}
          <div className="hidden md:flex items-center justify-between flex-1 md:flex-1 lg:w-0">
            <div className="w-full max-w-xs"></div>
            <div className="flex items-center ml-10 space-x-4">
              <div className="relative">
                <SearchIcon className="h-5 w-5 text-gray-500 absolute inset-y-0 left-0 pl-3" />
                <input
                  id="search"
                  name="search"
                  type="search"
                  className="block w-3/4 h-7 pl-10 pr-3 py-2 text-bg border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm transition-all duration-500 ease-in-out"
                  placeholder="Search"
                />
              </div>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors duration-300 ease-in-out"
              >
                <ChatBubbleLeftIcon className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors duration-300 ease-in-out"
              >
                <BellIcon className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors duration-300 ease-in-out"
              >
                <GlobeAltIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Mobile Menu with animation */}
          <div
            className={`absolute top-0 inset-x-0 p-2 transition-transform duration-500 ease-in-out ${
              isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            } md:hidden`}
          >
            {/* Mobile menu container with shadow and background color */}
            <div className="rounded-lg shadow-md bg-bgSoft ring-1 ring-black ring-opacity-5 overflow-hidden">
              {/* Close button and Dashboard link */}
              <div className="px-5 pt-4 flex justify-between items-center">
                <a
                  href="/"
                  className="text-base font-medium text-white hover:text-white transition-colors duration-300 ease-in-out"
                >
                  Dashboard
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-500 hover:text-white transition-colors duration-300 ease-in-out"
                >
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {/* Animated links and search input */}
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-50 transition-colors duration-300 ease-in-out"
                >
                  <ChatBubbleLeftIcon className="h-6 w-6 inline" /> Messages
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-50 transition-colors duration-300 ease-in-out"
                >
                  <BellIcon className="h-6 w-6 inline" /> Notifications
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-50 transition-colors duration-300 ease-in-out"
                >
                  <GlobeAltIcon className="h-6 w-6 inline" /> Global
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
