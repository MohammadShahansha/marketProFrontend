import React from "react";
import bgImg from "@/assets/footerImg/body-bottom-bg.png";
import store1 from "@/assets/footerImg/store-img1.png";
import store2 from "@/assets/footerImg/store-img2.png";
import logo from "@/assets/footerImg/logo.png";
import paymentImg from "@/assets/footerImg/payment-method.png";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" ">
      <div className="mx-2 md:mx-7">
        <div className="relative bg-white rounded-lg overflow-hidden">
          <Image
            src={bgImg}
            alt="backgroiund Image"
            className="h-[1330px] md:h-[700px]"
          />
          <div className="absolute inset-0 flex flex-col md:flex-row mt-[100px]  gap-8  text-white text-lg   ">
            <div className="text-black">
              <div>
                <Image src={logo} alt="logo" className="w-[200px] h-[40px]" />
              </div>
              <div>
                <p className="text-textPrimaryColor my-5 text-[16px]">
                  We are Grocery Shop, an innovative team of food supliers.
                </p>
              </div>
              <div className="flex gap-10 items-center">
                <div className="bg-bgPrimaryColor text-white text-xl w-[30px] h-[30px] flex justify-center items-center rounded-full">
                  <FaLocationDot />
                </div>
                <p>789 Inner Lane, Biyes park, California, USA</p>
              </div>
              <div className="flex gap-10 items-center my-5">
                <div className="bg-bgPrimaryColor text-white text-xl w-[30px] h-[30px] flex justify-center items-center rounded-full">
                  <BiSolidPhoneCall />
                </div>
                <p className="hover:text-textSecondaryColor">
                  +00 123 456 789{" "}
                  <span className="text-textSecondaryColor">or</span> +00 987
                  654 012
                </p>
              </div>
              <div className="flex gap-10 items-center">
                <div className="bg-bgPrimaryColor text-white text-xl w-[30px] h-[30px] flex justify-center items-center rounded-full">
                  <MdEmail />
                </div>
                <p className="hover:text-textSecondaryColor">
                  support24@marketpro.com
                </p>
              </div>
            </div>
            <div className="flex gap-10">
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
            </div>
            <div className="flex gap-10">
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
          <div className="absolute top-[1080px] md:top-[400px]">
            <h2 className="text-2xl font-quickSans text-black font-semibold">
              Shop on The Go
            </h2>
            <p className="my-5 text-textPrimaryColor text-[16px]">
              PetSmart App is available. Get it now
            </p>
            <div className="flex items-center gap-5">
              <Image src={store1} alt="stor image"></Image>
              <Image src={store2} alt="stor image"></Image>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <div className="bg-[#d0f4dc] hover:bg-bgPrimaryColor text-textSecondaryColor hover:text-white w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer">
                <Link href="#">
                  <FaFacebook />
                </Link>
              </div>
              <div className="bg-[#d0f4dc] hover:bg-bgPrimaryColor text-textSecondaryColor hover:text-white w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer">
                <Link href="#">
                  <IoLogoTwitter />
                </Link>
              </div>
              <div className="bg-[#d0f4dc] hover:bg-bgPrimaryColor text-textSecondaryColor hover:text-white w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer">
                <Link href="#">
                  <FaInstagramSquare />
                </Link>
              </div>
              <div className="bg-[#d0f4dc] hover:bg-bgPrimaryColor text-textSecondaryColor hover:text-white w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer">
                <Link href="#">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#f8fcf4]">
        <div className="flex flex-col md:flex-row items-center justify-between  py-8 mx-2 md:mx-7 ">
          <h2 className="text-textPrimaryColor text-center mb-5 md:mb-0">
            Marketpro eCommerce © 2024. All Rights Reserved
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <p className="text-black">We Are Accepting</p>
            <Image src={paymentImg} alt="Payment image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
