// src/components/MenuListWithCategories.js
import React, { useState } from "react";
import MenuCard from "./MenuCard";

const menuData = [
  {
    category: "Starters",
    items: [
      {
        id: 1,
        name: "Spring Rolls",
        description: "Crispy rolls filled with veggies.",
        price: 5.99,
        image: "./images/springrolls.jpeg",
      },
      {
        id: 2,
        name: "Garlic Bread",
        description: "Toasted bread with garlic and butter.",
        price: 3.99,
        image: "./images/GarlicBread.jpeg",
      },
    ],
  },
  {
    category: "Main Course",
    items: [
      {
        id: 3,
        name: "Margherita Pizza",
        description: "Classic Italian pizza with fresh basil and mozzarella.",
        price: 12.99,
        image: "./images/pizza.jpeg",
      },
      {
        id: 4,
        name: "Veggie Burger",
        description: "A healthy burger packed with fresh vegetables.",
        price: 10.99,
        image: "./images/burger.jpeg",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        id: 5,
        name: "Chocolate Cake",
        description: "Rich and moist chocolate cake.",
        price: 6.99,
        image: "./images/chococake.jpeg",
      },
      {
        id: 6,
        name: "Ice Cream Sundae",
        description: "Vanilla ice cream with chocolate sauce.",
        price: 4.99,
        image: "./images/sundae.jpeg",
      },
    ],
  },
];

const MenuList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredMenu =
    selectedCategory === "All"
      ? menuData.flatMap((category) => category.items)
      : menuData
          .find((category) => category.category === selectedCategory)
          ?.items || [];

  return (
    <div className="menu-container">
      <div className="category-buttons">
        <button
          onClick={() => handleCategoryClick("All")}
          className={selectedCategory === "All" ? "active" : ""}
        >
          All
        </button>
        {menuData.map((category) => (
          <button
            key={category.category}
            onClick={() => handleCategoryClick(category.category)}
            className={selectedCategory === category.category ? "active" : ""}
          >
            {category.category}
          </button>
        ))}
      </div>

      <div className="menu-list">
        {filteredMenu.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;

