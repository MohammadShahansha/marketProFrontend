"use client";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiHome } from "react-icons/ci";

const CommonBanner = ({ pageName }: { pageName: string }) => {
  return (
    <div className="bg-[#fff4e4] mb-20">
      <div className="flex items-center justify-between mx-2 md:mx-10 py-5">
        <h2 className="text-black font-exo font-semibold text-2xl">
          {pageName}
        </h2>
        <div className="flex items-center">
          <Link
            href="/"
            className="hover:text-textSecondaryColor flex items-center gap-1 text-black"
          >
            <CiHome />
            Home
          </Link>
          <MdKeyboardArrowRight className="text-textPrimaryColor" />
          <p className="text-textSecondaryColor">{pageName}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
