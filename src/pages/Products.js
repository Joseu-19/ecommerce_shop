import React, { useState } from 'react';
import MerchCard from '../components/MerchCard';
import MerchModal from '../components/MerchModal.js'; // Import the modal component
import useFetchProducts from '../components/UseFetchProducts';

const ProductsPage = () => {
  // Use custom hook to fetch products
  const { products, fetchMore } = useFetchProducts(); 

  // State for managing cart items and modal visibility
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle adding items to the cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setIsModalOpen(true); // Open the modal once an item is added
  };

  return (
    <div className="p-4">

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
        {products.map((product) => (
          <MerchCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart} // Pass the function to MerchCard
          />
        ))}
      </div>

      {/* Load More Button */}
      <button 
        onClick={fetchMore} 
        className="mt-4 w-full py-2 bg-blue-500 text-white rounded"
      >
        Load More
      </button>

      {/* Modal to show cart items */}
      <MerchModal 
        isOpen={isModalOpen} 
        items={cartItems} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default ProductsPage;
