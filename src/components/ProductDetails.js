import React, { useContext } from "react";
import { useCart } from "../context/CartContext"; // Assuming you have a Cart context
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom"; 

const ProductDetails = () => {
  const { selectedProduct } = useContext(ProductContext);
  const { addToCart } = useCart();
  const navigate = useNavigate();


  if (!selectedProduct) {
    return <p>No product selected. Please go back and choose a product.</p>;
  }
  

  const handleAddToCart = () => {
    addToCart({
      name: selectedProduct.name,
      price: selectedProduct.priceEach,
      stock: selectedProduct.stock,
      priceBox: selectedProduct.priceBox,
      deliveryDate: selectedProduct.deliveryDate,
      brand: selectedProduct.brand,
      sku: selectedProduct.sku,}); // Add product to the cart
    navigate("/cart"); // Navigate to CartDetails
  };

  const price = selectedProduct.priceEach
    ? parseFloat(selectedProduct.priceEach.replace('$', '')).toFixed(2)
    : "N/A";

    const boxPrice = (price * 12).toFixed(2);
    const perBoxPrice = (price - 0.07).toFixed(2);
  
    return (
      <div className="min-h-screen bg-[#F9FAFB]">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 px-8 py-4">
          Home &rsaquo; Plumbing supplies &rsaquo; Sub category 02 &rsaquo; Product
        </div>
  
        {/* Main Content */}
        <div className="flex px-8 py-8 gap-8">
          {/* Product Image and Gallery */}
          <div className="w-1/2">
            <div className="relative mb-4">
              <img
                src={selectedProduct.image || "https://via.placeholder.com/500"}
                alt={selectedProduct.name || "Product Image"}
                className="w-full h-auto object-cover rounded-md max-h-[400px]"
              />
              <p className="absolute bottom-2 left-2 text-gray-700 text-xs bg-white p-1 rounded-md">
                Hover over image to zoom
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              {[...Array(4)].map((_, index) => (
                <img
                key={index}
                src={selectedProduct.galleryImages?.[index] || "https://via.placeholder.com/100"}
                alt={`Thumbnail ${index + 1}`}  // Corrected template literal
                className="w-20 h-20 object-cover rounded-md cursor-pointer border border-gray-300 hover:border-blue-500"
              />
              
              ))}
            </div>
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
  
            {/* Price Options Section */}
            <div className="relative mt-4 bg-gray-100 p-4 rounded-md w-[90%]">
              <div className="absolute top-0 right-0 bg-red-100 text-red-600 px-2 py-1 text-xs font-bold rounded-tr-md">
                SAVE 20%
              </div>
  
              <div className="flex justify-between items-start space-x-2">
                <div className="flex flex-col items-start w-full">
                  <p className="text-sm font-bold">${price} each</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <button className="w-8 h-8 border text-gray-600 text-lg">-</button>
                    <input
                      type="number"
                      value="1"
                      className="w-12 text-center border text-xl"
                      readOnly
                    />
                    <button className="w-8 h-8 border text-gray-600 text-lg">+</button>
                  </div>
                </div>
  
                <div className="flex flex-col items-start w-full mt-[5px]">
                  <p className="text-sm font-bold">
                    ${boxPrice} box of 12 (${perBoxPrice} each)
                  </p>
                  <div className="flex items-center space-x-1 mt-1">
                    <button className="w-8 h-8 border text-gray-600 text-lg">-</button>
                    <input
                      type="number"
                      value="1"
                      className="w-12 text-center border text-xl"
                      readOnly
                    />
                    <button className="w-8 h-8 border text-gray-600 text-lg">+</button>
                  </div>
                </div>
              </div>
            </div>
  
            <button
              className="mt-4 bg-[#E20000] text-white py-3 px-[32px] rounded-md text-lg hover:bg-[#b80000] transition w-[90%]"
              onClick={handleAddToCart}
              disabled={selectedProduct.stock === 0}
            >
              Add to Cart
            </button>
  
            <p
              className={`text-lg font-bold mt-6 ${
                selectedProduct.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {selectedProduct.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
  
            {/* Delivery Information Section */}
            <p className="text-sm text-gray-600 mt-2">
              Get by <strong>Thu, Oct 17</strong>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <span className="text-red-600 font-bold">FAST TRACK</span> Order by <strong>5pm</strong> Get by <strong>Thu, Oct17 </strong>
            </p>
            <p className="mt-1">
              <span className="text-black-600 cursor-pointer">More stock available</span>
              <span className="text-blue-600 cursor-pointer font-medium">  Inventory details </span>
  
            </p>
  
            {/* Shipping and Highlights */}
            <div className="mt-6 border-t pt-4">
              <ul className="text-black-600 text-sm space-y-2">
                <li><strong>Free shipping</strong> on orders above $99</li>
                <li><strong>Easy returns</strong> with no restocking fee for 90 days</li>
              </ul>
            </div>
  
            {/* Description Section */}
            <div className="mt-8 border-t pt-4">
              <h3 className="text-lg font-bold mb-4">Description</h3>
              <p className="text-gray-600 text-sm">Crossbar Junction</p>
            </div>
  
            {/* Product Highlights */}
            <div className="mt-8 border-t pt-4 pb-4">
              <h3 className="text-lg font-bold mb-4">Product Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <img src="/icons/size-icon.svg" alt="" className="w-5 h-5 mr-2" />
                  <span>1/4"</span>
                </div>
                <div className="flex items-center">
                  <img src="/icons/size-icon.svg" alt="" className="w-5 h-5 mr-2" />
                  <span>Iron</span>
                </div>
                <div className="flex items-center">
                  <img src="/icons/size-icon.svg" alt="" className="w-5 h-5 mr-2" />
                  <span>Threaded Connection</span>
                </div>
                <div className="flex items-center">
                  <img src="/icons/size-icon.svg" alt="" className="w-5 h-5 mr-2" />
                  <span>Female thread type</span>
                </div>
              </div>
            </div>
  
            {/* Specs */}
            <div className="mt-8 border-t">
              <h3 className= "text-lg font-bold mb-4 pt-6">Specs</h3>
              <ul className= "text-sm text-gray-700 space-y-4 font-medium">
                <li><strong>Size:</strong> 1/4"</li>
                <li><strong>Thread type:</strong> Female</li>
                <li><strong>Material:</strong> Iron</li>
                <li><strong>Connection type:</strong> Threaded</li>
              </ul>
            </div>
  
            {/* Contact Section */}
  <div className="mt-8">
    <h3 className="text-lg font-semibold mb-4">Contact</h3>
    <div className="grid md:grid-cols-2 gap-6 bg-blue-50 p-6 rounded-lg">
      {/* Have a Question Column */}
      <div>
        <h4 className="text-base font-bold mb-4">Have a question?</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start">
            <span className="mr-2">📱</span>
            <div>
              <p>
                Text: <a href="tel:123-456-7890" className="text-blue-600 hover:underline">123-456-7890</a>
              </p>
              <p className="flex items-center text-gray-500 text-xs">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Available 7 am
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">📞</span>
            <div>
              <p>
                Call: <a href="tel:123-456-7890" className="text-blue-600 hover:underline">123-456-7890</a>
              </p>
              <p className="flex items-center text-gray-500 text-xs">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Available 9 am - 5 pm
              </p>
            </div>
          </li>
  
          {/* Email Section with Divider */}
          <li className="flex flex-col items-start">
            <div className="w-full h-px bg-gray-300 my-3"></div> {/* Horizontal Divider */}
            <div className="flex items-start">
              <span className="mr-2">📧</span>
              <div>
                <p>
                  Email: <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a>
                </p>
                <p className="text-gray-500 text-xs">Response by Wed</p>
              </div>
            </div>
          </li>
  
          <li className="flex items-start">
            <span className="mr-2">💬</span>
            <div>
              <p>Live chat</p>
              <p className="flex items-center text-gray-500 text-xs">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Available 7 am
              </p>
            </div>
          </li>
        </ul>
        <p className="mt-4 text-gray-500 text-xs">
          <strong>Hours:</strong><br />
          Monday - Saturday: 7 am - 8 pm<br />
          Sunday: 7 am - 12 pm
        </p>
      </div>
  
      {/* Vertical Margin Between Columns */}
      <div className="border-t-2 md:border-t-0 md:border-l-2 border-gray-300 mt-6 md:mt-0 md:pl-6">
        {/* Quick Support Column */}
        <h4 className="text-base font-bold mb-4">Quick Support</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/order-status" className="text-blue-600 hover:underline">Order status</a>
          </li>
          <li>
            <a href="/shipping-policy" className="text-blue-600 hover:underline">Shipping policy</a>
          </li>
          <li>
            <a href="/returns" className="text-blue-600 hover:underline">Returns</a>
          </li>
          <li>
            <a href="/stock-availability" className="text-blue-600 hover:underline">Stock availability</a>
          </li>
          <li>
            <a href="/request-item" className="text-blue-600 hover:underline">Request item</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
          </div>
        </div>
      </div>
      
    );
  };
  
  export default ProductDetails;