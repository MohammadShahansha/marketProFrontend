"use client";
import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SideNextArrow = (props: any) => {
  const [isHover, setIsHover] = useState(false);
  const { onClick } = props;
  return (
    <div
      className="absolute transform -translate-y-1/2 hover:text-white border-[#ccc] text-[#999] rounded-full p-2 cursor-pointer border"
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        width: "35px",
        height: "35px",
        // backgroundColor: "green",
        backgroundColor: isHover ? "#299e60" : "white",
        color: isHover ? "white" : "#999",
        display: "flex",
        alignItems: "center",
        borderColor: "#ccc",
        right: "10px",
        top: "-80px",

        zIndex: 20,
      }} // Ensure the button is large enough
    >
      <SlArrowRight className="" size={20} />
    </div>
  );
};

export default SideNextArrow;
