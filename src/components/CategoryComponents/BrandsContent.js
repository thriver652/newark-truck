// src/CategoryComponents/BrandsContent.js
import React from "react";
import { brands } from "../../data/headerData";

const BrandsContent = () => (
  <>
    {brands.map((brand) => (
      <div key={brand} className="p-1 text-black">
        {brand}
      </div>
    ))}
  </>
);

export default BrandsContent;
