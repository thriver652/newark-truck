import React from "react";
import { useCart } from "../context/CartContext";
import Filters from "../components/Filters"; // Import Filters component

const ProductDetails = ({ product }) => {
  const { addToCart } = useCart();

  if (!product) {
    return <p className="text-gray-500">No product selected.</p>;
  }

  // Safely access price and discountPrice with a fallback to 0 if undefined or null
  const price = product.price ? product.price.toFixed(2) : "N/A";
  const discountPrice = product.discountPrice
    ? product.discountPrice.toFixed(2)
    : "N/A";

  return (
    <div className="min-h-screen flex bg-[#F2F4F7]">
      {/* Sidebar for Filters */}
      <aside className="w-1/4 p-4 bg-white border-r border-[#EAECF0] hidden md:block">
        <Filters />
      </aside>

      {/* Main Content Area for Product Details */}
      <main className="flex-1 p-8">
        <div className="border p-4 rounded-lg shadow-md bg-white max-w-xl mx-auto">
          {/* Product Image */}
          <div className="flex justify-center mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4"
            />
          </div>

          {/* Product Name, SKU, and Brand */}
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-sm text-gray-600 mb-2">SKU: {product.sku}</p>
          <p className="text-sm text-gray-600 mb-2">Brand: {product.brand}</p>

          {/* Price and Discount */}
          <div className="flex items-center my-2">
            <span className="text-green-500 font-bold">${price}</span>
            {product.discountPrice && discountPrice !== "N/A" && (
              <span className="ml-2 text-sm text-gray-500">
                (${discountPrice} each for box of 12)
              </span>
            )}
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center my-2">
            <span className="text-yellow-500">
              {Array(product.rating).fill("★").join("")}
            </span>
            <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
          </div>

          {/* Stock Status */}
          <p className={`text-sm font-bold ${product.stock === "In stock" ? "text-green-500" : "text-red-500"}`}>
            {product.stock}
          </p>

          {/* Delivery Date (If In Stock) */}
          {product.stock === "In stock" && product.deliveryDate && (
            <p className="text-sm text-gray-500 mt-2">Get by {product.deliveryDate}</p>
          )}

          {/* Add to Cart Button */}
          <button
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
