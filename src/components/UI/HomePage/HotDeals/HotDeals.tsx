"use client";
import React from "react";
import { hotDealsToday } from "@/Object/Object";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { RiHome2Fill } from "react-icons/ri";
import vegeImg from "@/assets/hotDeals/hot-deals-img.png";
import bgImg from "@/assets/hotDeals/offer-shape.png";
import CountDown from "@/utils/CountDown/CountDown";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { hotDealsSettings } from "../../type";
import { FiShoppingCart } from "react-icons/fi";

const HotDeals = () => {
  const targetDate = new Date("2024-12-31T23:59:59");

  return (
    <div className="md:mx-7 mt-24">
      <div className="flex justify-between md:px-3 mb-10">
        <div className="font-semibold font-quickSans text-3xl">
          Hot Deals Today
        </div>
        <div className=" font-semibold text-textPrimaryColor cursor-pointer hover:text-textSecondaryColor mr-24">
          View All Deals
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className=" col-span-12 md:col-span-4">
          <div className="relative bg-bgPrimaryColor rounded-2xl overflow-hidden">
            <Image
              src={bgImg}
              alt="backgroiund Image"
              className="opacity-5 w-full h-[500px]"
            />
            <div className="absolute inset-0 text-white py-5">
              <div className="flex justify-center">
                <Image src={vegeImg} alt="Image" />
              </div>
              <div>
                <h2 className="text-3xl font-quickSans font-semibold text-center mt-10">
                  Fresh Vegetables
                </h2>
              </div>
              <div className="mt-5 flex justify-center mx-auto">
                <CountDown targetDate={targetDate} style={{ color: "black" }} />
              </div>
              <div className="mt-10">
                <button className="flex items-center mx-auto gap-2 bg-[#fa6400] hover:bg-[#fa6400de] px-5 py-2 mt-5 rounded-lg text-white text-lg">
                  Shop Now
                  <HiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <Slider {...hotDealsSettings} className="h-[300px]">
            {hotDealsToday.map((item, index) => (
              <div key={index} className="">
                <div className="border border-borderPrimaryColor px-2 rounded-2xl pb-3 mx-1">
                  <div className="w-[80px] mt-2 cursor-grab">
                    {item.quantity / item.sold <= 1.5 ? (
                      <p className="bg-indigo-700 text-white flex justify-center px-2 py-1 text-center rounded-tl-2xl rounded-br-2xl">
                        Best Sel
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="w-[80px] mt-2 cursor-grab">
                    {item.quantity / item.sold <= 2 &&
                    item.quantity / item.sold > 1.5 ? (
                      <p className="bg-red-700 text-white flex justify-center px-2 py-1 text-center rounded-tl-2xl rounded-br-2xl">
                        Sel 50%
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex justify-center mt-5">
                    <Image src={item.image} alt="product image" />
                  </div>
                  <div className="mt-10">
                    <h2 className="font-[600] font-quickSans text-xl ">
                      {item.title}
                    </h2>
                  </div>
                  <div className="my-2">
                    <h2 className="flex items-center gap-1 text-textPrimaryColor text-sm ">
                      <RiHome2Fill className="text-textSecondaryColor" />
                      {item.marketName}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 ">
                    <h2 className="line-through text-textPrimaryColor">
                      ${item.price + 14}
                    </h2>
                    <h2 className="font-medium">${item.price}</h2>
                  </div>
                  <div className="flex items-center gap-2 my-2">
                    <h2 className="font-medium text-textPrimaryColor">
                      {item.rating}
                    </h2>
                    {/* <FaStar
                className="text-amber-400 text-lg cursor-pointer"
                onClick={increasLike}
              />
              <h2>({like})</h2> */}
                  </div>
                  <div className="flex justify-center">
                    <button className="flex items-center  gap-2 bg-[#e8fcec] hover:bg-bgHoverColor px-8 py-2 mt-5 rounded-full text-textSecondaryColor hover:text-white text-lg">
                      Add to Cart
                      <FiShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
