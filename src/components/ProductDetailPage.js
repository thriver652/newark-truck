import React from "react";

function ProductDetailPage({ product }) {
  return (
    <div>
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-green-500 font-semibold">{product.price}</p>
      <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetailPage;
