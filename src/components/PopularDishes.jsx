import React from "react";
import DishCard from "./DishCard";
import "./PopularDishes.css";

const dishes = [
  { id: 1, name: "Margherita Pizza", image: "/pizza.jpg", price: "120" },
  { id: 2, name: "Cheeseburger", image: "/Burger.jpg", price: "100" },
  { id: 3, name: "Sushi Platter", image: "/Sushi_platter.jpg", price: "200" },
];

const PopularDishes = () => {
  return (
    <section className="popular-dishes">
      <h2>Popular Dishes</h2>
      <div className="dishes-container">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  );
};

export default PopularDishes;