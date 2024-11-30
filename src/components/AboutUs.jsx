import React from 'react';
import './AboutUs.css'; // Create a separate CSS file to style the About Us page.

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Welcome to 🍴 Foodie! We're passionate about bringing you the best food experience.</p>
      </header>

      <section className="about-us-content">
        <div className="about-us-section">
          <h2>Our Story</h2>
          <p>
            At 🍴 Foodie, we believe in the power of good food to bring people together. From our humble beginnings as a small local restaurant to becoming one of the most loved food brands in town, our journey has been one of passion, dedication, and great taste.
          </p>
        </div>

        <div className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to provide fresh, flavorful, and exciting meals that everyone can enjoy. Whether you're craving a quick snack or a hearty meal, we've got you covered. We aim to make dining an experience to remember, with food that satisfies both the body and the soul.
          </p>
        </div>

        <div className="about-us-section">
          <h2>Meet the Team</h2>
          <p>
            Our team is a group of food lovers, chefs, and hospitality experts who work together to bring you the best service and meals. We are always pushing the boundaries of flavor to make sure you're having a delightful experience every time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
