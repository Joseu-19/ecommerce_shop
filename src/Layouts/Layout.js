// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { useCart } from '../components/CartContext';

const Layout = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
  ];

  const { cartItems } = useCart();

  return (
    <div>
      {/* Header with background image and title */}
      <Header backgroundPic="background-image.jpg" title="Welcome to BEsos" />

      {/* NavBar */}
      <NavBar logoSrc="./images/Logo.png" navItems={navItems} cartCount={cartItems.length} />

      {/* Main content rendered below the NavBar */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
