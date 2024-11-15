import { offerProduct } from "@/Object/Object";
import bgImg from "@/assets/offerImag/offer-shape.png";
import Image from "next/image";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";

const OfferBanner = () => {
  return (
    <div className="md:mx-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {offerProduct.map((item, index) => (
          <div key={index} className="rounded-lg">
            <div className="relative bg-bgPrimaryColor rounded-lg overflow-hidden">
              <Image
                src={bgImg}
                alt="backgroiund Image"
                className="opacity-5 w-full h-[600px] md:h-[350px]"
              />

              <div className="absolute inset-0 flex flex-col md:flex-row items-center md:justify-between mx-7 text-white py-5">
                <div>
                  <Image
                    src={item.image}
                    alt="product image"
                    width={300}
                    height={300}
                    className="w-[300px] h-[300px]"
                  />
                </div>
                <div className="mt-10 md:mt-0">
                  <div className="bg-white w-[100px] h-[100px] rounded-full flex justify-center items-center">
                    <Image
                      src={item.offerLogo}
                      alt="logo"
                      width={80}
                      height={80}
                    />
                  </div>
                  <h2 className="text-3xl font-[600] font-quickSans">
                    ${item.offer} off your first order
                  </h2>
                  <div className="flex items-center gap-3">
                    <h2>Delivery By 6.15am</h2>
                    <h2 className="text-orange-600">Expired Aug 5</h2>
                  </div>
                  <button className="flex items-center gap-2 bg-white hover:bg-bgHoverColor px-5 py-2 mt-5 rounded-lg text-black hover:text-white text-lg">
                    Shop Now
                    <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferBanner;
