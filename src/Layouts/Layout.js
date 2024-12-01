import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'; // Assuming the Header component is in the components folder
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'; // Import the Footer component

const Layout = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with background image and title */}
      <Header backgroundPic="background-image.jpg" title="Welcome to BEsos" />

      {/* NavBar */}
      <NavBar logoSrc="./images/Logo.png" navItems={navItems} />

      {/* Main content rendered below the NavBar */}
      <main className="flex-grow">
        <Outlet /> {/* This is where nested routes like Home and Products will be rendered */}
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Layout;
