import React from "react";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Creatuser" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}
