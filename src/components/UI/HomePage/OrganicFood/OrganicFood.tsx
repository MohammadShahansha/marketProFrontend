"use client";
import { organicProduct } from "@/Object/Object";
import Image from "next/image";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RiHome2Fill } from "react-icons/ri";
import Slider from "react-slick";
import { organicSettings } from "../../type";
import { FaStar } from "react-icons/fa";

const OrganicFood = () => {
  return (
    <div className="mt-24 md:mx-7">
      <div className="flex justify-between md:px-3 mb-10">
        <div className="font-semibold font-quickSans text-3xl">
          Organic Food
        </div>
        <div className=" font-semibold text-textPrimaryColor cursor-pointer hover:text-textSecondaryColor mr-24">
          All Categories
        </div>
      </div>
      <Slider {...organicSettings}>
        {organicProduct.map((item, index) => (
          <div key={index}>
            <div className="border border-borderPrimaryColor hover:border-bgPrimaryColor rounded-2xl pb-3 mx-2 px-2">
              <div className="flex justify-center mt-5">
                <Image src={item.image} alt="product image" />
              </div>

              <div className="flex items-center gap-2 my-3">
                <h2 className="font-medium text-textPrimaryColor">
                  {item.rating}
                </h2>
                <FaStar
                  className="text-amber-400 text-lg cursor-pointer"
                  //   onClick={increasLike}
                />
                {/* <h2>({like})</h2> */}
                <h2>40k</h2>
              </div>
              <div>
                <h2 className="font-medium font-quickSans text-xl ">
                  {item.title}
                </h2>
              </div>
              <div className="my-2">
                <h2 className="flex items-center gap-1 text-textPrimaryColor text-sm ">
                  <RiHome2Fill className="text-textSecondaryColor" />
                  {item.marketName}
                </h2>
              </div>
              <div className="flex justify-between items-center">
                <div className=" ">
                  <h2 className="line-through text-textPrimaryColor">
                    ${item.price + 14}
                  </h2>
                  <h2 className="font-medium">${item.price}</h2>
                </div>
                <div className="flex justify-end">
                  <button className="flex items-center gap-2 bg-[#e8fcec] hover:bg-bgHoverColor px-5 py-2 mt-5 rounded-full text-textSecondaryColor hover:text-white text-lg font-semibold">
                    Add
                    <FiShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OrganicFood;
