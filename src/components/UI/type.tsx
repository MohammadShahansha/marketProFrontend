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

// export const hotDealsSlider = {
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 1000,
//   // dots: true, // Optional: Adds navigation dots
//   infinite: true,
//   nextArrow: <NextArrow />,
//   prevArrow: <PrevArrow />,
// };
export const hotDealsSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <SideNextArrow />,
  prevArrow: <SidePrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // For screens smaller than 1024px
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // For screens smaller than 768px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 480, // For screens smaller than 480px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
      },
    },
  ],
};

export const organicSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <SideNextArrow />,
  prevArrow: <SidePrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // For screens smaller than 1024px
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // For screens smaller than 768px
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 480, // For screens smaller than 480px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
      },
    },
  ],
};

export const brandSettings = {
  infinite: true,
  // speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <SideNextArrow />,
  prevArrow: <SidePrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // For screens smaller than 1024px
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // For screens smaller than 768px
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 480, // For screens smaller than 480px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
      },
    },
  ],
};

export const newArrivalsSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  nextArrow: <SideNextArrow />,
  prevArrow: <SidePrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // For screens smaller than 1024px
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // For screens smaller than 768px
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 600, // For screens smaller than 768px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 480, // For screens smaller than 480px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplaySpeed: 2000,
      },
    },
  ],
};
