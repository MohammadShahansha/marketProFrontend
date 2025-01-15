"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "@/assets/featureImg/feature-img1.png";
import img2 from "@/assets/featureImg/feature-img2.png";
import img3 from "@/assets/featureImg/feature-img3.png";
import img4 from "@/assets/featureImg/feature-img4.png";
import img5 from "@/assets/featureImg/feature-img5.png";
import img6 from "@/assets/featureImg/feature-img6.png";
import img7 from "@/assets/featureImg/feature-img7.png";
import img8 from "@/assets/featureImg/feature-img8.png";
import img9 from "@/assets/featureImg/feature-img9.png";
import img10 from "@/assets/featureImg/feature-img10.png";
import Image from "next/image";
import NextArrow from "@/utils/Arrows/NextArrow";
import PrevArrow from "@/utils/Arrows/PrevArrow";

const ProductImgSlider = () => {
  const imgList = [
    { image: img1, bgColor: "#fff4e4" },
    { image: img2, bgColor: "#ffe8e8" },
    { image: img3, bgColor: "#e0dcdc" },
    { image: img4, bgColor: "#f8fce4" },
    { image: img5, bgColor: "#e8fcec" },
    { image: img6, bgColor: "#e0dcdc" },
    { image: img7, bgColor: "#f8ecf4" },
    { image: img8, bgColor: "#fff4e4" },
    { image: img9, bgColor: "#f0fcf4" },
    { image: img10, bgColor: "#e0dcdc" },
  ];

  const styleOfSlide = {
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // dots: true, // Optional: Adds navigation dots
    infinite: true,
    nextArrow: <NextArrow />, // pass function references, not JSX
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-[-30px] md:mx-7">
      <Slider {...styleOfSlide} className="">
        {imgList.map((item, index) => {
          return (
            <div key={index} className="">
              <div
                className="rounded-full h-[150px] w-[150px]  flex justify-center items-center cursor-pointer"
                style={{
                  backgroundColor: `${item?.bgColor}`,
                }}
              >
                <Image src={item.image} alt="feature image"></Image>
              </div>
              <div className="h-[150px] w-[150px] mt-5">
                <div className="flex justify-center text-xl hover:text-textSecondaryColor font-semibold font-quickSans cursor-pointer">
                  <h2>Fish & meats</h2>
                </div>
                <div className="flex justify-center text-[#999] mt-2">
                  <p>125+ Products</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductImgSlider;
