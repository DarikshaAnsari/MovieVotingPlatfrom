import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";


export default function SignUp() {
  let navigate=useNavigate();
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
       
      }),
    });
    const json = await response.json();
    //console.log(json);
    if(json.exist){
      alert("This email already exist")
    }
    else if (!json.success) {
      alert("Enter valid Credentials");
    }
    else if(json.success){
      localStorage.setItem("userName",credentials.name);
      localStorage.setItem("userEmail",credentials.email);
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"))
      navigate("/");
    }
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <>
    <div className="loginPage">
    <div className="form-box">
      <h1>SignUp</h1>
      <form  onSubmit={handleSubmit}>
       <div className="input-group">
       <div className="input-field">
          <input type="text" placeholder="Name" value={credentials.name} name="name"
              onChange={onChange} />
         </div>
         <div className="input-field">
          <input type="email" placeholder="Email"  value={credentials.email} name="email"
              onChange={onChange}/>
         </div>
         <div className="input-field">
          <input type="password" placeholder="Password" value={credentials.password} name="password"
              onChange={onChange} />
         </div>
         <div className="btn-field">
         <button type="submit" > Submit</button>
       <button> <Link to="/Login" > Already a User</Link></button> 
       </div>

       </div>
      </form>
    </div>
  </div>
    
    </>
  );
}
