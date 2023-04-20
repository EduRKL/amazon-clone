import React from "react";
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./Checkout";


   <Header/>
   
   const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/checkout",
      element: <Checkout/>
    }
   ])

   ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
   
   
   
   
  

 

