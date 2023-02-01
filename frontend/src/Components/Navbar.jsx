import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <section id="header">
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>
            <Link className="btn bg-white text-success mx-1" to="/Login">
              Login
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn bg-white text-success mx-1" to="/CreatUser">
              SignUp
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
