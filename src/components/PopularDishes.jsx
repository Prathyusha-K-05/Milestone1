import React from "react";
import DishCard from "./DishCard";
import "./PopularDishes.css";
import burger from "./Burger.jpg"
import sushi from "./Sushi_platter.jpg"
import pizza from "./pizza.jpg"
import "./Food1.jpg"

const dishes = [
  { id: 1, name: "Margherita Pizza", image: pizza, price: "120" },
  { id: 2, name: "Cheeseburger", image: burger, price: "100" },
  { id: 3, name: "Sushi Platter", image: sushi, price: "200" },
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