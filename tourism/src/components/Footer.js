import React from "react";
import {NavLink} from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="container-fluid mt-4 "
      style={{ backgroundColor: "#3c2946" }}
    >
      <div className="row ">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center mt-3">
          <img
            style={{ height: "50px", width: "70px", paddingLeft: "20px" }}
            src={"./images/facebook.png"}
            alt="facebbok"
          />
          <img
            style={{ height: "50px", width: "70px", paddingLeft: "20px" }}
            src={"./images/instagram.png"}
            alt="instagram"
          />
          <img
            style={{ height: "50px", width: "70px", paddingLeft: "20px" }}
            src={"./images/twitter.png"}
            alt="instagram"
          />
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row mx-0 px-0 text-center mt-4 ">
        <div className="col-3"></div>
        <div
          className="col-md-6 "
          style={{ color: "white", fontWeight: "500" }}
        >
         <NavLink to ="/about" style={{textDecoration:"none" , color:"#ffff"}}> <div className="col " >Privacy Policy | Terms and Conditions | About Travel Point</div></NavLink>
          <span className="col">  </span>
          <span className="col"> </span>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row text-center" style={{ color: "white" }}>
       <p className="text-center"> &copy; 2020 TravelPoint. All Rights Reserved. </p>
      </div>
    </div>
  );
}
