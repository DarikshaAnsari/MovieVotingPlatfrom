import React from 'react'
import { useState } from "react";
import { Link ,useNavigate} from 'react-router-dom'
import {useRef} from "react"

export default function Loginmain() {
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


  document.addEventListener('mousedown',closeOpenMenu)

  return (
   <>
   <nav className="p-0 m-0">
      <img src="logo.png" className="background" alt="" />
      
      <div className="nav-div">
         <button className="button"><Link to="/contest">Contest</Link></button> 
        <button className="button"><Link to="/liked">Liked 🤍</Link></button> 
        <div ref={menu} className="flex flex-col relative">
        <div className="flex flex-row hover:cursor-pointer" onClick={showDropdown}>
        <div><i className="fa-solid fa-user fa-2xl img-icon"></i></div>
        <div><i className="fa-solid fa-caret-down icon-dropdown"></i></div>
        </div>
        <div className={`glassmorphism px-4 py-2 ${dropdown ? 'visible' : 'invisible'} absolute -right-8 top-10`}>
          <div className="text-xl font-bold">{localStorage.getItem("userName")}</div>
          <div>{localStorage.getItem("userEmail")}</div>
          <div  className="bg-secondary rounded-[5px] px-4 py-2 mt-4 right-0" onClick={handleLogout}>logout</div>
        </div>
        </div>
      </div>
      </nav>
   
   </>
  );
}
