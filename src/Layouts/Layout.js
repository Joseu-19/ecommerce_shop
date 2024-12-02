import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'; 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'; 

const Layout = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
     
      <Header backgroundPic="background-image.jpg" title="Welcome to BEsos" />
      
      <NavBar logoSrc="./images/Logo.png" navItems={navItems} />

      <main className="flex-grow">
        <Outlet /> {/* Outlet is used to render more than one component at the same time */}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
