import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { FaHandPeace } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { BiSolidMessageDetail } from "react-icons/bi";

const Service = () => {
  return (
    <div className="mx-2 md:mx-7 my-10">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-5 ">
        <div className="bg-[#e8fcec] hover:bg-[#cef2df] w-full flex items-center gap-5 ps-8 py-7 rounded-2xl">
          <div className="bg-bgPrimaryColor w-[50px] h-[50px] flex justify-center items-center rounded-full">
            <MdLocalShipping className="text-4xl text-white" />
          </div>
          <div>
            <h2 className="font-semibold font-quickSans text-2xl">
              Free Shipping
            </h2>
            <p className="font-medium">Free shipping all over the US</p>
          </div>
        </div>
        <div className="bg-[#e8fcec] hover:bg-[#cef2df] w-full flex items-center gap-5 ps-8 py-7 rounded-2xl">
          <div className="bg-bgPrimaryColor w-[50px] h-[50px] flex justify-center items-center rounded-full">
            <FaHandPeace className="text-4xl text-white" />
          </div>
          <div>
            <h2 className="font-semibold font-quickSans text-2xl">
              100% Satisfaction
            </h2>
            <p className="font-medium">Free shipping all over the US</p>
          </div>
        </div>
        <div className="bg-[#e8fcec] hover:bg-[#cef2df] w-full flex items-center gap-5 ps-8 py-7 rounded-2xl">
          <div className="bg-bgPrimaryColor w-[50px] h-[50px] flex justify-center items-center rounded-full">
            <BsCreditCard2FrontFill className="text-4xl text-white" />
          </div>
          <div>
            <h2 className="font-semibold font-quickSans text-2xl">
              Secure Payment
            </h2>
            <p className="font-medium">Free shipping all over the US</p>
          </div>
        </div>
        <div className="bg-[#e8fcec] hover:bg-[#cef2df] w-full flex items-center gap-5 ps-8 py-7 rounded-2xl">
          <div className="bg-bgPrimaryColor w-[50px] h-[50px] flex justify-center items-center rounded-full">
            <BiSolidMessageDetail className="text-4xl text-white" />
          </div>
          <div>
            <h2 className="font-semibold font-quickSans text-2xl">
              24/7 Support
            </h2>
            <p className="font-medium">Free shipping all over the US</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
