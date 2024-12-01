// src/components/MerchModal.js
import React from 'react';

const MerchModal = ({ isOpen, items, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
        {items.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 mb-4">
              <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div>
                <p className="font-medium">{item.name}</p>
                <p>{item.currentPrice}</p>
              </div>
            </div>
          ))
        )}
        <button onClick={onClose} className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default MerchModal;
