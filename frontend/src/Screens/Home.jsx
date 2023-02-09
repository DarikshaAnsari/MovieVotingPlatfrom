import React from "react";

import Features from "../Components/Features";
import Footer from "../Components/Footer";

import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      
        
    {
      (localStorage.getItem("authToken"))?
     <div>
      <Navbar/>
     </div>

      :
      <div>
        <Navbar />
        <hr></hr>
       <Features/>
       <Footer/>
       </div>
    }
     </>
  );
}
