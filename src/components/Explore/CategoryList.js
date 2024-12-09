import React from "react";
import { useCategories } from "../../context/CategoriesContext";
import { categories } from "../../data/categoriesData";
const CategoryList = () => {
  const { setSelectedCategory } = useCategories();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 p-8 gap-3">
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => setSelectedCategory(category)}
          className="cursor-pointer w-[275px] h-[275px] p-1 flex flex-col items-center justify-between bg-white border border-solid border-[#EAECF0] shadow-sm"
        >
          <div className="w-[267px] h-[220px] bg-[#F2F4F7] flex items-center justify-center">
            <img
              src={category.image}
              alt={category.name}
              className="w-[267px] h-[220px] object-cover"
            />
          </div>
          <p className="text-lg font-medium text-center justify-center">
            {category.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
