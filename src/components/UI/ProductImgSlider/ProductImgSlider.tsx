"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "@/assets/featureImg/feature-img1.png";
import img2 from "@/assets/featureImg/feature-img2.png";
import img3 from "@/assets/featureImg/feature-img3.png";
import img4 from "@/assets/featureImg/feature-img4.png";
import img5 from "@/assets/featureImg/feature-img5.png";
import img6 from "@/assets/featureImg/feature-img6.png";
import img7 from "@/assets/featureImg/feature-img7.png";
import img8 from "@/assets/featureImg/feature-img8.png";
import img9 from "@/assets/featureImg/feature-img9.png";
import img10 from "@/assets/featureImg/feature-img10.png";
import Image from "next/image";

const ProductImgSlider = () => {
  const imgList = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
    { image: img7 },
    { image: img8 },
    { image: img9 },
    { image: img10 },
  ];
  //   const forMap = [1, 2, 3, 4, 5, 6, 7, 8];
  const settings = {
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // dots: true, // Optional: Adds navigation dots
    infinite: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <Image src={img1} alt="feature image"></Image>
        <h3>Slide 1</h3>
      </div>

      {imgList.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <Image src={item.image} alt="feature image"></Image>
              <h3>Slide 1</h3>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default ProductImgSlider;
