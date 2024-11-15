import { dailyBestSell } from "@/Object/Object";
import CountDown from "@/utils/CountDown/CountDown";
import Image from "next/image";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RiHome2Fill } from "react-icons/ri";
import snackImg from "@/assets/dailyBestSell/special-snacks.png";
import bgSnackImg from "@/assets/dailyBestSell/special-snacks-bg.png";
import { HiOutlineArrowRight } from "react-icons/hi2";

const DailyBestSell = () => {
  const targetDate = new Date("2024-12-31T23:59:59");
  const secondTargetData = new Date("2025-11-11T23:59:59");
  return (
    <div className="md:mx-7 mt-[200px] md:mt-24">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {dailyBestSell.map((item, index) => (
              <div key={index}>
                <div className="flex gap-1 border border-borderPrimaryColor px-2 rounded-2xl pb-3">
                  <div>
                    <div>
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
                    </div>
                    <div className="flex justify-center my-8">
                      <Image src={item.image} alt="product img" />
                    </div>
                    <div>
                      <CountDown
                        targetDate={targetDate}
                        style={{ backgroundColor: "#e8fcec", fontSize: "10px" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 ">
                      <h2 className="line-through text-textPrimaryColor">
                        ${item.price + 14}
                      </h2>
                      <h2 className="font-medium">${item.price}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-medium text-textPrimaryColor">
                        {item.rating}
                      </h2>
                      {/* <FaStar
                className="text-amber-400 text-lg cursor-pointer"
                onClick={increasLike}
              />
              <h2>({like})</h2> */}
                    </div>
                    <div className="">
                      <h2 className="font-[600] font-quickSans text-xl ">
                        {item.title}
                      </h2>
                    </div>
                    <div className="">
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
                    <div className="flex justify-center">
                      <button className="flex items-center  gap-2 bg-[#e8fcec] hover:bg-bgHoverColor px-8 py-2 mt-5 rounded-full text-textSecondaryColor hover:text-white text-lg">
                        Add to Cart
                        <FiShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div
            className="bg-cover bg-center bg-no-repeat py-10 px-5 rounded-2xl"
            style={{ backgroundImage: `url(${bgSnackImg.src})` }}
          >
            <div>
              <Image src={snackImg} alt="snack image" />
            </div>
            <div className="flex justify-center mt-10 text-3xl font-quickSans font-[600]">
              <h2 className="">Special Snack</h2>
            </div>
            <div className="flex justify-center my-10">
              <CountDown
                targetDate={secondTargetData}
                style={{ backgroundColor: "#299e60", color: "white" }}
              />
            </div>
            <div>
              <button className="flex items-center mx-auto gap-2 bg-[#fa6400] hover:bg-[#fa6400de] px-5 py-2 mt-5 rounded-full text-white text-lg">
                Shop Now
                <HiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyBestSell;
