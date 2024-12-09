import React from "react";
import { NewarkImgLogo } from "../images";
import { Link } from "react-router-dom";

const Subscribe = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-6 sm:p-8 lg:p-12 bg-[#E6F0FA] rounded-lg">
      {/* Information Sections */}
      <div className="flex flex-col lg:flex-row lg:space-x-8 gap-y-6 lg:gap-y-0">
        {/* Logo - Leftmost Position */}
        <Link
          to="/"
          aria-label="Home"
          onClick={scrollToTop}
          className="flex-shrink-0"
        >
          <img
            src={NewarkImgLogo}
            alt="Truck Parts Logo"
            className="h-20 w-auto mb-4 lg:mb-0 lg:h-[150px]" // Adjust logo size for different screens
          />
        </Link>

        {/* Customer Service */}
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-2">Customer Service</h4>
          <ul className="text-gray-500 space-y-3">
            <li>
              <a href="#help" className="hover:text-gray-800">
                Help Center
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-800">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-gray-800">
                Support
              </a>
            </li>
          </ul>

          {/* Store Location Section */}
          <div className="mt-8">
            <h4 className="font-semibold mb-2">Store Location</h4>
            <p className="text-gray-500">
              451 Frelinghuysen Ave, Newark, NJ 07114 
            </p>
          </div>
        </div>

        {/* About Us */}
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-2">About Us</h4>
          <ul className="text-gray-500 space-y-3">
            <li>
              <a href="#ourstory" className="hover:text-gray-800">
                Our Story
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-gray-800">
                Careers
              </a>
            </li>
            <li>
              <a href="#news" className="hover:text-gray-800">
                News
              </a>
            </li>
          </ul>
        </div>

        {/* Resources & Tools */}
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-2">Resources & Tools</h4>
          <ul className="text-gray-500 space-y-3">
            <li>
              <a href="#blog" className="hover:text-gray-800">
                Blog
              </a>
            </li>
            <li>
              <a href="#guides" className="hover:text-gray-800">
                Guides
              </a>
            </li>
            <li>
              <a href="#tools" className="hover:text-gray-800">
                Tools
              </a>
            </li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div className="flex-1 text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            SUBSCRIBE FOR MORE
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Stay in the know with top brands & product spotlights!
          </p>

          {/* Subscription Form */}
          <form className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Email address"
              className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-indigo-200"
              style={{
                maxWidth: "445px",
                height: "44px",
              }}
            />
            <button
              type="submit"
              className="bg-[#004E98] text-white px-4 py-2 w-24 rounded-r-md hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
