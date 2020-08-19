import React from "react";
import "./App.css";
import Routes from "./routes/Routes";
import axios from "axios";
import { getCookie, signout } from "./utils/helpers";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axios.interceptors.request.use((config) => {
  const token = getCookie("token");
  config.headers.Authorization = token;
  return config;
});
axios.interceptors.response.use(null, (err) => {
  if (err.response.status === 401) {
    signout(() => {
      window.location.reload();
      window.location.href = "/signin";
     
    });
   // console.log(`Authentication err`)
  }
  return Promise.reject(err);
});

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
