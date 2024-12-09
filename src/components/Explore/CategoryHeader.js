import React from "react";
import { useCategories } from "../../context/CategoriesContext";

const Breadcrumb = ({
  selectedCategory,
  selectedSubcategory,
  setSelectedCategory,
  setSelectedSubcategory,
}) => {
  return (
    <nav aria-label="breadcrumb" className="flex items-center">
      {/* Categories Link */}
      <div
        className="text-blue-500 cursor-pointer"
        onClick={() => {
          setSelectedCategory(null);
          setSelectedSubcategory(null);
        }}
      >
        Categories
      </div>

      {/* Category Name */}
      {selectedCategory && !selectedSubcategory && (
        <>
          <span className="mx-2 text-gray-500"> &gt; </span>
          <div
            className="text-gray-700 cursor-pointer"
            onClick={() => setSelectedCategory(null)} // Go back to category list
          >
            {selectedCategory.name}
          </div>
        </>
      )}

      {/* Category and Subcategory Name */}
      {selectedCategory && selectedSubcategory && (
        <>
          <span className="mx-2 text-gray-500"> &gt; </span>
          <div
            className="text-gray-700 cursor-pointer"
            onClick={() => setSelectedCategory(null)} // Go back to category list
          >
            {selectedCategory.name}
          </div>
          <span className="mx-2 text-gray-500"> &gt; </span>
          <div
            className="text-gray-700 cursor-pointer"
            onClick={() => setSelectedSubcategory(null)} // Go back to category view
          >
            {selectedSubcategory.name}
          </div>
        </>
      )}
    </nav>
  );
};

const CategoryHeader = () => {
  const {
    selectedCategory,
    selectedSubcategory,
    setSelectedCategory,
    setSelectedSubcategory,
  } = useCategories();

  return (
    <div className="bg-white px-8 py-4 mb-6">
      <Breadcrumb
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        setSelectedCategory={setSelectedCategory}
        setSelectedSubcategory={setSelectedSubcategory}
      />

      {/* Category Name */}
      {selectedCategory && !selectedSubcategory && (
        <h1 className="mt-2 text-3xl font-semibold text-gray-900">
          {selectedCategory.name}
        </h1>
      )}

      {/* Subcategory Name */}
      {selectedSubcategory && (
        <h2 className="mt-2 text-3xl font-semibold text-gray-900 ">
          {selectedSubcategory.name}
        </h2>
      )}
    </div>
  );
};

export default CategoryHeader;
