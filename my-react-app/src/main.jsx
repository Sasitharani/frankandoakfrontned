import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Header from './common/Header.jsx';
import Cart from './pages/Cart.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails.jsx';
import MainContext from './context/mainContext.jsx';

let route =createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/cart',
    element:<Cart />
  },
  {
    path:'/productdetails',
    element:<ProductDetails />
  },
  {
    path:'/product-details/',
    element:<Cart />
  },

])
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <MainContext>
    <RouterProvider router={route} />
    </MainContext>
  </StrictMode>
);
