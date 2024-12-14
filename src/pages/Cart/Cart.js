import React from "react";
import { useCart } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import mastercardIcon from "../../images/icons/mastercard.svg";
import visaIcon from "../../images/icons/visa.svg";
import paypalIcon from "../../images/icons/paypal.svg";
import amexIcon from "../../images/icons/am.svg";
import discoverIcon from "../../images/icons/discover.svg";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const PaymentMethods = () => {
    return (
      <div className="bg-white p-4 border border-white shadow-sm mt-6">
        <div className="flex items-center justify-end space-x-4">
          {/* Payment Method Text on the Left */}
          <h3 className="text-lg ">payment methods</h3>

          {/* Icons placed on the right with larger size */}
          <div className="flex space-x-6">
            {/* Visa Icon */}
            <img src={visaIcon} alt="Visa" className="w-16 h-16" />

            {/* PayPal Icon */}
            <div className="flex items-center space-x-2">
              <img src={paypalIcon} alt="PayPal" className="w-16 h-16" />
            </div>

            {/* Mastercard Icon */}
            <img src={mastercardIcon} alt="Mastercard" className="w-16 h-16" />

            {/* Discover Icon */}
            <img src={discoverIcon} alt="Discover" className="w-16 h-16" />

            {/* American Express Icon */}
            <img src={amexIcon} alt="American Express" className="w-16 h-16" />
          </div>
        </div>
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      <div className="flex flex-grow w-full max-w-screen-xl mx-auto px-4">
        {/* Main Content Section (Product Details) */}
        <main className="flex-grow lg:w-2/3 p-4">
          <h2 className="text-2xl font-bold mb-6">Your cart</h2>

          {/* If cart is empty */}
          {cartItems.length === 0 ? (
            <p className="text-gray-500">
              Your cart is empty. Add items to your cart to proceed.
            </p>
          ) : (
            <div className="bg-white border border-gray-300 shadow-sm p-4">
              {/* Fast Track Label */}
              <div className="text-right pr-4 pt-2">
                <span className="text-orange-600 italic">FAST TRACK</span>
                <hr className="mt-2 -mx-4 -mr-8 border-t border-gray-200" />
              </div>
              {/* Single Small Container for All Product Details */}
              <div className="p-0 border border-gray-200 mt-4">
                {cartItems.map((item, index) => (
                  <div
                    key={item.sku}
                    className={`flex flex-col pb-4 ${index !== cartItems.length - 1 ? "border-b border-gray-200" : ""
                      }`}
                  >
                    {/* Product Image and Details */}
                    <div className="flex items-center justify-between px-4 pt-4">
                      <div className="flex items-center">
                        <img
                          src={item.img}
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
                          <span className="text-sm text-gray-500">{item.price} each</span>

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
                          ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
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
        <aside className="w-full lg:w-1/3 lg:mt-[71px] lg:ml-2 flex-shrink-0">
          <div className="bg-white p-4 border border-gray-300 shadow-sm pb-12">
            <h3 className="text-lg font-bold mb-4">Order summary</h3>

            {/* Ship to Section */}
            <div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>
                  Ship to: <strong className="font-semibold">12323</strong>
                </span>
                <a href="#" className="text-blue-600 hover:underline text-sm">
                  Change zip
                </a>
              </div>
              <hr className="border-t border-gray-200 mb-4" />
            </div>

            {/* Subtotal, FAST TRACK, Sales Tax */}
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal ({cartItems.length} item{cartItems.length > 1 ? "s" : ""}):</span>
                <span>
                  ${cartItems
                    .reduce((total, item) => 
                      total + parseFloat(item.price.replace('$', '')) * item.quantity
                    , 0)
                    .toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-orange-600 italic">
                <span>FAST TRACK</span>
                <span>$4.95</span>
              </div>
              <div>
                <div className="flex justify-between text-gray-700">
                  <span>Sales tax:</span>
                  <span>$0.39</span>
                </div>
                <hr className="border-t border-gray-200 mt-2" />
              </div>
            </div>

            {/* Total */}
<div className="flex justify-between text-lg font-bold mt-4">
  <span>Total:</span>
  <span>
    ${(
      cartItems.reduce(
        (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
        0
      ) +
      4.95 + // FAST TRACK fee
      0.39 // Sales tax
    ).toFixed(2)}
  </span>
</div>


            {/* Checkout Button */}
            <button className="w-full mt-6 bg-[#E91E63] text-white py-3 rounded-md text-lg hover:bg-[#c2185b] transition flex items-center justify-center space-x-2">
              <span>&#128274;</span> {/* Lock Icon */}
              <span>Secured checkout</span>
            </button>
          </div>

          {/* Easy Returns Section */}
          <div className="flex flex-col items-center justify-center mt-6 px-4">
            <div className="flex items-center space-x-2 text-gray-700">
              {/* Returns Icon */}
              <div className="text-[#E91E63] text-2xl">
                &#x21B6; {/* Unicode Return Icon */}
              </div>
              <p className="font-bold text-black">Easy returns</p>
              <p className="text-sm text-gray-600">
                No restocking fee for <strong>90 days</strong>!
              </p>
            </div>

            {/* View Return Policy - Centered */}
            <a
              href="#"
              className="text-blue-600 hover:underline mt-2 text-sm text-center"
            >
              View return policy
            </a>
          </div>
        </aside>
      </div>

      {/* Payment Methods Section at the bottom */}
      <PaymentMethods />
    </div>
  );
};

export default Cart;
