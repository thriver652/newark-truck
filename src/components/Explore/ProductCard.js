import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
