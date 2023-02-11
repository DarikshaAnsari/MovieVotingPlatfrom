import React from 'react'
import { useState } from "react";
import { Link ,useNavigate} from 'react-router-dom'
import {useRef} from "react"
import Slide from '../Components/slide/Slide';


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
   <nav className='loginmain-nav'>
      <img src="logo.png" className="background" alt="" />
      
      <div className="nav-div">
         <button className="button"><Link to="/contest">Contest</Link></button> 
        <button className="button"><Link to="/liked">Liked 🤍</Link></button> 
        <div ref={menu} className="flex flex-col relative">
        <div className="flex flex-row hover:cursor-pointer" onClick={showDropdown}>
        <div><i className="fa-solid fa-user fa-2xl img-icon"></i></div>
        <div><i className="fa-solid fa-caret-down icon-dropdown"></i></div>
        </div>
        <div className={`glassmorphism px-4 py-2 ${dropdown ? 'visible' : 'invisible'} absolute -right-8 top-10`} style={{zIndex: '2'}}>
          <div className="text-xl font-bold">{localStorage.getItem("userName")}</div>
          <div>{localStorage.getItem("userEmail")}</div>
          <div  className="bg-secondary rounded-[5px] px-4 py-2 mt-4 right-0 cursor-pointer" onClick={handleLogout}>logout</div>
        </div>
        </div>
      </div>
      </nav>
   <Slide/>
   <hr></hr>
  
         < div className='loginmain-header-content'> 
          <h3>Just a Click and get access</h3>
          <p>Want to know rating?click on the search bar</p>
          <form className="flex items-center mt-5 mb-10">   
    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
    </div>
    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-secondary dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span className="sr-only">Search</span>
    </button>
</form>
          </div>
          <hr></hr>
          <div>hello</div>
       

    
   </>
  );
}
