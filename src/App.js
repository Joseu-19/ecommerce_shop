// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layouts/Layout';
import ProductsPage from './pages/Products';
import OrderPage from './pages/Order';
import Home from './pages/HomePage';
import { CartProvider } from './components/CartContext'; // Import CartProvider
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/order/:productId" element={<OrderPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
