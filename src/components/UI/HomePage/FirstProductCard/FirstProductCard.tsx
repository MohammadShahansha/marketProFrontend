"use client";
import { vegitableProduct } from "@/Object/Object";
import Image from "next/image";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RiHome2Fill } from "react-icons/ri";
import "./FirstProductCard.css";

const FirstProductCard = () => {
  //   const [like, setLike] = useState(0);
  //   const increasLike = () => {
  //     setLike(like + 1);
  //   };
  return (
    <div className="my-10 md:mx-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
        {vegitableProduct.map((item, index) => (
          <div key={index}>
            <div className="border border-borderPrimaryColor px-2 rounded-2xl pb-3">
              <div className="flex justify-end">
                <button className="flex items-center gap-2 bg-[#e8fcec] hover:bg-bgHoverColor px-5 py-2 mt-5 rounded-full text-textSecondaryColor hover:text-white text-lg font-semibold">
                  Add
                  <FiShoppingCart />
                </button>
              </div>
              <div className="flex justify-center mt-5">
                <Image src={item.image} alt="product image" />
              </div>
              <div className="flex items-center gap-3 mt-10">
                <h2 className="line-through text-textPrimaryColor">
                  ${item.price + 14}
                </h2>
                <h2 className="font-medium">${item.price}</h2>
              </div>
              <div className="flex items-center gap-2 my-3">
                <h2 className="font-medium text-textPrimaryColor">
                  {item.rating}
                </h2>
                {/* <FaStar
                  className="text-amber-400 text-lg cursor-pointer"
                  onClick={increasLike}
                />
                <h2>({like})</h2> */}
              </div>
              <div>
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
              <div>
                <input
                  type="range"
                  min={0}
                  max={item.quantity}
                  value={item.sold}
                  className="range range-success h-1"
                />
              </div>
              <div>
                <h2 className="font-quickSans font-medium text-sm mt-1">
                  sold: {item.sold}/{item.quantity}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstProductCard;
