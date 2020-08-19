import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "../css/Reset.css";

export default function Reset({ match }) {
  const [values, setValues] = useState({
    name: "",
    token: "",
    newPassword: "",
    buttonText: "Reset password",
  });
  useEffect(() => {
    let token = match.params.token;
    let { name } = jwt.decode(token);
    if (token) {
      setValues((v) => ({ ...v, name, token }));
    }
  }, [match.params.token]);

  const { token, newPassword, buttonText } = values;

  const handleChange = (event) => {
    setValues({ ...values, newPassword: event.target.value });
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios
      .post("/reset-password", { newPassword, resetPasswordLink: token })
      .then((response) => {
        console.log("RESET PASSWORD SUCCESS", response);
        toast.success(response.data.message);
        setValues({ ...values, buttonText: "Done" });
      })
      .catch((error) => {
        console.log("RESET PASSWORD ERROR", error.response.data);
        toast.error(error.response.data.error);
        setValues({ ...values, buttonText: "Reset password" });
      });
  };
  return (
    <div className="reset-container">
      <ToastContainer />
      <form className="reset-form">
        <div className="reset-password">
          <label>New Password:</label>
          <input
            type="text"
            placeholder="New password"
            value={newPassword}
            onChange={handleChange}
          />
        </div>
        <div className="reset-button">
          <button onClick={clickSubmit}>{buttonText}</button>
        </div>
      </form>
    </div>
  );
}
