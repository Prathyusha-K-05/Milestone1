// src/components/MenuCard.js
import React from "react";
import { useCart } from "../CartContext";

const MenuCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <div className="card-content">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-description">{item.description}</p>
        <p className="card-price">₹{item.price}</p>
        <button
          className="card-button"
          onClick={() => addToCart(item)}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default MenuCard;


