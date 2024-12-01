import React from 'react';

const AddToCartButton = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    if (onAddToCart && product) {
      console.log("Adding to cart:", product); // Add a console log to help debug
      onAddToCart(product);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="block w-full select-none rounded-lg bg-blue-600 text-white py-2 px-4 text-center align-middle font-sans text-sm font-bold uppercase transition-all hover:bg-blue-700 mt-60 focus:ring-4 focus:ring-blue-300 focus:outline-none"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
