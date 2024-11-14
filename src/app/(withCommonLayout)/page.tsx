// import Banner from "@/components/UI/HomePage/Banner/Banner";
// import FlashSales from "@/components/UI/HomePage/FlashSales/FlashSales";
// import ProductImgSlider from "@/components/UI/HomePage/ProductImgSlider/ProductImgSlider";
// import ProductImgSlider from "@/components/UI/HomePage/ProductImgSlider/ProductImgSlider";
// import PromotionalBanner from "@/components/UI/HomePage/PromotionalBanner/PromotionalBanner";
import Banner from "@/components/UI/HomePage/Banner/Banner";
import FlashSales from "@/components/UI/HomePage/FlashSales/FlashSales";
import ProductImgSlider from "@/components/UI/HomePage/ProductImgSlider/ProductImgSlider";
import PromotionalBanner from "@/components/UI/HomePage/PromotionalBanner/PromotionalBanner";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ProductImgSlider />
      <PromotionalBanner />
      <FlashSales />
    </div>
  );
};

export default HomePage;
