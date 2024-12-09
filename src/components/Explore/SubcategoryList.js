import React from "react";
import { useCategories } from "../../context/CategoriesContext";

const SubcategoryList = () => {
  const { selectedCategory, setSelectedSubcategory } = useCategories();

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory); // Set selected subcategory from context
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {selectedCategory?.subcategories.map((subcategory, index) => (
        <div
          key={index}
          className="cursor-pointer w-[275px] h-[275px] p-1 flex flex-col items-center justify-between bg-white border border-solid border-[#EAECF0] shadow-sm"
          onClick={() => handleSubcategoryClick(subcategory)} // Call context function
        >
          {/* Image */}
          <div className="w-[267px] h-[220px] bg-[#F2F4F7] flex items-center justify-center">
            <img
              src={subcategory.image}
              alt={subcategory.name}
              className="w-[267px] h-[220px] object-cover"
            />
          </div>
          {/* Subcategory Name */}
          <p className="text-lg font-medium text-center">{subcategory.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SubcategoryList;
