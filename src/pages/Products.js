import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MerchCard from '../components/MerchCard'; // Assuming you have a MerchCard component

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 48;

  const fetchProducts = async (newOffset) => {
    try {
      const response = await axios.get('https://asos2.p.rapidapi.com/products/v2/list', {
        params: {
          store: 'US',
          offset: newOffset.toString(),
          categoryId: '8799',
        //   loungewear 6046
          country: 'US',
          sort: 'freshness',
          currency: 'USD',
          sizeSchema: 'US',
          limit: limit.toString(),
          lang: 'en-US',
        },
        headers: {
          'x-rapidapi-host': 'asos2.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        }
      });
  
      console.log(response.data.products); // Log data to inspect structure
  
      setProducts(prevProducts => [...prevProducts, ...response.data.products]); // Append new products
    } catch (error) {
      console.error('Error fetching the products:', error);
    }
  };
  

  useEffect(() => {
    fetchProducts(offset); // Fetch initial products when the component mounts
  }, []);

  const loadMoreProducts = () => {
    const newOffset = offset + limit;
    setOffset(newOffset); // Update offset
    fetchProducts(newOffset); // Fetch more products with the updated offset
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-auto gap-5">
        {products.map((product) => (
          <MerchCard key={product.id} product={product} />
        ))}
      </div>
      <button 
        onClick={loadMoreProducts} 
        className="mt-4 w-full py-2 bg-blue-500 text-white rounded"
      >
        Load More
      </button>
    </div>
  );
};

export default ProductsPage;
