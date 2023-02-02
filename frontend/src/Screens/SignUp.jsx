import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
 /* const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/createuser", {
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
    console.log(json);

    if (!json.success) {
      alert("Enter valid Credentials");
    }
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };*/
  return (
    <>
    <div className="loginPage">
    <div className="form-box">
      <h1>SignUp</h1>
      <form  /*onSubmit={handleSubmit}*/>
       <div className="input-group">
       <div className="input-field">
          <input type="text" placeholder="Name" /*value={credentials.name}
              onChange={onChange}*/ />
         </div>
         <div className="input-field">
          <input type="email" placeholder="Email" /* value={credentials.email}
              onChange={onChange}*//>
         </div>
         <div className="input-field">
          <input type="password" placeholder="Password" /*value={credentials.password}
              onChange={onChange}*/ />
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
