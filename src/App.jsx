// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MenuList from "./components/MenuList";
import Cart from "./components/Cart";
import { CartProvider, useCart } from "./CartContext";
// import FeedbackForm from "./components/FeedbackForm";
import "./index.css";

const Popup = () => {
  const { popupMessage } = useCart();

  if (!popupMessage) return null;

  return <div className="popup">{popupMessage}</div>;
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <nav>
            <Link to="/">Menu</Link> | <Link to="/cart">Cart</Link>
          </nav>
          <Popup />
          <Routes>
            <Route path="/" element={<MenuList />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/feedback-form" element={<FeedbackForm />} /> */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;

