This is BESOS.co a mock e-shop made with the ASOS API

Project Overview
Besos.co is a simple e-commerce store where users can browse clothes from the official ASOS site.

Tools/technologies used
React
Axios
React Router
Context API for Cart-Context component

How React Hooks and Props were used

I used a prop to pass product data to the MerchCard component in the products page

Event handlers such as onAddToCart were also passed as props to child components like AddToCartButton to manage cart interactions.

The useFetchProducts component is a Hook that I used to encapsulate the logic for fetching data from the API. This hook returns products array, fetchMore function, and loading error states. This approach allowed me to use pagination in the Products page.

To run this project simply run npm install
