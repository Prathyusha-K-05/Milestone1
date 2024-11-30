import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";  
import "./Navbar.css"; 

const Navbar = () => {
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
   
    
    if (location.pathname === '/') {
      setIsFixed(false); 
      
    } else {
      setIsFixed(true); 
    }
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isFixed ? 'fixed-navbar' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">🍴 Foodie</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="navbar-cart">
        <Link to="/cart">🛒 Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
