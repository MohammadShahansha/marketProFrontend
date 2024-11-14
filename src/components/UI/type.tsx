import SideNextArrow from "@/utils/Arrows/SideNextArrow";
import SidePrevArrow from "@/utils/Arrows/SidePrevArrow";

export const styleOfFleshSelsSlide = {
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  // dots: true, // Optional: Adds navigation dots
  infinite: true,
  nextArrow: <SideNextArrow />,
  prevArrow: <SidePrevArrow />,
};
