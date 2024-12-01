// src/components/NavBar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MerchModal from "./MerchModal";
import { useCart } from "./CartContext";

const NavBar = ({ logoSrc, navItems, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  // Function to handle opening the modal
  const openCartModal = () => {
    setIsOpen(true);
  };

  // Function to handle closing the modal
  const closeCartModal = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-amber-100 w-full">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex justify-start items-center">
          <Link to="/">
            <img className="logoImg h-28 cursor-pointer" src={logoSrc} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <button
            className="menu-btn text-gray-500 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <div className={`flex-1 md:flex md:items-center md:justify-end ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            {navItems.map((item, index) => (
              <li key={index} className="text-black hover:text-gray-900 hover:text-lg">
                <Link to={item.href} className="block">
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Cart Link to Open Cart Modal */}
            <li className="text-black hover:text-gray-900 hover:text-lg cursor-pointer">
              <span onClick={openCartModal}>Cart ({cartItems.length})</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Cart Modal */}
      <MerchModal isOpen={isOpen} items={cartItems} onClose={closeCartModal} />
    </nav>
  );
};

export default NavBar;
