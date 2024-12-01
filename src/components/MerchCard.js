import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';

const MerchCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Handle click event to navigate to the Order page
  const handleCardClick = () => {
    navigate(`/order/${product.id}`, {
      state: {
        productId: product.id,
        productName: product.name,
        currentPrice: product.price?.current?.text,
      },
    });
  };

  // Handle add to cart button click
  const handleAddToCart = (event) => {
    event.stopPropagation(); // Prevent navigating to the Order page
    addToCart(product);
  };

  return (
    <div 
      className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative mx-4 mt-4 h-auto overflow-hidden rounded-xl">
        <img
          src={`https://${product.imageUrl.replace(/^https?:\/\//, '')}`}
          alt={product?.name || 'Default Name'}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
          {product?.name || 'No name available'}
        </p>
        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
          {product?.price?.current?.text || 'Price unavailable'}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MerchCard;
