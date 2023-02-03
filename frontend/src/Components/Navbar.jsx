import React from "react";
import { useState } from "react";
import { Link ,useNavigate} from 'react-router-dom'
import {useRef} from "react"


export default function Navbar() {
  const [dropdown,setDropdown] = useState(false)
  const navigate=useNavigate();
  const menu = useRef(null)

  const closeOpenMenu = (e)=>{
    if(menu.current && dropdown && !menu.current.contains(e.target)){
      setDropdown(false)
    }
}

  const showDropdown = () => {
    setDropdown(!dropdown)
  }

  const handleLogout=()=>{
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("authToken");
     navigate("/");
  }
  const handleSignUp=()=>{
    if(!localStorage.getItem("authToken")){
    navigate("/Creatuser");
}}

document.addEventListener('mousedown',closeOpenMenu)

  return (
    <>
    <div className="header">
    <nav>
      <img src="logo.png" className="background" alt="" />
      {
      (!localStorage.getItem("authToken"))? 
      <div className="nav-div">
        <button className="button"><Link to="/Login"> Login</Link></button> 
        <button className="button"><Link to="/CreatUser">SignUp</Link></button>
      </div>:
      <div className="nav-div">
        <button className="button"><Link to="/liked">Liked 🤍</Link></button> 
        <div className="button" onClick={handleLogout}>logout</div>

        <div ref={menu} className="flex flex-col relative">
        <div className="flex flex-row hover:cursor-pointer" onClick={showDropdown}>
        <div><i class="fa-solid fa-user fa-2xl img-icon"></i></div>
        <div><i class="fa-solid fa-caret-down icon-dropdown"></i></div>
        </div>
        <div className={`glassmorphism px-4 py-2 ${dropdown ? 'visible' : 'invisible'} absolute -right-8 top-10`}>
          <div className="text-xl font-bold">{localStorage.getItem("userName")}</div>
          <div>{localStorage.getItem("userEmail")}</div>
         
        </div>
        </div>
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
