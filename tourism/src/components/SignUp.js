import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../css/SignUp.css";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    password: "",
    cpassword:'',
    buttonText: "Submit",
    nameError:"",
    emailError:"",
    passwordError:'',
    cpasswordError:'',
    passmatch:""
  });
  const { name, email, password, buttonText,cpassword,nameError,emailError,passwordError,cpasswordError,passmatch } = formInputs;
  const handleChange = (event) => {
    setFormInputs({
      ...formInputs,
      [event.target.name]: event.target.value,
    });
  };
  const validate=()=>{
    let emailError, passwordError, cpasswordError ,nameError,passmatch;
    if(email===""){
      emailError="This fields is required.";
    }
    if(password===""){
      passwordError="This is field is required."
    }
    if(cpassword===""){
      cpasswordError="This is field is required."
    }
    if(name===""){
      nameError="This is field is required."
    }
    if(password!==cpassword){
       passmatch="password did not match";
      setFormInputs({...formInputs,emailError,passwordError,nameError,cpasswordError,passmatch});
      return false;
    }
    if(email==="" || password==="" || cpassword==="" || name===""){
      setFormInputs({...formInputs,emailError,passwordError,cpasswordError,nameError,passmatch});
      return false;
    }
    
    return true;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(validate()){
      setFormInputs({ ...formInputs, buttonText: "submitting..." });
      axios
      .post("/signup", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(`signed up successfully ${res}`);
        setFormInputs({
          email: "",
          password: "",
          name: "",
          buttonText: "Submit",
          nameError:"",
          passwordError:"",
          cpasswordError:"",
          passmatch:"",
          emailError:"",
        });
        toast.success(res.data.message);
      })
      .catch((err) => {
        if (err && err.response && err.response.data) {
          toast.error(err.response.data.error);
          setFormInputs({ ...formInputs, buttonText: "submit",passmatch:'',emailError:'',nameError:'',passwordError:'',cpasswordError:'' });
        }
      });
    }
  
  };
  return (
    <div>
      <div className="sign-up-container">
        <div className="login-image">
          <img src="./images/login.png" alt="login" />
        </div>
        <form className="sign-up-form">
          <ToastContainer />
          <h1> Sign Up </h1>
          <div className="sign-up-name">
            <label>Name:</label>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              required
              value={name}
            />
          </div>
          {nameError?<p style={{color:"red", marginLeft:"100px",marginTop:"-23px"}}>{nameError}</p>:<span>{""}</span>}
          <div className="sign-up-email">
            <label>Email:</label>
            <input
              name="email"
              type="text"
              onChange={handleChange}
              required
              value={email}
            />
          </div>
          {emailError?<p style={{color:"red", marginLeft:"100px",marginTop:"-23px"}}>{emailError}</p>:<span>{""}</span>}
          <div className="sign-up-password">
            <label>Password:</label>
            <input
              name="password"
              type="text"
              required
              onChange={handleChange}
              value={password}
            />
          </div>
          {passwordError?<p style={{color:"red", marginLeft:"100px",marginTop:"-22px"}}>{passwordError}</p>:<span>{""}</span>}
          <div className="sign-up-password">
            <label style={{paddingRight:"1px"}}> C-Password:</label>
            <input
              name="cpassword"
              type="text"
              required
              onChange={handleChange}
              value={cpassword}
            />
          </div>
          {cpasswordError?<p style={{color:"red", marginLeft:"100px",marginTop:"-20px"}}>{cpasswordError}</p>:<span>{""}</span>}
          {passmatch?<p style={{color:"red", marginLeft:"100px",marginTop:"-20px"}}>{passmatch}</p>:<span>{""}</span>}
          <div className="sign-up-button">
            <button type="button" onClick={handleSubmit}>
              {buttonText}
            </button>
          </div>
          <div className="signin-to-sigup">
            Already have an account. <NavLink to="/signin">Log in</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
