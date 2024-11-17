import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import UpperNav from "@/components/Shared/Navbar/UpperNav";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UpperNav />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
