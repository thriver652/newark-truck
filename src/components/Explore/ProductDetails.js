import React from "react";
import { useCategories } from "../../context/CategoriesContext";

const ProductDetails = () => {
  const { selectedSubcategory } = useCategories();

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold">{selectedSubcategory?.name}</h1>
      <p className="text-gray-700">{selectedSubcategory?.description}</p>
      {/* Add detailed product information */}
    </div>
  );
};

export default ProductDetails;
