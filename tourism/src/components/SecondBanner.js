import React from "react";

export default function SecondBanner() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-8">
          <h1 style={{fontFamily:"'Josefin Sans', sans-serif",color:"#3c2946", fontWeight:"700" ,fontSize:"45px"}}>Where Is uttarakhand, Anyway? </h1>
          <p style={{color:"#3c2946" ,fontWeight:"600" }}>
            Uttarakhand ,formerly known as Uttaranchal is a state in the
            northern part of India. It is often referred to as the "Devabhumi"
            (literally "Land of the Gods") due to numerous Hindu temples and
            pilgrimage centres found throughout the state. Uttarakhand is known
            for the natural environment of the Himalayas, the Bhabar and the
            Terai regions.
          </p>
          <p  style={{color:"#3c2946" ,fontWeight:"600" }}>
            Uttarakhand has a total area of 53,483 km2 (20,650 sq mi), of
            which 86% is mountainous and 65% is covered by forest.[54] Most of
            the northern part of the state is covered by high Himalayan peaks
            and glaciers.{" "}
          </p>
        </div>
        <div className="col-md-4">
          <img style={{height:"300px",width:"400px"}} src={"./images/map.png"} alt="map" />
        </div>
      </div>
    </div>
  );
}
