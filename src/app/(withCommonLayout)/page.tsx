import Banner from "@/components/UI/HomePage/Banner/Banner";
import ProductImgSlider from "@/components/UI/HomePage/ProductImgSlider/ProductImgSlider";
import PromotionalBanner from "@/components/UI/HomePage/PromotionalBanner/PromotionalBanner";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ProductImgSlider />
      <PromotionalBanner />
    </div>
  );
};

export default HomePage;
