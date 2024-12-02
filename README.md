BESOS.co - A Mock E-Shop

Project Overview
BESOS.co is a mock e-commerce store where users can browse and explore clothing items from the official ASOS store.

Tools and Technologies Used
React:
Used to build the front-end of the application with reusable UI components.

Axios:
Used to make HTTP requests to the ASOS API for fetching product data.

React Router:
Manages navigation between different pages, such as the products list, individual product details, and the home page.

Context API:
Used for state management to maintain the shopping cart (CartContext component), allowing the cart to be accessible globally throughout the application.

How React Hooks and Props were Used

Props were used to pass product data to the MerchCard component on the Products page.

Event handlers, such as onAddToCart, were passed as props to child components like AddToCartButton to manage cart interactions.

React Hooks:

useState: Used for managing local component states, such as cart items, modal visibility, and product data.

useEffect: Used for performing side effects, such as fetching data from the API when a component is first rendered.

Custom Hook useFetchProducts This hook encapsulates the logic for fetching data from the API. It returns the products array, a fetchMore function for pagination, and handles any loading or error states. Using a custom hook allowed for a clean and reusable approach to data fetching.

Component Overview

MerchCard: Displays product information, including name, price, and image. Clicking on it navigates to the product details page.

This component also integrates the "Add to Cart" button.

ProductDetails: Shows detailed product information, including the name, price, and care instructions.

The component also contains an accordion component for additional product details.

MerchModal: Displays the current items in the shopping cart in a modal view.

AddToCartButton: A reusable button component that allows users to add items to their cart.

Layout

The application uses a common Layout component that sets the layout for components present on all pages, such as the navbar, header, and footer.

The Outlet component from React Router was used to render nested components, ensuring a consistent layout across the app.

Accordion Data

The accordion data for product details such as shipping and return policy is hardcoded in the ProductDetail component. I decided to take this approach because I did not want to run into issues with the API since I have a request limit

To run this project simply clone it
cd
npm install.
