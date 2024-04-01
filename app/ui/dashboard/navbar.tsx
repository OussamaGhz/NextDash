"use client"

import React, { useState } from "react";
import { BellIcon, SearchIcon, MenuIcon, XIcon } from "lucide-react";
import { ChatBubbleLeftIcon, GlobeAltIcon } from "@heroicons/react/24/solid"; // Adjust the import path based on your icon set version

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between flex-row-reverse sm:flex-row items-center py-3 md:space-x-10">
          {/* Hamburger Menu Button for small screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-white"
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
            <a href="/" className="text-base font-medium text-white hover:text-white">
              Dashboard
            </a>
          </div>

          {/* Search input and links for medium and larger screens */}
          <div className="hidden md:flex items-center justify-between flex-1 md:flex-1 lg:w-0">
            <div className="w-full max-w-xs">
              <div className="relative">
                <SearchIcon className="h-5 w-5 text-gray-500 absolute inset-y-0 left-0 pl-3" />
                <input
                  id="search"
                  name="search"
                  type="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="flex items-center ml-10 space-x-4">
              <a href="#" className="text-white hover:text-gray-200">
                <ChatBubbleLeftIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <BellIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <GlobeAltIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-0 inset-x-0 p-2 md:hidden">
              <div className="rounded-lg shadow-md bg-bgSoft ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex justify-between items-center">
                  <div>
                    <a href="/" className="text-base font-medium text-white hover:text-white">
                      Dashboard
                    </a>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-500 hover:text-white"
                  >
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="px-2 pt-2 pb-3">
                  <div className="relative mx-auto text-gray-600">
                    <input
                      id="search-mobile"
                      name="search"
                      type="search"
                      className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                      placeholder="Search"
                    />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                      <SearchIcon className="h-4 w-4 text-white" />
                    </button>
                  </div>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-50 mt-4">
                    <ChatBubbleLeftIcon className="h-6 w-6 inline" /> Messages
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-50">
                    <BellIcon className="h-6 w-6 inline" /> Notifications
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-50">
                    <GlobeAltIcon className="h-6 w-6 inline" /> Global
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
