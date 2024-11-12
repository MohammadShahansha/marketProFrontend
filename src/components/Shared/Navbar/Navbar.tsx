"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { PiDotsNine } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div>
      <div className="border-y border-[#ccc]">
        <div className="bg-base-100 flex justify-between items-center md:mx-[50px] ">
          <div className=" flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>

            <div className="relative">
              <ul className="flex space-x-4">
                <li
                  className="relative group  py-3 border-l border-r border-[#ccc] "
                  onMouseOver={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  <a
                    href="#"
                    className="cursor-pointer hover:text-blue-500 flex gap-2 items-center  px-5"
                  >
                    <PiDotsNine className="text-2xl font-extrabold" />
                    <h2 className="text-xl font-semibold">All Categories</h2>
                    {isHover ? (
                      <MdKeyboardArrowUp className="text-2xl mt-1" />
                    ) : (
                      <MdKeyboardArrowDown className="text-2xl mt-1" />
                    )}
                  </a>
                  <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-2 mt-1 rounded md:w-[230px]">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Vegetables
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        fruits
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Snaks
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Lunce
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative hidden lg:flex gap-10 text-[#999] text-xl font-semibold">
            <ul className="flex gap-10">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Shop
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-500">
                  Vendor
                </a>
              </li>
            </ul>
          </div>

          <div className="py-3  bg-[#299e60] hover:bg-[#258e56] text-white">
            <div className="flex items-center gap-2 px-3 ">
              <FiPhoneCall />
              <h2 className="text-2xl font-semibold">01- 234 567 890</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
