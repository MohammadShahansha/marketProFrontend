"use client";
import React, { useState } from "react";
import ShortData from "./ShortData";

const ResponsiveSidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex gap-5 relative">
      {/* Sidebar */}
      <div
        className={`absolute lg:relative top-0 left-0 min-h-screen bg-white  transition-transform duration-300 z-20 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-[80%] sm:w-[250px] lg:w-[400px]`}
      >
        <div className="border border-[#ccc] rounded-2xl  ">
          <div className="px-5">
            <h2 className="text-xl font-bold p-4 border-b border-[#ccc]">
              Product Categories
            </h2>
            <ul className="p-4 space-y-4 max-h-[400px] overflow-y-auto ">
              {[
                "Mobile & Accessories",
                "Laptop",
                "Electronics",
                "Smart Watch",
                "Storage",
                "Portable Devices",
                "Action Camera",
                "Smart Watch",
                "Storage",
                "Portable Devices",
                "Action Camera",
              ].map((category, index) => (
                <li
                  key={index}
                  className="hover:bg-gray-700 p-2 rounded-md cursor-pointer"
                  onClick={() => setIsSidebarOpen(false)} // Close on selection for small screens
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border border-[#ccc] rounded-2xl  my-7">
          <div className="px-5">
            <h2 className="text-xl font-bold p-4 border-b border-[#ccc]">
              Filter By Price
            </h2>

            <button className=" bg-bgPrimaryColor hover:bg-bgHoverColor text-white font-semibold text-xl py-2 px-10 rounded-xl my-5">
              filter
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden absolute top-4 left-4 z-30 bg-blue-600 text-white p-2 rounded-md shadow-lg focus:outline-none"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Main Content */}
      <div className="w-full">
        <ShortData />
        <p className="mt-4 text-gray-600">
          This is the main content area. The sidebar can be toggled on mobile
          devices.
        </p>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
