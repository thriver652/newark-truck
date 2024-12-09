import React from "react";
import { useCategories } from "../context/CategoriesContext";
import CategoryHeader from "./Explore/CategoryHeader";
import CategoryList from "./Explore/CategoryList";
import CategoryDetails from "./Explore/SubCategories";

const Categories = () => {
  const { categories, selectedCategory } = useCategories(); // Get categories from context

  return (
    <div className="bg-[#F2F4F7]">
      <CategoryHeader />
      {selectedCategory ? <CategoryDetails /> : <CategoryList />}
    </div>
  );
};

export default Categories;
