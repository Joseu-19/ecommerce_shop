import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = (initialOffset = 0, limit = 20, categoryId = '13491') => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(initialOffset);
  const [productImages, setProductImages] = useState([]); // State to hold additional images

  const fetchProducts = async (newOffset) => {
    try {
      const response = await axios.get('https://asos2.p.rapidapi.com/products/v2/list', {
        params: {
          offset: newOffset.toString(),
          categoryId,
          currency: 'USD',
          limit: limit.toString(),
        },
        headers: {
          'x-rapidapi-host': 'asos2.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        },
      });

      // Merge products without duplicates based on unique product ID
      setProducts((prevProducts) => {
        const newProducts = response.data.products.filter(
          (newProduct) => !prevProducts.some((prevProduct) => prevProduct.id === newProduct.id)
        );
        return [...prevProducts, ...newProducts];
      });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchProductDetails = async (productId) => {
    try {
      const response = await axios.get(`https://asos2.p.rapidapi.com/products/v4/detail`, {
        params: {
          id: productId,
        },
        headers: {
          'x-rapidapi-host': 'asos2.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        },
      });

      // Extract additional images from the media object
      const images = response.data?.media?.images?.map((image) => `https://${image.url}`);
      setProductImages(images || []); // Set product images or an empty array if not available

    } catch (error) {
      console.error('Error fetching product details:', error);
      console.error('Error details:', JSON.stringify(error, null, 2)); // Pretty-print for readability
    }
  };

  useEffect(() => {
    fetchProducts(offset);
  }, []); // Empty dependency array ensures it only runs on mount

  return {
    products,
    productImages, // Include product images in the return object
    fetchMore: () => {
      const newOffset = offset + limit;
      setOffset(newOffset);
      fetchProducts(newOffset);
    },
    fetchProductDetails,
  };
};

export default useFetchProducts;
