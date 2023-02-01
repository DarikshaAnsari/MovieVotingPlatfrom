import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div className="header">
    <nav>
      <img src="logo.png" className="background" alt="" />
      <div>
        <button><Link to="/Login"> Login</Link></button> 
        <button><Link to="/CreatUser">SignUp</Link></button>
      </div>
      </nav>
    <div className="header-content">
      <h1>Vote!! For your favorite movies </h1>
      <h3>Just a Click and get access</h3>
      <p>Want to know rating?click on the search bar</p>
      <form className="search">
        <input type="text"  placeholder="Search"/>
        <button type="submit">Search</button>
      </form>
    </div>

      </div>

      </>
  );
}
