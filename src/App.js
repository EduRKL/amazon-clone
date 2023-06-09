import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from "./Checkout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
  
}

export default App;
