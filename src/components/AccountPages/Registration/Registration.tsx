"use client";
import MPForm from "@/components/Forms/MPForm";
import MPInput from "@/components/Forms/MPInput";
import React from "react";

const RegistrtionPage = () => {
  const submitHandler = () => {};
  return (
    <div className="">
      <div className="border hover:border-textSecondaryColor p-10 md:h-[630px]">
        <h2 className="text-black font-semibold text-xl mb-10">
          Registrations
        </h2>
        <div>
          <MPForm onSubmit={submitHandler}>
            <MPInput type="username" name="username" label="User Name" />
            <MPInput type="email" name="email" label="User Email" />
            <MPInput type="password" name="password" label="User Password" />
            <p className="mt-10 text-[#ccc]">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes{" "}
            </p>
            <div>
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#fa6400] hover:bg-[#fa6400de] px-5 py-2 mt-10 text-white text-lg font-semibold rounded-sm"
              >
                Register
              </button>
            </div>
          </MPForm>
        </div>
      </div>
    </div>
  );
};

export default RegistrtionPage;
