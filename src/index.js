import React from "react";
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from "./Checkout";
import reportWebVitals from './reportWebVitals';
import "./index.css"


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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
