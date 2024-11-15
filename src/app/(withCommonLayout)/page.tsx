import Banner from "@/components/UI/HomePage/Banner/Banner";
import FirstProductCard from "@/components/UI/HomePage/FirstProductCard/FirstProductCard";
import FlashSales from "@/components/UI/HomePage/FlashSales/FlashSales";
import HotDeals from "@/components/UI/HomePage/HotDeals/HotDeals";
import OfferBanner from "@/components/UI/HomePage/OfferBanner/OfferBanner";
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
      <FirstProductCard />
      <OfferBanner />
      <HotDeals />
    </div>
  );
};

export default HomePage;
