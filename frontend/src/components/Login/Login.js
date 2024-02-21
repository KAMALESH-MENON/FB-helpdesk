import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <h1>Login to your account</h1>
      <form action="/login" method="post">
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
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
          />
        </div>
        <div className="checkbox">
          <label htmlFor="remember_me">
            <input type="checkbox" id="remember_me" name="remember_me" />
            Remember me
          </label>
        </div>
        <button type="submit" href="/connect">
          Login
        </button>
      </form>
      <p>
        New to MyApp? <a href="/register">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
