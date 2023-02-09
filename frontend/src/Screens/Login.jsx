import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
    if (json.success) {
      localStorage.setItem("userName",json.userName);
      localStorage.setItem("userEmail",credentials.email);
      localStorage.setItem("authToken",json.authToken);
      //console.log(localStorage.getItem("authToken"))
      const userName=localStorage.getItem("userName");
      navigate(`/loginmain/${userName}`);
    }
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
  <>
  <div className="loginPage">
    <div className="form-box">
      <h1>LogIn</h1>
      <form onSubmit={handleSubmit}>
       <div className="input-group">
         <div className="input-field">
          <input className="input" type="email" placeholder="Email" name="email" onChange={onChange} value={credentials.email}/>
         </div>
         <div className="input-field">
          <input className="input" type="password" placeholder="Password" name="password" onChange={onChange} value={credentials.password} />
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
