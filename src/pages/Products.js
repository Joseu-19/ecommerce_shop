import React, { useState } from 'react';
import MerchCard from '../components/MerchCard';
import MerchModal from '../components/MerchModal';
import useFetchProducts from '../components/UseFetchProducts';

const ProductsPage = () => {
  const { products, fetchMore, isLoading, error } = useFetchProducts(); // Use custom hook
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4">
      {error && <p className="text-red-500 text-center">{error}</p>}
      {isLoading && <p className="text-center">Loading products...</p>}

      {/* Product Cards Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {products.map((product) => (
            <MerchCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      ) : (
        !isLoading && <p className="text-center">No products available</p>
      )}

      {/* Load More Button */}
      <button
        onClick={fetchMore}
        className="mt-4 w-full py-2 bg-blue-500 text-white rounded"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Load More'}
      </button>

      {/* Modal to show cart items */}
      <MerchModal isOpen={isModalOpen} items={cartItems} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ProductsPage;
