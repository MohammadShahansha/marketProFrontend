import React from "react";
import bgImg from "@/assets/newsLatter/newsletter-bg.png";
import productImg from "@/assets/newsLatter/newsletter-img.png";
import { HiOutlineArrowRight } from "react-icons/hi2";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="mx-2 md:mx-7">
      <div className="relative bg-[#181434] rounded-lg overflow-hidden ">
        <Image
          src={bgImg}
          alt="backgroiund Image"
          className="opacity-5 h-[280px] md:h-[450px]"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row items-center md:justify-between gap-5  text-white px-3 md:px-10 ">
          <div className="w-full mt-5 mx-auto">
            <h2 className=" text-3xl md:text-7xl font-semibold">
              Dont Miss Out on Grocery Deals
            </h2>
            <p className="mt-5 text-xl md:text-3xl font-medium">
              SIGN UP FOR THE UPDATE NEWSLETTER
            </p>
            <button className="flex items-center justify-start gap-2 bg-[#fa6400] hover:bg-[#fa6400de] px-5 py-2 mt-10 rounded-full text-white text-lg">
              Sign Up
              <HiOutlineArrowRight />
            </button>
          </div>
          <div className="w-full hidden md:block">
            <Image src={productImg} alt="Produxt Imag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
