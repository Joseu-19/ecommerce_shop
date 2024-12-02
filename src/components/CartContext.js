import React, { createContext, useContext, useState } from 'react';

// Create a Context
const CartContext = createContext();

// Custom Hook to use Cart Context
export const useCart = () => useContext(CartContext);

// Provider Component to wrap around the app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart,}}>
      {children}
    </CartContext.Provider>
  );
};
