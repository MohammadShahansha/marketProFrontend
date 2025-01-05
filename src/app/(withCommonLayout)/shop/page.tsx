// import ShopBanner from "@/components/UI/Shop/ShopBanner";
import ShopContent from "@/components/UI/Shop/ShopContent";
import CommonBanner from "@/utils/CommonBanner/CommonBanner";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      {/* <ShopBanner /> */}
      <CommonBanner pageName="Shop" />
      <ShopContent />
    </div>
  );
};

export default AboutPage;
