import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-500 font-semibold">{product.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
