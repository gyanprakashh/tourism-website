import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../css/SignIn.css";
import { ToastContainer, toast } from "react-toastify";
import { authenticate, isAuth } from "../utils/helpers";

export default function SignIn({ history }) {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    buttonText: "Submit",
    emailError:"",
    passwordError:""
  });
  const { email, password, buttonText,emailError,passwordError } = formInputs;
  const handleChange = (event) => {
    setFormInputs({
      ...formInputs,
      [event.target.name]: event.target.value,
    });
  };
  const validate=()=>{
    let emailError, passwordError;
    if(email===""){
      emailError="This fields is required.";
    }
    if(password===""){
      passwordError="This is field is required."
    }
    if(email==="" || password===""){
      setFormInputs({...formInputs,emailError,passwordError});
      return false;
    }
    return true;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(validate()){
    setFormInputs({ ...formInputs, buttonText: "submitting..." });
    axios
      .post("/signin", { email, password })
      .then((res) => {
        console.log("sign in sucess", res);
        authenticate(res, () => {
          setFormInputs({
            email: "",
            password: "",
            buttonText: "submitted",
            passwordError:"",
            emailError:""
          });
        });
        window.location.reload(false);
        isAuth() ? history.push("/") : history.push("/signin");
      })
      .catch((err) => {
        if (err && err.response && err.response.data) {
          toast.error(err.response.data.error);
        }
        setFormInputs({
          ...formInputs,
          buttonText: "Submit",
        });
      });
    }
  };

  return (
    <div className="sign-in-container">
      <ToastContainer />
      <div className="login-image"><img src="./images/login.png" alt="login"/></div>
      <form className="sign-in-form">
        <h1> Log In </h1>
        <div className="sign-in-email">
          <label>Email:</label>
          <input
            onChange={handleChange}
            value={email}
            name="email"
            type="email"
            required
          />
        </div>
  {emailError?<p style={{color:"red", marginLeft:"100px",marginTop:"-25px"}}>{emailError}</p>:<span>{""}</span>}
        <div className="sign-in-password">
          <label>Password:</label>
          <input
            onChange={handleChange}
            value={password}
            name="password"
            type="password"
            required
          />
        </div>
        {passwordError?<p style={{color:"red", marginLeft:"100px",marginTop:"-25px"}}>{passwordError}</p>:<span>{""}</span>}
        <div>
        <h5>
          <NavLink to="/auth/password/forgot"> forgot password</NavLink>{" "}
        </h5>
      </div>
        <div className="sign-in-button">
          <button type="button" onClick={handleSubmit}>
            {buttonText}
          </button>
        </div>
        <div className="sign-to-signup">Don't have an account? <NavLink to="/signup">Signup</NavLink></div>
      </form>
      
    </div>
  );
}
