"use client";
import MPForm from "@/components/Forms/MPForm";
import MPInput from "@/components/Forms/MPInput";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const submitHandler = () => {};
  return (
    <div>
      <div className="border hover:border-textSecondaryColor p-10 md:h-[630px]">
        <h2 className="text-black font-semibold text-xl mb-10">Login</h2>
        <div>
          <MPForm onSubmit={submitHandler}>
            <MPInput type="email" name="email" label="User Email" />
            <MPInput type="password" name="password" label="User Password" />
            <div>
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#fa6400] hover:bg-[#fa6400de] px-5 py-2 mt-10 text-white  text-lg font-semibold rounded-sm"
              >
                Login
              </button>
            </div>
          </MPForm>
          <Link href="#">
            <h2 className="font-semibold text-red-500 mt-10 hover:underline">
              Forget your password?
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
