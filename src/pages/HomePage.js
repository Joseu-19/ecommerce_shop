import React from 'react';
import Hero from '../components/Hero'; 

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="home-content text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to BESOS.CO</h1>
        <p className="text-lg text-gray-700 ">
          This is a mock e-commerce store made with the ASOS API. Fun fact the official ASOS website fetches its data from the same API. 
        </p>
      </div>
    </div>
  );
};

export default Home;
