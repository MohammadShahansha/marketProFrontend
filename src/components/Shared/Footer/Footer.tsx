import React from "react";
import bgImg from "@/assets/footerImg/body-bottom-bg.png";
import store1 from "@/assets/footerImg/store-img1.png";
import atore2 from "@/assets/footerImg/store-img2.png";
import logo from "@/assets/footerImg/logo.png";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
// import { FaFacebook } from "react-icons/fa6";
// import { IoLogoTwitter } from "react-icons/io";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="relative bg-white rounded-lg overflow-hidden ">
        <Image
          src={bgImg}
          alt="backgroiund Image"
          className="h-[280px] md:h-[450px]"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row mt-[100px]  gap-5  text-white text-lg px-3 md:px-10 ">
          <div className="text-black">
            <div>
              <Image src={logo} alt="logo" className="w-[200px] h-[40px]" />
            </div>
            <div>
              <p className="text-textPrimaryColor my-5">
                We are Grocery Shop, an innovative team of food supliers.
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-bgPrimaryColor text-white text-xl w-[30px] h-[30px] flex justify-center items-center rounded-full">
                <FaLocationDot />
              </div>
              <p>789 Inner Lane, Biyes park, California, USA</p>
            </div>
            <div className="flex gap-5 items-center my-5">
              <div className="bg-bgPrimaryColor text-white text-xl w-[30px] h-[30px] flex justify-center items-center rounded-full">
                <BiSolidPhoneCall />
              </div>
              <p className="hover:text-textSecondaryColor">
                +00 123 456 789{" "}
                <span className="text-textSecondaryColor">or</span> +00 987 654
                012
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-bgPrimaryColor text-white text-xl w-[30px] h-[30px] flex justify-center items-center rounded-full">
                <MdEmail />
              </div>
              <p className="hover:text-textSecondaryColor">
                support24@marketpro.com
              </p>
            </div>
          </div>
          <div className="text-black flex flex-col">
            <h2 className="font-semibold font-quickSans text-2xl">
              Information
            </h2>
            <Link
              href="#"
              className="text-textPrimaryColor my-3 hover:text-textSecondaryColor"
            >
              Become a Vendor
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor  hover:text-textSecondaryColor"
            >
              Affiliate Program
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor my-3  hover:text-textSecondaryColor"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor  hover:text-textSecondaryColor"
            >
              Our Suppliers
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor my-3  hover:text-textSecondaryColor"
            >
              Extended Plan
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor  hover:text-textSecondaryColor"
            >
              Community
            </Link>
          </div>
          <div className="text-black flex flex-col">
            <h2 className="font-semibold font-quickSans text-2xl">
              Customer Support
            </h2>
            <Link
              href="#"
              className="text-textPrimaryColor my-3  hover:text-textSecondaryColor"
            >
              Help Center
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor hover:text-textSecondaryColor"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor my-3  hover:text-textSecondaryColor"
            >
              Report Abuse
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor hover:text-textSecondaryColor"
            >
              Submit and Dispute
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor my-3  hover:text-textSecondaryColor"
            >
              Policies & Rules
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor  hover:text-textSecondaryColor"
            >
              Online Shopping
            </Link>
          </div>
          <div className="text-black flex flex-col">
            <h2 className="font-semibold font-quickSans text-2xl">
              My Account
            </h2>
            <Link
              href="#"
              className="text-textPrimaryColor my-3  hover:text-textSecondaryColor"
            >
              My Account
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor hover:text-textSecondaryColor"
            >
              Order History
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor my-3  hover:text-textSecondaryColor"
            >
              Shoping Cart
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor hover:text-textSecondaryColor"
            >
              Compare
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor my-3  hover:text-textSecondaryColor"
            >
              Help Ticket
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor  hover:text-textSecondaryColor"
            >
              Wishlist
            </Link>
          </div>
          <div className="text-black flex flex-col">
            <h2 className="font-semibold font-quickSans text-2xl">
              Daily Groceries
            </h2>
            <Link
              href="#"
              className="text-textPrimaryColor my-3  hover:text-textSecondaryColor"
            >
              Dairy & Eggs
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor hover:text-textSecondaryColor"
            >
              Meat & Seafood
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor my-3  hover:text-textSecondaryColor"
            >
              Breakfast Food
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor hover:text-textSecondaryColor"
            >
              Household Supplies
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor my-3  hover:text-textSecondaryColor"
            >
              Bread & Bakery
            </Link>
            <Link
              href="#"
              className="text-textPrimaryColor  hover:text-textSecondaryColor"
            >
              Pantry Staples
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
