"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "@/assets/banner/banner-img1.png";
import img2 from "@/assets/banner/banner-img3.png";
import img3 from "@/assets/banner/flash-sale-img1.png";
import bgImg from "@/assets/banner/banner-bg.png";
import Image from "next/image";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slidesData = [
    {
      title: "Slide 1",
      description: "This is the first slide description.",
      imageUrl: img1,
    },
    {
      title: "Slide 2",
      description: "This is the second slide description.",
      imageUrl: img2,
    },
    {
      title: "Slide 3",
      description: "This is the third slide description.",
      imageUrl: img3,
    },
  ];

  return (
    <div
      className="bg-cover bg-center bg-no-repeat mb-10"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="flex items-center justify-center  text-white "
          >
            <div className="flex items-center justify-between w-4/5 mx-auto p-4 bg-black/70 rounded-lg">
              {/* Text Section */}
              <div className="w-1/2 p-4">
                <h2 className="text-3xl font-bold">{slide.title}</h2>
                <p className="mt-2">{slide.description}</p>
              </div>
              {/* Image Section */}
              <div className="w-1/2 flex justify-center">
                {/* <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="rounded-lg max-w-full" /> */}
                <Image
                  src={slide.imageUrl}
                  alt="slider image"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
