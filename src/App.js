// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layouts/Layout'; // Common layout with navigation
import Products from './pages/Products'; // Import ProductsPage

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} /> {/* Redirect from root */}
          <Route path="/products" element={<Products />} />  {/* Products path */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
