import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useFetchProducts from '../components/UseFetchProducts';
import MerchCardCarousel from '../components/MerchCarousel';
import ProductDetails from '../components/ProductDetails';
import { useCart } from '../components/CartContext';

const OrderPage = () => {
  const location = useLocation();
  const { productId: paramProductId } = useParams();
  const productId = location.state?.productId || paramProductId;

  const { products, fetchProductDetails, productDetails, productImages } = useFetchProducts();
  const { addToCart } = useCart(); // Access addToCart function from CartContext

  // Find the product from the products array using the productId
  const product = products.find((prod) => prod.id === parseInt(productId));

  // If product not found in the local products state, fetch details from API
  useEffect(() => {
    if (!product && productId) {
      fetchProductDetails(productId);
    }
  }, [product, productId, fetchProductDetails]);

  return (
    <div className="order-page p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
        {/* Carousel Component for Product Images */}
        <div className="productDetailResize p-4">
          {productImages && productImages.length > 0 ? (
            <MerchCardCarousel images={productImages} />
          ) : (
            <p>No images available for this product.</p>
          )}
        </div>

        {/* Product Detail Component */}
        <div className="productDetailResize1">
          <ProductDetails product={product || productDetails} onAddToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
