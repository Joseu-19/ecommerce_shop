import React from 'react';
import AddToCartButton from './AddtoCartButton';
import Accordion from '../components/Accordion';

const ProductDetails = ({ product, onAddToCart }) => {
  if (!product) {
    return <p>Loading product details...</p>;
  }

  // Accordion data
  const accordionData = [
    {
      title: 'Care Instructions',
      content: 'Wash with cold water and dry with warm air.',
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

  // Create product object with additional image URL for the cart
  const imageUrl = product.imageUrl
    ? `https://${product.imageUrl.replace(/^https?:\/\//, '')}`
    : 'https://via.placeholder.com/150';

  const productWithImage = {
    ...product,
    imageUrl,
    currentPrice: product.price?.current?.text || 'Price unavailable',
  };

  return (
    <div className="productDetailsCard bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      {/* Product Name */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {product?.name || 'No name available'}
      </h1>

      {/* Price Information */}
      <div className="flex items-center space-x-4 mb-4">
        <p className="text-xl font-semibold text-black">
          {productWithImage.currentPrice}
        </p>
      </div>

      {/* Accordion Component */}
      <Accordion data={accordionData} />

      {/* Add to Cart Button */}
      <AddToCartButton product={productWithImage} onAddToCart={onAddToCart} />
    </div>
  );
};

export default ProductDetails;
