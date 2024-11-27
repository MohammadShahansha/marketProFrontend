import React from "react";

import vendorImg1 from "@/assets/vendorImg/vendor-img1.png";
import vendorImg2 from "@/assets/vendorImg/vendor-img2.png";
import vendorImg3 from "@/assets/vendorImg/vendor-img3.png";
import vendorImg4 from "@/assets/vendorImg/vendor-img4.png";
import { vendorItems } from "@/Object/Object";
import Image from "next/image";

const Vendor = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-5">
        {vendorItems.map((item, index: number) => (
          <div
            key={index}
            className="bg-[#e0f4dc] grid col-span-12 md:col-span-3 gap-5"
          >
            <Image src={item.vendorLogo} alt="logo" />
            <div>
              <h2>{item.vendorName}</h2>
              <p>{item.deleveredBy}</p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <div className="bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center">
                <Image src={vendorImg1} alt="img" className="" />
              </div>
              <div className="bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center">
                <Image src={vendorImg2} alt="img" className="" />
              </div>
              <div className="bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center">
                <Image src={vendorImg3} alt="img" className="" />
              </div>
              <div className="bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center">
                <Image src={vendorImg4} alt="img" className="" />
              </div>
            </div>
            <div className="bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center mx-auto">
              <Image src={vendorImg3} alt="img" className="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendor;
