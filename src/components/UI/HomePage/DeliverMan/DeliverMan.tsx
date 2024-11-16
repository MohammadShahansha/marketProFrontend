import React from "react";
import bgImg from "@/assets/dailyBestSell/delivery-bg.png";
import deliverMan from "@/assets/dailyBestSell/delivery-man.png";
import snackImg from "@/assets/dailyBestSell/special-snacks.png";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi2";

const DeliverMan = () => {
  return (
    <div>
      <div
        className="md:relative bg-cover bg-center bg-no-repeat my-10 bg-bgPrimaryColor rounded-[22px] mx-2 md:mx-7 "
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="flex justify-between items-center py-10 px-2 md:px-5">
          <div className="hidden md:block md:absolute md:top-[20px] ">
            <Image src={deliverMan} alt="Deliver man image" />
          </div>
          <div className="md:w-1/3"></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-quickSans font-[600] text-white text-center ">
              We Delivery on Next Day from 10:00 AM to 08:00 PM
            </h2>
            <p className="text-center text-white mt-5">
              For Orders starts from $100
            </p>
            <button className="flex items-center mx-auto gap-2 bg-[#fa6400] hover:bg-[#fa6400de] px-5 py-2 mt-5 rounded-full text-white text-lg">
              Shop Now
              <HiOutlineArrowRight />
            </button>
          </div>
          <div className="hidden md:block">
            <Image src={snackImg} alt="snack Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverMan;
