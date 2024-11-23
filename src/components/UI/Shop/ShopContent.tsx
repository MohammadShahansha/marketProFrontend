// import { shopProduct } from "@/Object/Object";
// import React, { useEffect, useState } from "react";
// import ShopDashboardContant from "./ShopDashboardContant";
import ResponsiveSidebar from "./ShopDashboardContant";

// interface CategoryCount {
//   [key: string]: number;
// }

const ShopContent = () => {
  // const [categoryCounts, setCategoryCounts] = useState<CategoryCount>({});
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const counts = shopProduct.reduce((acc: CategoryCount, product) => {
  //         acc[product.category] = (acc[product.category] || 0) + 1;
  //         return acc;
  //       }, {});

  //       setCategoryCounts(counts);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);
  return (
    <div className="mx-2 md:mx-7">
      {/* <div>
        {Object.entries(categoryCounts).map(([category, count]) => (
          <div key={category}>
            {category}({count})
          </div>
        ))}
      </div> */}
      <ResponsiveSidebar />
    </div>
  );
};

export default ShopContent;
