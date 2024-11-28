// src/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/products">Products</Link>
          {/* Add more links for other pages */}
        </nav>
      </header>
      <main>{children}</main>
    
    </div>
  );
};

export default Layout;
