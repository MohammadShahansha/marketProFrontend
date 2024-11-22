"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const ShopBanner = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div className="bg-[#fff4e4] mb-20">
      <div className="flex items-center justify-between mx-2 md:mx-10 py-8">
        <h2 className="text-black font-exo font-semibold text-2xl">Shop</h2>
        <div className="flex items-center">
          <Link
            href="/"
            className={`hover:text-textSecondaryColor flex items-center ${
              isActive("/") ? "text-textSecondaryColor" : ""
            }`}
          >
            Home
          </Link>
          <MdKeyboardArrowRight className="text-textPrimaryColor" />
          <Link
            href="/shop"
            className={`hover:text-textSecondaryColor ${
              isActive("/shop") ? "text-textSecondaryColor" : ""
            }`}
          >
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
