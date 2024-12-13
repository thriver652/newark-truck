import React from "react";
import { useCart } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col lg:flex-row px-6">
      {/* Main Cart Section */}
      <main className="w-full lg:w-2/3 p-4">
        <h2 className="text-2xl font-bold mb-6">Your cart</h2>

        {/* If cart is empty */}
        {cartItems.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty. Add items to your cart to proceed.
          </p>
        ) : (
          <div className="bg-white border border-gray-300 shadow-sm rounded-md p-4">
            {/* Single Small Container for All Product Details */}
            <div className="p-0 border border-gray-200 rounded-md">
              {cartItems.map((item, index) => (
                <div
                  key={item.sku}
                  className={`flex flex-col pb-4 ${
                    index !== cartItems.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  {/* Product Image and Details */}
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div className="flex items-center">
                      <img
                        src={item.image || "https://via.placeholder.com/200"}
                        alt={item.name || "Product Image"}
                        className="w-20 h-20 object-contain mr-4"
                      />
                      <div className="pt-2">
                        <h3 className="text-lg font-semibold">{item.name || "Unnamed Product"}</h3>
                        {item.deliveryDate && (
                          <p className="text-sm text-black-600">
                            Arriving:{" "}
                            <span className="text-black-600">{item.deliveryDate}</span>
                          </p>
                        )}
                        {/* Brand and SKU in the same line */}
                        <div className="flex space-x-4 text-sm text-black-600">
                          <span>
                            Brand:{" "}
                            <strong className="text-blue-600 font-medium">
                              {item.brand || "Unknown Brand"}
                            </strong>
                          </span>
                          <span>
                            SKU:{" "}
                            <strong className="text-blue-600 font-medium">{item.sku}</strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price, Quantity Controls, and Remove Button */}
                    <div className="flex items-center space-x-4">
                      {/* Price and Quantity in same line */}
                      <div className="flex items-center space-x-4 border border-gray-300 rounded-md px-3 py-1">
                        {/* Item Price */}
                        <span className="text-sm text-gray-500">{item.price } each</span>

                        {/* Quantity Selector */}
                        <div className="flex items-center space-x-2">
                          <button
                            className="w-8 h-8 bg-gray-200 text-gray-700 rounded"
                            onClick={() => updateQuantity(item.sku, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            className="w-8 h-8 bg-gray-200 text-gray-700 rounded"
                            onClick={() => updateQuantity(item.sku, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => removeFromCart(item.sku)}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </div>
                  </div>

                  {/* Total Units and Total Cost Section (Outside the Container) */}
                  <div className="mt-2 text-sm text-right px-16 py-0">
                    <div>
                      Total units: <span className="text-blue-600">{item.quantity}</span>
                    </div>
                    <div>
                      Total cost:{" "}
                      <span className="text-blue-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Order Summary Section */}
      <aside className="w-full lg:w-1/3 mt-6 lg:mt-0 lg:ml-4 flex-shrink-0 pt-16">
        <div className="bg-white p-4 border border-gray-300 rounded-md shadow-sm">
          <h3 className="text-lg font-bold mb-4">Order summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal ({cartItems.length} item{cartItems.length > 1 ? "s" : ""}):</span>
              <span>
                ${cartItems
                  .reduce((total, item) => total + (item.priceEach || 0) * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Shipping:</span>
              <span>$4.95</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Sales tax:</span>
              <span>$0.39</span>
            </div>
          </div>

          <div className="flex justify-between text-lg font-bold mt-4">
            <span>Total:</span>
            <span>
              ${(
                cartItems.reduce((total, item) => total + (item.priceEach || 0) * item.quantity, 0) +
                4.95 +
                0.39
              ).toFixed(2)}
            </span>
          </div>

          <button className="w-full mt-6 bg-[#E20000] text-white py-3 rounded-md text-lg hover:bg-[#b80000] transition">
            Secured checkout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Cart;
