import React, { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
import { NewarkLogo, Avatar, SearchIcon } from "../images";
import { useNavigate, Link } from "react-router-dom";
import SupportBox from "./ContactAndSupport/SupportBox";

function TopHeader() {
  const [cartCount, setCartCount] = useState(2);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSupportBoxOpen, setIsSupportBoxOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleSignInClick = () => navigate("/signin");
  const handleCartClick = () => navigate("/cart");
  const toggleSupportBox = () => setIsSupportBoxOpen(!isSupportBoxOpen);

  const userActions = [
    {
      icon: <FiUser className="text-2xl text-navbarBlue cursor-pointer" />,
      label: "SIGN IN",
      onClick: handleSignInClick,
      className: "hidden md:flex flex-col items-center",
    },
    {
      icon: <FiShoppingCart className="text-2xl text-navbarBlue" />,
      label: "CART",
      onClick: handleCartClick,
      className: "hidden md:flex flex-col items-center relative cursor-pointer",
      cartCount: cartCount,
    },
  ];

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo: Always leftmost */}
        <div className="flex-shrink-0">
          <Link to="/" aria-label="Home">
            <img
              src={NewarkLogo}
              alt="Truck Parts Logo"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Search Bar (Center on Larger Screens, Collapsing on Mobile) */}
        <div className="hidden md:flex flex-grow justify-center mx-4">
          <div className="relative w-full max-w-[696px]">
            <input
              id="search"
              type="text"
              placeholder="Search for a product, brand or SKU"
              className="w-full h-[56px] px-4 border border-gray-300 rounded-md focus:outline-none"
            />
            <div className="w-[56px] h-[56px] absolute inset-y-0 right-0 flex items-center bg-[#004E98] hover:bg-blue-600 rounded-r-md cursor-pointer">
              <img
                src={SearchIcon}
                alt="Search Icon"
                className="h-6 w-6 m-4 text-white"
              />
            </div>
          </div>
        </div>

        {/* User Actions & Cart */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* User Avatar */}
          <img
            src={Avatar}
            alt="User Avatar"
            className="h-10 w-10 rounded-full border-2 border-blue-500"
          />

          {/* CONTACT & SUPPORT Button */}
          <div className="relative">
            <div className="flex flex-col items-start mt-2">
              <button
                className="text-navbarBlue font-medium"
                onClick={toggleSupportBox}
              >
                CONTACT & SUPPORT
              </button>
              <span className="text-xs text-green-500">Live chat: Online</span>
            </div>

            {/* SupportBox Component */}
            <SupportBox
              isOpen={isSupportBoxOpen}
              onClose={() => setIsSupportBoxOpen(false)}
            />
          </div>

          {/* Map through user actions */}
          {userActions.map((action, index) => (
            <div
              key={index}
              className={action.className}
              onClick={action.onClick}
            >
              {action.icon}
              <span className="text-sm text-navbarBlue mt-1">
                {action.label}
              </span>
              {action.cartCount && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                  {action.cartCount}
                </span>
              )}
            </div>
          ))}

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              <FiMenu className="text-2xl text-navbarBlue" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 md:hidden">
          <ul className="flex flex-col p-4">
            <li className="py-2">
              <Link to="/signin" className="text-navbarBlue">
                Sign In
              </Link>
            </li>
            <li className="py-2">
              <Link to="/cart" className="text-navbarBlue">
                Cart
              </Link>
            </li>
            <li className="py-2">
              <button onClick={toggleSupportBox} className="text-navbarBlue">
                Contact & Support
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default TopHeader;
