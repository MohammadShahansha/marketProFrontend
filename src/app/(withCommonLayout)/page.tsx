import Banner from "@/components/UI/HomePage/Banner/Banner";
import DailyBestSell from "@/components/UI/HomePage/DailyBestSell/DailyBestSell";
import DeliverMan from "@/components/UI/HomePage/DeliverMan/DeliverMan";
import FirstProductCard from "@/components/UI/HomePage/FirstProductCard/FirstProductCard";
import FlashSales from "@/components/UI/HomePage/FlashSales/FlashSales";
import HotDeals from "@/components/UI/HomePage/HotDeals/HotDeals";
import NewArrivals from "@/components/UI/HomePage/NewArrivals/NewArrivals";
import OfferBanner from "@/components/UI/HomePage/OfferBanner/OfferBanner";
import OrganicFood from "@/components/UI/HomePage/OrganicFood/OrganicFood";
import ProductImgSlider from "@/components/UI/HomePage/ProductImgSlider/ProductImgSlider";
import PromotionalBanner from "@/components/UI/HomePage/PromotionalBanner/PromotionalBanner";
import Service from "@/components/UI/HomePage/Service/Service";
import ShopByBrand from "@/components/UI/HomePage/ShopByBrand/ShopByBrand";
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
      <DailyBestSell />
      <DeliverMan />
      <OrganicFood />
      <ShopByBrand />
      <NewArrivals />
      <Service />
    </div>
  );
};

export default HomePage;
