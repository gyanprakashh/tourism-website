import React from "react";
import CardImage from './CardImage';
import '../css/FloraStyle.css';
import obj from './FloraContenet';
import ImageCard from './ImageCard'

export default function FloraAndFunna() {
  const object=obj();
  return (
    <div className="flora-container">
    <div className="flora-faunna">
      <h2 style={{color:"white",paddingTop:"40px"}}>Flora & Fauna</h2>
      <img className="flora-main-img" src="https://articlemojo.com/upload/articleimages/green-images.jpeg" alt="flora" />
    </div>
    <div>
      <CardImage title={object[0].title} para1={object[0].text1} para2={object[0].text2} image={object[0].image}  place={object[0].place} />
      <ImageCard title={object[1].title} para1={object[1].text1} para2={object[1].text2} image={object[1].image}  place={object[1].place} />
      <CardImage title={object[2].title} para1={object[2].text1} para2={object[2].text2} image={object[2].image}  place={object[2].place} />
    </div>
    </div>
  );
}

