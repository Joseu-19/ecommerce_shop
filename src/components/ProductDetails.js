import React from 'react';
import AddToCartButton from './AddtoCartButton';
import Accordion from '../components/Accordion';


// Assuming you've already created this button component
const ProductDetail = ({ name, currentPrice, product, onAddToCart }) => {
  // Define the accordion data here
  const accordionData = [
    {
      title: 'Product Description',
      content: product?.description || 'No description available', // Assuming product has a description property
    },
    {
      title: 'Shipping Information',
      content: 'Standard shipping takes 3-5 business days.',
    },
    {
      title: 'Return Policy',
      content: 'You can return the product within 30 days of purchase.',
    },
  ];

  return (
    <div className="productDetailsCard bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      {/* Product Name */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {name || 'No name available'}
      </h1>

      {/* Price Information */}
      <div className="flex items-center space-x-4 mb-4">
        <p className="text-xl font-semibold text-black">
          {currentPrice ? `Current Price: ${currentPrice}` : 'Price unavailable'}
        </p>
      </div>

      {/* Accordion Component */}
      <Accordion data={accordionData} />

      {/* Add to Cart Button */}
      <AddToCartButton product={product} onAddToCart={onAddToCart} />
    </div>
  );
};

export default ProductDetail;
