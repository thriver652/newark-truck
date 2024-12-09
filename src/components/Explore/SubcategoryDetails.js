import React from "react";
import { useCategories } from "../../context/CategoriesContext";

const SubcategoryDetails = () => {
  const { selectedSubcategory } = useCategories();

  if (!selectedSubcategory) {
    return <div>No subcategory selected</div>;
  }

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold">{selectedSubcategory.name}</h2>
      <p>{selectedSubcategory.description}</p>
      {/* Render any additional subcategory details you need */}
    </div>
  );
};

export default SubcategoryDetails;
