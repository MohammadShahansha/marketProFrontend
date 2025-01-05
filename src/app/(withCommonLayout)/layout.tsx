import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";
import MiddleNav from "@/components/Shared/Navbar/MiddleNav";
import UpperNav from "@/components/Shared/Navbar/UpperNav";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UpperNav />
      <MiddleNav />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
