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
    <div>
      <nav className={`clearfix navbar ${isFixed ? 'fixed-navbar' : ''}`}>
        <div className="navbar-logo">
          <Link to="/">🍴 Foodie</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/Home" className={(location.pathname === "/Home")? "blue" : ""}>Home</Link>
          </li>
          <li>
            <Link to="/menu" className={location.pathname === "/menu"? "blue" : ""}>Menu</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about"? "blue" : ""}>About Us</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === "/contact"? "blue" : ""}>Contact</Link>
          </li>
        </ul>
        <div className="navbar-cart">
          <Link to="/cart" className={location.pathname === "/cart"? "blue" : ""}>🛒 Cart</Link>
        </div>
      </nav>
      <div className="clear">
      </div>
    </div>
  );
};

export default Navbar;
