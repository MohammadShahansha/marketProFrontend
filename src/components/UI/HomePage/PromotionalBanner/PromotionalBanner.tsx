import React from "react";
import img1 from "@/assets/promotionalImg/promotional-banner-img1.png";
import img2 from "@/assets/promotionalImg/promotional-banner-img2.png";
import img3 from "@/assets/promotionalImg/promotional-banner-img3.png";
import img4 from "@/assets/promotionalImg/promotional-banner-img4.png";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi2";

const PromotionalBanner = () => {
  const imageData = [
    {
      imageSrc: img1,
      title: "Everyday Fresh Meat",
    },
    {
      imageSrc: img2,
      title: "Daily Fresh Vegetables",
    },
    {
      imageSrc: img3,
      title: "Everyday Fresh Milk",
    },
    {
      imageSrc: img4,
      title: "Everyday Fresh Milk",
    },
  ];
  return (
    <div className="md:mx-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {imageData.map((data, index) => (
          <div key={index} className="relative h-64  rounded-lg  flex ">
            <div>
              <Image src={data.imageSrc} alt="promotional image" />
            </div>
            <div className="absolute top-10 w-full from-black  rounded-b-lg p-4">
              <h2 className=" font-semibold text-3xl w-[200px] ">
                {data.title}
              </h2>
              <button className="flex items-center gap-2 bg-bgPrimaryColor hover:bg-bgHoverColor px-5 py-2 mt-10 rounded-full text-white text-lg">
                Shop Now
                <HiOutlineArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionalBanner;
