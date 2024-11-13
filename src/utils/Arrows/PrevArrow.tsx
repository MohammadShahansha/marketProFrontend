"use client";
import { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrevArrow = (props: any) => {
  const { onClick } = props;
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="absolute transform left-0 -translate-y-1/2 cursor-pointer flex items-center rounded-full border"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: isHover ? "#299e60" : "white",
        color: isHover ? "white" : "#999",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#ccc",
        left: "10px",
        top: "60px",
        zIndex: 20,
      }}
    >
      <SlArrowLeft className="flex items-center" />
    </div>
  );
};
export default PrevArrow;
