import LoginPage from "@/components/AccountPages/Login/Login";
import RegistrtionPage from "@/components/AccountPages/Registration/Registration";
import Service from "@/components/UI/HomePage/Service/Service";
import CommonBanner from "@/utils/CommonBanner/CommonBanner";
import React from "react";

const LoginRegistrationPage = () => {
  return (
    <div>
      <CommonBanner pageName="My Account" />
      <div className="flex flex-col md:flex-row gap-10 px-5">
        <div className="w-full">
          <LoginPage />
        </div>
        <div className="w-full">
          <RegistrtionPage />
        </div>
      </div>
      <div className="mt-16">
        <Service />
      </div>
    </div>
  );
};

export default LoginRegistrationPage;
