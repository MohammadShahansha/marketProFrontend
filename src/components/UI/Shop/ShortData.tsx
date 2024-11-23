import { shopProduct } from "@/Object/Object";
import React from "react";
import SortByDropdown from "./DropDown";

const ShortData = () => {
  const totalData = shopProduct.length;
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium text-textPrimaryColor">
          Showing 1-20 of {totalData}
        </h2>
        <div>
          <SortByDropdown />
        </div>
      </div>
    </div>
  );
};

export default ShortData;
