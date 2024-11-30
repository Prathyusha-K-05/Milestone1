import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Foodie</h1>
        <p>Delicious meals delivered fresh to your door.</p>
        <Link to="/menu">
          <button className="menu-button">Explore Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
