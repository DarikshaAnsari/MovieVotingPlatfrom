import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
  <>
  <div className="loginPage">
    <div className="form-box">
      <h1>LogIn</h1>
      <form>
       <div className="input-group">
         <div className="input-field">
          <input type="email" placeholder="Email" />
         </div>
         <div className="input-field">
          <input type="password" placeholder="Password" />
         </div>
         <div className="btn-field">
         <button type="submit" > Submit</button>
       <button> <Link to="/CreatUser" > I'm a new user</Link></button> 
       </div>

       </div>
      </form>
    </div>
  </div>
  
  
  </>

  );

}
