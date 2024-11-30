import React, { useState } from "react";
import MenuCard from "./MenuCard";

const menuData = [
  {
    category: "Starters",
    items: [
      {
        id: 1,
        name: "Spring Rolls",
        description: "Crispy rolls packed with fresh veggies and spices.",
        price: 45,
        image: "./images/springrolls.jpeg",
      },
      {
        id: 2,
        name: "Garlic Bread",
        description: " Crunchy bread infused with garlic and butter..",
        price: 40,
        image: "./images/GarlicBread.jpeg",
      },
      {
        id: 3,
        name: "Baby Corn Manchurian",
        description: "Tangy and spicy baby corn in a flavorful sauce.",
        price: 55,
        image: "./images/babycornmanchuri.jpeg",
      },

    ],
  },
  {
    category: "Main Course",
    items: [
      {
        id: 1,
        name: "Margherita Pizza",
        description: " Classic Italian pizza topped with basil and mozzarella.",
        price: 120,
        image: "./images/pizza.jpeg",
      },
      {
        id: 2,
        name: "Veggie Burger",
        description: " A wholesome burger filled with fresh vegetables.",
        price: 95,
        image: "./images/burger.jpeg",
      },
      {
        id: 3,
        name: "sushi Platter",
        description: " A delightful mix of fresh sushi rolls.",
        price: 95,
        image: "./images/sushiplatter.jpeg",
      },
      {
        id:4,
        name:"Cheese Burgar",
        description:"Juicy burger loaded with melted cheese.",
        price:110,
        image:"./images/cheeseburger.jpeg",
      },
    ],
  },
  {
    category: "South-Indian",
    items: [
      {
        id: 1,
        name: "Masala Dosa",
        description: "Crisp dosa stuffed with spicy potato filling.",
        price: 35,
        image: "./images/masaladosa.jpeg",
      },
      {
        id: 2,
        name: "Idli Vada",
        description: "Soft idlis served with crispy vada and chutney.",
        price: 60,
        image: "./images/idlivada.jpeg",
      },
      {
        id: 3,
        name: "Neer Dosa",
        description: "Thin rice crepes served with coconut chutney.",
        price: 55,
        image: "./images/neerdosa.jpeg",
      },
      {
        id: 4,
        name: "Rava Idli",
        description: "Steamed semolina cakes with spices.",
        price: 55,
        image: "./images/ravaidli.jpeg",
      },
      {
        id: 5,
        name: "Plain Dosa",
        description: "Classic dosa served with sambar and chutney.",
        price: 55,
        image: "./images/plaindosa.jpeg",
      },
    ],
  },
  {
    category: "North-Indian-Dishes",
    items: [
    {
      id:1,
      name:"Chana Masala",
      description:"Spicy chickpea curry rich in flavors.",
      price:85,
      image:"./images/ChanaMasala.jpeg"
     },
     {
      id:2,
      name:"Roti",
      description:"Soft and fresh whole-wheat flatbread.",
      price:45,
      image:"./images/roti.jpeg"
     },
     {
      id:3,
      name:"Aloo Paratha",
      description:" Stuffed flatbread filled with seasoned mashed potatoes.",
      price:85,
      image:"./images/alooparatha.jpeg"
     },
     {
      id:4,
      name:"Kachori",
      description:" Crispy deep-fried pastry stuffed with spiced lentils or potatoes.",
      price:85,
      image:"./images/kachori.jpeg"
     },
     {
      id:5,
      name:"Paneer Masala",
      description:" Rich and creamy with garnished spices.",
      price:85,
      image:"./images/paneermasala.jpeg"
     },
     {
      id:6,
      name:"Palak Paneer",
      description:" Paneer cubes simmered in spiced spinach puree.",
      price:85,
      image:"./images/palak-paneer.jpeg"
     },
     {
      id:7,
      name:"Dal Makhani",
      description:" Slow-cooked black lentils in creamy, buttery gravy.",
      price:85,
      image:"./images/dal-makhani.jpeg"
     },
     {
      id:8,
      name:"Malai Kofta",
      description:"  Soft paneer and vegetable dumplings in a rich, creamy tomato-based gravy.",
      price:85,
      image:"./images/malai-kofta.jpeg"
     },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        id: 1,
        name: "Chocolate Cake",
        description: "Rich and moist chocolate cake.",
        price: 30,
        image: "./images/chococake.jpeg",
      },
      {
        id: 2,
        name: "Ice Cream Sundae",
        description: " Creamy vanilla ice cream with toppings.",
        price: 50
        ,
        image: "./images/sundae.jpeg",
      },
      {
        id: 3,
        name: "Panna Cotta",
        description: " Smooth Italian dessert made with cream and gelatin.",
        price: 50
        ,
        image: "./images/PannaCotta.jpeg",
      },
      {
        id: 4,
        name: "Custard",
        description: "Creamy sweet dessert with a silky texture.",
        price: 50
        ,
        image: "./images/custards.jpeg",
      },
    ],
  },
 
  {
    category: "Sweets",
    items: [
      {
        id: 1,
        name: "Mysore Pak",
        description: "Melt-in-your-mouth traditional sweet from Mysore.",
        price: 60,
        image: "./images/mysore-pak.jpeg",
      },
      {
        id: 2,
        name: "Peda",
        description: " Sweet and soft milk-based confection.",
        price: 150
        ,
        image: "./images/peda.jpeg",
      },
      {
        id: 3,
        name: "Rasmalai",
        description: "Creamy dessert with soft paneer balls soaked in milk.",
        price: 158
        ,
        image: "./images/rasmalai.jpeg",
      },
      {
        id: 4,
        name: "Carrot Halwa",
        description: "Sweet pudding made with grated carrots and ghee.",
        price: 60
        ,
        image: "./images/carrothalwa.jpeg",
      },
      {
        id: 5,
        name: "Gulab Jamun",
        description: "Fried dough balls soaked in sugar syrup.",
        price: 35
        ,
        image: "./images/gulabjamun.jpeg",
      },
      {
        id: 6,
        name: "Jalebi",
        description: "Deep-fried spirals soaked in saffron syrup.",
        price: 50
        ,
        image: "./images/jalebi.jpeg",
      },
      {
        id: 7,
        name: "Jahangir",
        description: "A syrupy, sugar-drenched sweet delight.",
        price: 50
        ,
        image: "./images/jahangir.jpeg",
      },
      {
        id: 8,
        name: "Kheer",
        description: "Creamy rice pudding flavored with cardamom and nuts.",
        price: 30 ,
        image: "./images/Kheer.jpeg",
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


// import React, { useState } from "react";
// import MenuCard from "./MenuCard";
// import data from "./Data.jsx";


// const MenuList = ({ addToCart }) => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const filteredMenu =
//     selectedCategory === "All"
//       ? data.flatMap((category) => category.items)
//       : data.find((category) => category.category === selectedCategory)?.items || [];

//   return (
//     <div className="menu-container">
//       <div className="category-buttons">
//         <button
//           onClick={() => handleCategoryClick("All")}
//           className={selectedCategory === "All" ? "active" : ""}
//         >
//           All
//         </button>
//         {data.map((category) => (
//           <button
//             key={category.category}
//             onClick={() => handleCategoryClick(category.category)}
//             className={selectedCategory === category.category ? "active" : ""}
//           >
//             {category.category}
//           </button>
//         ))}
//       </div>

//       <div className="menu-list">
//         {filteredMenu.map((item) => (
//           <MenuCard key={item.id} item={item} addToCart={addToCart} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MenuList;
