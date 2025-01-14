import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const UpperNav = () => {
  return (
    <div className="bg-[#299e60]">
      <div className=" w-full flex justify-between px-1 md:px-10 py-1 text-white">
        <div>
          <Link href="#">About Us</Link>
        </div>
        <div>
          <Link
            href="/account"
            className="flex gap-1 items-center hover:underline"
          >
            <FaRegUserCircle />
            <p>My Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;
