"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "@/assets/banner/banner-img1.png";
import img2 from "@/assets/banner/banner-img3.png";
import img3 from "@/assets/banner/flash-sale-img1.png";
import bgImg from "@/assets/banner/banner-bg.png";
import Image from "next/image";
import NextArrow from "@/utils/Arrows/NextArrow";
import PrevArrow from "@/utils/Arrows/PrevArrow";
import { FiShoppingCart } from "react-icons/fi";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // pass function references, not JSX
    prevArrow: <PrevArrow className=" bg-slate-500" />,
  };

  const slidesData = [
    {
      title: "Slide 1",
      description: "Daily Grocery Order and Get Express Delevery",
      imageUrl: img1,
    },
    {
      title: "Slide 2",
      description: "This is the second slide description.",
      imageUrl: img2,
    },
    {
      title: "Slide 3",
      description: "This is the third slide description.",
      imageUrl: img3,
    },
  ];

  // const buttonComponents = {
  //   name: "Explore Shop",
  //   icon: <FiShoppingCart/>,

  // }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat my-10 bg-[#d8ecc4] rounded-[22px] md:mx-7 "
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="flex items-center justify-center ">
            <div className="flex flex-col md:flex-row items-center justify-between mx-auto md:h-[500px] md:p-4 rounded-lg md:mx-20">
              {/* Text Section */}
              <div className="md:w-3/5 p-2 md:p-4">
                <h2 className="text-[30px] md:text-[60px] font-quickSans text-[#121535] font-semibold">
                  Daily Grocery Order and Get Express Delevery
                </h2>

                <button className="flex items-center gap-2 bg-bgPrimaryColor hover:bg-bgHoverColor md:px-10 py-3 mt-10 rounded-md text-white text-lg">
                  Explore Shop <FiShoppingCart />
                </button>
              </div>
              {/* Image Section */}
              <div className="flex justify-center">
                {/* <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="rounded-lg max-w-full" /> */}
                <Image
                  src={slide.imageUrl}
                  alt="slider image"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
