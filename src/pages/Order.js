import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useFetchProducts from '../components/UseFetchProducts';
import MerchCardCarousel from '../components/MerchCarousel';
import ProductDetail from '../components/ProductDetails';

const OrderPage = ({ onAddToCart }) => {
  const location = useLocation();
  const { productId: paramProductId } = useParams(); // Get productId from the URL
  const productId = location.state?.productId || paramProductId; // Use either state or URL param

  // Use custom hook to get all products
  const { products, fetchProductDetails, productDetails, productImages } = useFetchProducts();

  // Find the product directly from the products array using the productId
  const product = products.find((prod) => prod.id === parseInt(productId));

  // If product not found in the local products state, fetch details from API
  useEffect(() => {
    if (!product && productId) {
      fetchProductDetails(productId);
    }
  }, [product, productId, fetchProductDetails]);

  // Extract necessary details for ProductDetail component
  const productName = product ? product.name : productDetails?.name;
  const currentPrice = product ? product.price?.current?.text : productDetails?.price?.current?.text;

  return (
    <div className="order-page p-4">
      {/* 1x2 Horizontal Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8">
        {/* Carousel Component for Product Images (Left Side) */}
        <div className="productDetailResize p-4">
          {productImages && productImages.length > 0 ? (
            <MerchCardCarousel images={productImages} />
          ) : (
            <p>No images available for this product.</p>
          )}
        </div>

        {/* Product Detail Component and Accordion (Right Side) */}
        <div className="productDetailResize1 p-4">
          <ProductDetail
            name={productName}
            currentPrice={currentPrice}
            product={product}
            onAddToCart={onAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
