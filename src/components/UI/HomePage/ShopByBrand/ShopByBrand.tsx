"use client";
import React from "react";
import brandImg1 from "@/assets/brandImg/brand-img1.png";
import brandImg2 from "@/assets/brandImg/brand-img2.png";
import brandImg3 from "@/assets/brandImg/brand-img3.png";
import brandImg4 from "@/assets/brandImg/brand-img4.png";
import brandImg5 from "@/assets/brandImg/brand-img5.png";
import brandImg6 from "@/assets/brandImg/brand-img6.png";
import brandImg7 from "@/assets/brandImg/brand-img7.png";
import { brandSettings } from "../../type";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ShopByBrand = () => {
  const imageList = [
    brandImg1,
    brandImg2,
    brandImg3,
    brandImg4,
    brandImg5,
    brandImg6,
    brandImg7,
    brandImg4,
    brandImg5,
  ];
  return (
    <div className="mt-24 md:mx-4 bg-[#f3faf2] py-7 rounded-2xl">
      <div className="flex justify-between md:px-3 mb-10">
        <div className="font-semibold font-quickSans text-3xl">
          Shop by Brands
        </div>
        <div className=" font-semibold text-textPrimaryColor cursor-pointer hover:text-textSecondaryColor mr-24">
          vew all deals
        </div>
      </div>
      <Slider {...brandSettings}>
        {imageList.map((item, index) => (
          <div key={index} className="px-3">
            <Image src={item} alt="brand image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShopByBrand;
