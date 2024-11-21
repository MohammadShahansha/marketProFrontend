"use client";
import MPForm from "@/components/Forms/MPForm";
import MPInput from "@/components/Forms/MPInput";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const onSubmit = () => {};
  return (
    <div className="grid grid-cols-12 mx-2 md:mx-12 gap-5">
      <div className=" grid col-span-12 md:col-span-8 border border-[#ccc] rounded-2xl">
        <div className="mx-2 md:mx-7">
          <h2 className="text-3xl font-[500] font-exo my-10">
            Make Custom Request
          </h2>
          <MPForm onSubmit={onSubmit}>
            <div className="flex flex-col md:flex-row justify-between">
              <MPInput type="text" name="fullName" label="Full Name" />
              <MPInput type="text" name="email" label="Email" />
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <MPInput type="text" name="PhoneNumber" label="Phone Number" />
              <MPInput type="text" name="subject" label="Subject" />
            </div>
            <MPInput type="textArea" name="message" label="Message" />
            <div>
              <button className="flex justify-start bg-bgPrimaryColor hover:bg-bgHoverColor px-10 py-3 my-10 rounded-lg text-white text-xl">
                Get a Quote
              </button>
            </div>
          </MPForm>
        </div>
      </div>
      <div className="grid col-span-12 md:col-span-4 ">
        <div className="border border-[#ccc] rounded-2xl mt-5 md:mt-0 h-[320px]">
          <div className="mx-2 md:mx-7">
            <h2 className="text-3xl font-medium my-10">Get In Touch</h2>
            <div className="flex gap-5 items-center">
              <div className="bg-bgPrimaryColor text-white text-xl w-[40px] h-[40px] flex justify-center items-center rounded-full">
                <BiSolidPhoneCall />
              </div>
              <p className="hover:text-textSecondaryColor">+00 123 456 789 </p>
            </div>
            <div className="flex gap-5 items-center my-5">
              <div className="bg-bgPrimaryColor text-white text-xl w-[40px] h-[40px] flex justify-center items-center rounded-full">
                <MdEmail />
              </div>
              <p className="hover:text-textSecondaryColor">
                support24@marketpro.com
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-bgPrimaryColor text-white text-xl w-[40px] h-[40px] flex justify-center items-center rounded-full">
                <FaLocationDot />
              </div>
              <p>Biyes park, California, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
