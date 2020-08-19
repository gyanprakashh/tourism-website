import React from "react";
import '../css/FloraStyle.css';
import CardImage from "./CardImage";
import obj from "./AdventureContent";
import ImageCard from "./ImageCard";

export default function AdventureCategory() {
  const object = obj();
  return (
    <div className="flora-container">
      <div className="flora-faunna">
        <h2 style={{ color: "white", paddingTop: "40px" }}>Adventure</h2>
        <img
          className="flora-main-img"
          src="https://www.arizona-leisure.com/gfx/grand-canyon-rafting-rapids.jpg"
          alt="Adventure"
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
         <ImageCard
          title={object[3].title}
          para1={object[3].text1}
          para2={object[3].text2}
          image={object[3].image}
          place={object[3].place}
        />
        <CardImage
          title={object[4].title}
          para1={object[4].text1}
          para2={object[4].text2}
          image={object[4].image}
          place={object[4].place}
        />
        <ImageCard
          title={object[5].title}
          para1={object[5].text1}
          para2={object[5].text2}
          image={object[5].image}
          place={object[5].place}
        />
      </div>
    </div>
  );
}
