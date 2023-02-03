import React from "react";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Liked from "./Screens/Liked";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contest from "./Screens/Contest";
import Loginmain from "./Screens/Loginmain";
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Creatuser" element={<SignUp />} />
          <Route exact path="/liked" element={<Liked />} />
          <Route exact path="/contest" element={<Contest />} />
          <Route exact path="/loginmain" element={<Loginmain />} />
        </Routes>
      </div>
    </Router>
  );
}
