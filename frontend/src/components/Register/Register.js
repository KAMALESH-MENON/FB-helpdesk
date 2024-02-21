import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send registration data to the backend
      await axios.post("http://localhost:5000/signup", formData);

      // Optionally, you can handle success or redirect the user
      console.log("Registration successful");
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div className="container">
      <h1>Create Account</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="checkbox">
          <label htmlFor="remember_me">
            <input type="checkbox" id="remember_me" name="remember_me" />
            Remember me
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
};

export default Register;
