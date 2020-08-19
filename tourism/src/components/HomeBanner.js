import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Homebanner.css";
export default function HomeBanner() {
  return (
    <div className="homebanner-container">
      <div className="homebanner-text">
        <h1>Explore Your Life In</h1>
        <h1>
          <strong>Uttrakhand</strong>
        </h1>
        <p>
          <strong>
            {" "}
            The Simply Heaven on earth, Uttarakhand is often referred to as the
            Devbhumi or Land of the Gods due to the many Hindu temples and
            pilgrimage centre
          </strong>
        </p>
        <NavLink to="/about">
          {" "}
          <button>About</button>
        </NavLink>
      </div>
      <div className="home-image">
        <img
          src={
            "https://www.indiantravelstore.com/mobile/assets/img/himachal.png"
          }
          alt="home-banner"
        />
      </div>
    </div>
  );
}
