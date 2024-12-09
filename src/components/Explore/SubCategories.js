import React from "react";
import { useCategories } from "../../context/CategoriesContext";
import ShopHeader from "../Shop/ShopHeader";
import Filters from "../Shop/Filters";
import ProductList from "../Shop/ProductList";
import TruckPartCards from "../Shop/TruckPartCards";
import { products } from "../../data/productsData";

const SubCategories = () => {
  const { selectedCategory } = useCategories();

  const filters = ["Price: Low to High", "Price: High to Low", "Newest"];
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  const applyFilter = (filter) => {
    let sortedProducts = [...products];
    if (filter === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (filter === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="p-8">
      <ShopHeader />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 bg-white shadow-md rounded-lg p-4">
          <Filters filters={filters} onApplyFilter={applyFilter} />
        </div>

        <div className="col-span-9">
          <div className="mb-8">
            <ProductList products={filteredProducts} />
          </div>

          <TruckPartCards />
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
