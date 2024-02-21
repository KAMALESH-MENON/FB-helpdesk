// Home.js

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Facebook Page Integration</h1>

        <h1>Integrated Page:</h1>
        <div className="buttons">
          <button className="secondary">Delete Integration</button>
          <button className="primary">Reply To Messages</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
