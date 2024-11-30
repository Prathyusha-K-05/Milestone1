// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuList from "./components/MenuList";
import Cart from "./components/Cart";
import { CartProvider, useCart } from "./CartContext";
import FeedbackForm from "./FeedbackForm";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PopularDishes from "./components/PopularDishes";
import LoginPage from "./Loginpage";
import SignUpPage from "./SignUpPage";
import AboutUs from "./components/AboutUs";

const Popup = () => {
  const { popupMessage } = useCart();

  if (!popupMessage) return null;

  return <div className="popup">{popupMessage}</div>;
};


const Homee = () => (
  <div>
    <Home />
    <PopularDishes />
  </div>
);
const App = () => {
  return (
    <CartProvider>
      {/* <Navbar/> */}
      <Router>
        <Navbar/>
        <div>
          {/* <nav>
            <Link to="/">Menu</Link> | <Link to="/cart">Cart</Link>
          </nav> */}
          <Popup />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Home" element={<Homee/>}/>
            <Route path="/menu" element={<MenuList/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutUs/>}/>
            
            <Route path="/feedback-form" element={<FeedbackForm />} />
            <Route path="/signup" element={<SignUpPage/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </CartProvider>
  );
};

export default App;

