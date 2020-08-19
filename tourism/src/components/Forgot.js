import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import '../css/Forgot.css'

export default function Forgot({ history }) {
  const [values, setValues] = useState({
    email: "",
    btn: "Request link",
  });
  const { email, btn } = values;
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, btn: "submitting" });
    axios
      .post("/forgot-password", { email })
      .then((response) => {
        console.log("forgot password", response);
        toast.success(response.data.message);
        setValues({ ...values, btn: "Request link" });
      })
      .catch((err) => {
        if (err) {
          console.log("forgot password error", err.response.data.error);
          toast.error(err.response.data.error);
          setValues({ ...values, btn: "Request Link" });
        }
      });
  };
  return (
    <div className="forgot-container">
      <ToastContainer />
      <div className="login-image"><img src={"https://theuniqueacademy.co.in/assets/images/test.png"} alt="login"/></div>
      <form className="forgot-form">
        <div className="forgot-email">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            values={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="forgot-button">
          <button type="button" onClick={clickSubmit}>
            {btn}
          </button>
        </div>
      </form>
    </div>
  );
}
