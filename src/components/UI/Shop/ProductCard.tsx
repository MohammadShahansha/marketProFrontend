import { shopProduct } from "@/Object/Object";
import Image from "next/image";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RiHome2Fill } from "react-icons/ri";
import "../HomePage/FirstProductCard/FirstProductCard";
import { FaStar } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-10">
      {shopProduct.slice(0, 8).map((item, index) => (
        <div key={index} className="col-span-12 md:col-span-3">
          <div className="border border-borderPrimaryColor px-2 rounded-2xl pb-3 mx-1 ">
            <div className="w-[80px] mt-2 cursor-grab">
              {item.quantity / item.sold <= 1.5 ? (
                <p className="bg-indigo-700 text-white flex justify-center px-2 py-1 text-center rounded-tl-2xl rounded-br-2xl">
                  Best Sel
                </p>
              ) : (
                <div className="w-[80px] mt-2 cursor-grab">
                  {item.quantity / item.sold <= 2 &&
                  item.quantity / item.sold > 1.5 ? (
                    <p className="bg-red-700 text-white flex justify-center px-2 py-1 text-center rounded-tl-2xl rounded-br-2xl">
                      Sel 50%
                    </p>
                  ) : (
                    <p className=" text-white flex justify-center px-2 py-4 text-center rounded-tl-2xl rounded-br-2xl"></p>
                  )}
                </div>
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
              <FaStar
                className="text-amber-400 text-lg cursor-pointer"
                // onClick={increasLike}
              />
              <h2 className="font-medium text-textPrimaryColor">(30k)</h2>
            </div>
            <div className="flex justify-center">
              <button className="flex items-center  gap-2 bg-[#e8fcec] hover:bg-bgHoverColor px-8 py-2  rounded-full text-textSecondaryColor hover:text-white text-lg">
                Add to Cart
                <FiShoppingCart />
              </button>
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
  );
};

export default ProductCard;
