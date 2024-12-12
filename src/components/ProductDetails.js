import React, { useContext } from "react";
import { useCart } from "../context/CartContext"; // Assuming you have a Cart context
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  const { selectedProduct } = useContext(ProductContext);
  const { addToCart } = useCart();

  if (!selectedProduct) {
    return <p>No product selected. Please go back and choose a product.</p>;
  }

  const price = selectedProduct.priceEach
    ? parseFloat(selectedProduct.priceEach.replace('$', '')).toFixed(2)
    : "N/A";

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 px-8 py-4">
        Home › Plumbing supplies › Sub category 02 › Product
      </div>

      {/* Main Content */}
      <div className="flex px-8 py-8 gap-8">
        {/* Product Image */}
        <div className="w-1/2">
          <img
            src={selectedProduct.image || "https://via.placeholder.com/500"}
            alt={selectedProduct.name || "Product Image"}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>

          {/* Brand, SKU, and Ratings */}
          <div className="flex items-center text-sm text-gray-600 space-x-4 mb-4">
            <span>
              Brand: <span className="text-blue-600 font-regular">{selectedProduct.brand}</span>
            </span>
            <span> SKU: {selectedProduct.sku}</span>
            <div className="flex items-center text-green-600 font-medium">
              ★★★★★ <span className="ml-2 text-gray-500">(24)</span>
            </div>
          </div>

          {/* Price Options and Quantity Selector Combined */}
          <div className="mt-4 bg-gray-100 p-3 rounded-md">
            {/* Price Options */}
            <div className="flex items-center justify-between mb-4">
              {/* Pricing Information in a Horizontal Layout */}
              <div className="flex flex-grow space-x-4">
                <p className="text-lg font-bold flex-grow text-center">${price} each</p>
                <p className="text-sm font-bold flex-grow text-center">
                  ${price * 12} box of 12 ({(price - 0.07).toFixed(2)} each)
                </p>
              </div>
              <div className="bg-red-100 text-red-600 px-3 py-1 text-sm font-bold">SAVE 20%</div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 border text-gray-600 text-xl">-</button>
              <input
                type="number"
                value="1"
                className="w-16 text-center border mx-4 text-xl"
                readOnly
              />
              <button className="w-10 h-10 border text-gray-600 text-xl">+</button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-8 bg-[#E20000] text-white py-3 px-48 rounded-md text-lg hover:bg-[#b80000] transition"
            onClick={() => addToCart(selectedProduct)}
            disabled={selectedProduct.stock === 0}
          >
            Add to Cart
          </button>

          {/* Stock Status */}
          <p
            className={`text-lg font-bold mt-6 ${
              selectedProduct.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {selectedProduct.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      </div>

      {/* Adjusted Price and Line Item */}
      <div className="flex items-center justify-between mt-6 bg-gray-100 p-3 rounded-md">
        <p className="text-lg text-gray-600">${price}</p>
        <div className="flex items-center text-xs">
          <span className="text-gray-500">${(price - 0.07).toFixed(2)} each</span>
          <span className="text-gray-400 ml-4">Line item</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
