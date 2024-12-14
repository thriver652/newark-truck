import React, { useContext } from "react"; // Single import statement for React and useContext
import { Link } from "react-router-dom"; // Import Link for navigation
import { truckParts } from "../../data/truckPartsData"; // Import truck parts data
import { ProductContext } from "../../context/ProductContext"; // Import ProductContext



// Add a placeholder image URL for the truck parts
const placeholderImage = "https://via.placeholder.com/150"; // Replace with actual image URLs if needed

const TruckPartCards = () => {
  const { setSelectedProduct } = useContext(ProductContext);
  
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {truckParts.map((part, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-start space-y-4 hover:shadow-2xl transition-shadow duration-300"
          >
             {/* Link to Product Details with SKU */}
            <Link
              to={`/productdetails`}
              className="w-full h-48 bg-gray-200 rounded-lg mb-4"
              onClick={() => setSelectedProduct(part)} // Set the selected product in context
            >
              <img
                src={part.img}
                alt={part.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </Link>

            <h4 className="font-semibold text-xl text-gray-800">{part.name}</h4>
            <p className="text-gray-600 text-sm">SKU: {part.sku}</p>
            <p className="text-gray-600 text-sm">Brand: {part.brand}</p>
            <p className="text-gray-600 text-sm">In stock: {part.stock}</p>
            <p className="text-green-600 font-semibold text-lg">
              {part.priceEach} each
            </p>
            <p className="text-gray-500 line-through text-sm">
              {part.priceBox}
            </p>
            <p className="text-sm text-gray-500">Get by: {part.deliveryDate}</p>
            <button className="mt-4 bg-[#E31B54] text-white px-6 py-2 rounded-lg hover:bg-[#B91A42] transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TruckPartCards;
