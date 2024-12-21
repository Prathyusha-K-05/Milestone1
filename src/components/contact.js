import React, { useState } from "react";
import "./contact.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({ message: "", type: "" });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to validate email
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Function to show alerts
  const showAlert = (message, type) => {
    setAlert({ message, type });

    // Clear alert after 3 seconds
    setTimeout(() => {
      setAlert({ message: "", type: "" });
    }, 3000);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Validate inputs
    if (!name || !email || !message) {
      showAlert("All fields are required!", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showAlert("Please enter a valid email address!", "error");
      return;
    }

    // Mock API request (simulate form submission)
    try {
      showAlert("Submitting your message...", "info");

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock success response
      showAlert("Message sent successfully! We'll get back to you soon.", "success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      showAlert("Something went wrong. Please try again later.", "error");
    }
  };

  return (
    <div>
      {/* Alert Box */}
      {alert.message && (
        <div className={`alert-${alert.type}`} style={alertStyles(alert.type)}>
          {alert.message}
        </div>
      )}

      {/* Contact Form */}
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

// Inline styles for alert box
const alertStyles = (type) => {
  let backgroundColor, color;
  if (type === "info") {
    backgroundColor = "#d1ecf1";
    color = "#0c5460";
  } else if (type === "success") {
    backgroundColor = "#d4edda";
    color = "#155724";
  } else if (type === "error") {
    backgroundColor = "#f8d7da";
    color = "#721c24";
  }

  return {
    backgroundColor,
    color,
    padding: "10px",
    margin: "10px 0",
    textAlign: "center",
    borderRadius: "5px",
  };
};

export default ContactForm;
