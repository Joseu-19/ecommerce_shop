import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import AddToCartButton from './AddtoCartButton';

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
  const handleAddToCart = (productToAdd) => {

    // Add product to the cart with necessary details
    const item = {
      id: productToAdd.id,
      name: productToAdd.name,
      currentPrice: productToAdd.price?.current?.text,
      imageUrl: `https://${productToAdd.imageUrl.replace(/^https?:\/\//, '')}`, //Reformating the url
    };
    addToCart(item);
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
        {/* Use AddToCartButton Component */}
        <AddToCartButton product={product} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default MerchCard;
