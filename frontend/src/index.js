import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landingpage/home/HomePage";
import Signup from "./landingpage/signup/Signup";
import Aboutpage from "./landingpage/about/Aboutpage";
import Productpage from "./landingpage/products/Productpage";
import PricingPage from "./landingpage/pricing/PricingPage";
import SupportPage from "./landingpage/support/SupportPage";
import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";
import Notfound from "./landingpage/Notfound";
import { ToastContainer } from "react-toastify";
import  Login  from "./landingpage/signup/Login";

import 'react-toastify/dist/ReactToastify.css';


import "./index.css";

import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CookiesProvider>

 

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<Login />} />
    
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
      <ToastContainer/>
    </BrowserRouter>

  </CookiesProvider>

);