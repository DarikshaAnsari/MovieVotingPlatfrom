import React from "react";
import { Link ,useNavigate} from 'react-router-dom'

export default function Navbar() {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
     navigate("/");
  }
  const handleSignUp=()=>{
    if(!localStorage.getItem("authToken")){
    navigate("/Creatuser");
}}
  return (
    <>
    <div className="header">
    <nav>
      <img src="logo.png" className="background" alt="" />
      {
      (!localStorage.getItem("authToken"))? 
      <div>
        <button className="button"><Link to="/Login"> Login</Link></button> 
        <button className="button"><Link to="/CreatUser">SignUp</Link></button>
      </div>:
      <div>

        <button className="button"><Link to="/liked">Liked 🤍</Link></button> 
        <div className="button" onClick={handleLogout}>logout</div>
      </div>
      }
     
      </nav>
    <div className="header-content">
      <h1>Vote!! For your favorite movies </h1>
      <h3>Just a Click and get access</h3>
      <p>Want to know rating?click on the search bar</p>
      <form className="search">
        <input type="text"  placeholder="Search"/>
        <button type="submit" onClick={handleSignUp}>Search</button>
      </form>
    </div>

      </div>

      </>
  );
}
