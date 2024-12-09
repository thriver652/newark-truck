import React from "react";
import { useCart } from "../../context/CartContext";
import Filters from "../../components/Filters"; // Import Filters component

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-[#F2F4F7] flex">
      {/* Filters Section */}
      <aside className="w-1/4 p-4 bg-white border-r border-[#EAECF0] hidden md:block">
        <Filters />
      </aside>

      {/* Main Cart Section */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {/* If cart is empty */}
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty. Go back to categories to add products.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-white border border-[#EAECF0] shadow-md rounded-md"
              >
                {/* Product Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[120px] h-[120px] object-contain"
                  />
                </div>

                {/* Product Details */}
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                <p className="text-sm text-gray-500">Brand: {item.brand}</p>
                <p className="text-lg font-bold">
                  ${item.price ? item.price.toFixed(2) : "N/A"} each
                </p>
                <p className="text-sm">
                  <span
                    className={`${
                      item.inStock ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {item.inStock ? "In stock" : "Out of stock"}
                  </span>
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4 mt-4">
                  <button
                    className="bg-gray-200 px-2 rounded"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    className="bg-gray-200 px-2 rounded"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  className="bg-red-500 text-white mt-4 w-full py-2 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;

// import React from 'react'

// const Cart = () => {
//   return (
//     <div>
//       Cart
//     </div>
//   )
// }

// export default Cart

