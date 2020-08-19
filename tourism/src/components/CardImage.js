import React from "react";
// import "../css/CardImage.css";
import Weather from "./Weather";
export default function CardImage({ title, para1, para2, image,place }) {
  return (
    <div className="card-image text-center mt-5 container">
      <h1 style={{ color: "#3c2946",fontWeight:"700" }}>{title}</h1>
      <div className="img-para row">
        <div className="col-md-7 text-left"  style={{ color: "#3c2946", fontWeight: "700" }}>
          <p>{para1}</p>
          <p>{para2}</p>
        </div>
        <div className="col-md-2 mb-2">
          <Weather places={place} />
        </div>

        <div className="col-md-3">
          <img
            style={{ height: "300px", width: "300px" ,borderRadius:"10%"}}
            src={image}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}
