"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo/logo.png";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
// import { PiDotsNine } from "react-icons/pi";

const MiddleNav = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="bg-[#f3faf2]">
      <div className=" py-8 flex justify-between items-center md:mx-[50px] ">
        <div>
          <Image src={logo} alt="logo" width={200} height={60}></Image>
        </div>
        <div className="hidden md:block">
          <div className="flex ">
            <div className="relative">
              <ul className="flex space-x-4">
                <li
                  className="relative group py-3 border rounded-l-full border-[#ccc] "
                  onMouseOver={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  <a
                    href="#"
                    className="cursor-pointer hover:text-blue-500 flex gap-2 items-center  px-5"
                  >
                    {/* <PiDotsNine className="text-2xl font-extrabold" /> */}
                    <h2 className="text-xl font-semibold">All Categories</h2>
                    {isHover ? (
                      <MdKeyboardArrowUp className="text-2xl mt-1" />
                    ) : (
                      <MdKeyboardArrowDown className="text-2xl mt-1" />
                    )}
                  </a>
                  <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-2 mt-1 rounded md:w-[200px]">
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
                  </ul>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <label className="relative flex items-center gap-2  md: w-[500px]">
                <input
                  type="text"
                  className=" bg-[#f3faf2]  py-3 border rounded-r-full md: w-[500px] border-[#ccc] outline-none text-lg pl-5"
                  placeholder="Search for a product or brand"
                />
                <div className="absolute right-2 bg-[#299e60] text-white p-2 rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6 opacity-70 flex justify-end text-white "
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="relative text-gray-500 cursor-pointer">
          <div className="bg-[#299e60] w-5 h-5 rounded-full text-center text-[13px] absolute text-white left-4 bottom-5">
            3
          </div>
          <div className="flex items-center font-semibold gap-2">
            <div className="text-2xl">
              <FiShoppingCart />
            </div>
            <h2 className="text-xl font-semibold">Cart</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;

// {
//     --main-color: #299e60;
//     --main-color-50: #e7f9ef;
//     --main-color-100: #cef2df;
//     --main-color-200: #b6eccf;
//     --main-color-300: #9ee6bf;
//     --main-color-400: #85e0af;
//     --main-color-500: #6dd9a0;
//     --main-color-600: #299e60;
//     --main-color-700: #258e56;
//     --main-color-800: #207e4c;
//     --main-color-900: #1c6d42;
// }
