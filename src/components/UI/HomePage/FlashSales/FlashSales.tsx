"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "@/assets/flashImag/flash-sale-bg1.png";
import img2 from "@/assets/flashImag/flash-sale-bg2.png";
import flashImg1 from "@/assets/flashImag/flash-sale-img1.png";
import flashImg2 from "@/assets/flashImag/flash-sale-img2.png";
import flashImg3 from "@/assets/flashImag/flash-sale-img3.png";
import { styleOfFleshSelsSlide } from "../../type";
import CountDown from "@/utils/CountDown/CountDown";
import { HiOutlineArrowRight } from "react-icons/hi2";

const FlashSales = () => {
  const targetDate = new Date("2024-12-31T23:59:59");
  const imgList = [
    {
      //   bgImg: "/images/flash-sale-bg1.png",
      bgImg: img1,
      productImg: flashImg1,
      title: "Fresh Vegitables",
    },
    {
      //   bgImg: "/images/flash-sale-bg1.png",
      bgImg: img2,
      productImg: flashImg2,
      title: "Daily Snacks",
    },
    {
      //   bgImg: "/images/flash-sale-bg1.png",
      bgImg: img1,
      productImg: flashImg3,
      title: "Fresh Vegitables",
    },
  ];
  return (
    <div className="mt-24 md:mx-4">
      <div className="flex justify-between md:px-3 mb-10">
        <div className="font-semibold font-quickSans text-3xl">
          Flash Salsh Today
        </div>
        <div className=" font-semibold text-textPrimaryColor cursor-pointer hover:text-textSecondaryColor mr-24">
          vew all deals
        </div>
      </div>
      <Slider {...styleOfFleshSelsSlide} className="h-[300px]">
        {imgList.map((item, index) => (
          <div key={index} className="px-3">
            <div
              className="relative flex items-center justify-center gap-5 bg-cover bg-center w-full h-[300px] rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${item.bgImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
              }}
            >
              <div className="flex flex-col md:flex-row items-center gap-5 rounded-lg">
                <div className="w-4/5">
                  <Image
                    src={item.productImg}
                    alt={item.title}
                    className="w-[300px] h-auto object-cover"
                  />
                </div>

                {/* Right Side: Title, Countdown, and Button */}
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-semibold font-quickSans mb-5">
                    {item.title}
                  </h3>
                  <CountDown targetDate={targetDate} style={{}} />
                  <button className="flex items-center gap-2 bg-bgPrimaryColor hover:bg-bgHoverColor px-5 py-2 mt-5 rounded-lg text-white text-lg">
                    Shop Now
                    <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FlashSales;
