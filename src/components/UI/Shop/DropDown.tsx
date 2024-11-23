"use client";
import React, { useState } from "react";

const SortByDropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("Select One");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-textPrimaryColor font-medium">Sort by:</span>
      <div className="relative">
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className="appearance-none border-2 border-[#ccc] rounded-md py-2 px-5 cursor-pointer text-textPrimaryColor  outline-none"
        >
          <option value="Popular">Select One</option>
          <option value="Popular">Popular</option>
          <option value="Newest">Newest</option>
          <option value="Highest Rated">Highest Rated</option>
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-textPrimaryColor"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SortByDropdown;
