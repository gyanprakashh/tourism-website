import React from "react";
import "../css/FloraStyle.css";
import CardImage from "./CardImage";
import obj from "./FestivalContent";
import ImageCard from "./ImageCard";

export default function Mountains() {
  const object = obj();
  return (
    <div className="flora-container">
      <div className="flora-faunna">
        <h2 style={{ color: "white", paddingTop: "40px" }}>Fair &amp; Festival</h2>
        <img
          className="flora-main-img"
          src="https://i2.wp.com/www.ercotravels.com/blog/wp-content/uploads/2017/03/kumbh-mela-haridwar.jpg?fit=570%2C300&ssl=1"
          alt="culture Abd Heritage"
        />
      </div>
      <div>
        <CardImage
          title={object[0].title}
          para1={object[0].text1}
          para2={object[0].text2}
          image={object[0].image}
          place={object[0].place}
        />
        <ImageCard
          title={object[1].title}
          para1={object[1].text1}
          para2={object[1].text2}
          image={object[1].image}
          place={object[1].place}
        />
        <CardImage
          title={object[2].title}
          para1={object[2].text1}
          para2={object[2].text2}
          image={object[2].image}
          place={object[2].place}
        />
        
      </div>
    </div>
  );
}
