// components/Button.tsx
import React, { FC, ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger"; // Customize styles for each variant
  disabled?: boolean;
  className?: string; // Allow for additional custom styles
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const baseStyles = "px-5 py-3 rounded ";

  const variantStyles = {
    primary: "bg-[#299e60] text-white hover:bg-[#258e56]",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
