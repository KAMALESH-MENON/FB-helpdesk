// frontend/src/App.js

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home"; 
import Connect from "./components/Connect/Connect";
import Dashboard from "./components/Dashboard/Dashboard"


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" component={Login} />
          <Route path="/register" element={<Register />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
