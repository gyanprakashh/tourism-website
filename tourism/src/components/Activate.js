import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import jwt from "jsonwebtoken";
import '../css/Activate.css'
export default function Activate({ match }) {
  const [values, setValues] = useState({
    name: "",
    token: "",
    show: true,
  });
  useEffect(() => {
    let token = match.params.token;
    if (token) {
      let { name } = jwt.decode(token);
      setValues((v) => ({ ...v, name, token }));
    }
  }, [match.params.token]);
  const { name, token } = values;
  const clickSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/account-activation", { token })
      .then((response) => {
        console.log("Account-activation ", response);
        setValues({ ...values, show: false });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("ACCOUNT ACTIVATION ERROR", error.response.data.error);
        toast.error(error.response.data.error);
      });
  };

  return (
    <div className="activation-container">
      <ToastContainer />
      <h1>
        {" "}
        Hey,{name}  ready to Activate your Account?..{" "}
      </h1>
      <button type="button" onClick={clickSubmit}>
        Activate account
      </button>
    </div>
  );
}
