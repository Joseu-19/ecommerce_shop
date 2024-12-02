import React, { useState } from "react";
import { useCart } from '../components/CartContext';
import MerchModal from './MerchModal';

const Header = ({ backgroundPic, }) => {
  
  // Access cart items from context
  const { cartItems } = useCart(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  return (
    <header
      className=""
      style={{ backgroundImage: `url(./images/${backgroundPic})` }}
    >

      {/* MerchModal Component */}
      {isModalOpen && (
        <MerchModal isOpen={isModalOpen} items={cartItems} onClose={() => setIsModalOpen(false)} />
      )}
    </header>
  );
};

export default Header;
