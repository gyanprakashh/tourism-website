import React from "react";
// import "../css/CardImage.css";
import Weather from "./Weather";

export default function ImageCard({ title, para1, para2, image,place }) {
  return (
    <div className="card-image text-center mt-5 container">
      <h1 className="mb-3" style={{ color: "#3c2946", fontWeight:"700" }}>{title}</h1>
      <div className="row img-para">
        <div className="col-md-4">
          <img
            style={{
              height: "300px",
              width: "300px",
              marginLeft: "10px",
              marginRight: "10px",
              borderRadius:"10%"
            }}
            src={image}
            alt="img"
          />
        </div>
        <div className="col-md-2 mt-2 " >
          <Weather places={place} />
        </div>
        <div className="col-md-6 text-left" style={{ color: "#3c2946", fontWeight: "700" }}>
        <p>{para1}</p>
        <p>{para2}</p>
      </div>
      </div>
     

      <div />
    </div>
  );
}
