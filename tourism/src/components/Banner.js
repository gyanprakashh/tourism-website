import React from "react";
import "../css/Banner.css";
export default function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="first-banner">
          <img
            src="https://www.euttaranchal.com/tourism/_imgs/nainital-new.jpg"
            alt="img"
          />
        </div>
        <div className="second-banner">
          <h1>The Beautiful State</h1>
          <br />
          <p>
            Uttarakhand formerly known as Uttaranchal, and often referred to as
            the Dev Bhumi- the Land of Gods, owing to numerous pilgrimage
            centres and Hindu temples throughout the state.
            <br />
            <br />
            <br />
            With soaring Himalayan peaks and steamy lowland jungles, peaceful
            hill stations and busy cities, revered temples and renowned ashrams
            - Uttarakhand is an enticingly diverse state. Also boasting of some
            of India’s best trekking, yoga schools, wildlife-watching and
            holiday towns all tucked into one little corner of the country.
            <br />
            <br />
            The state is divided into two divisions, Garhwal and Kumaon, with 13
            districts in total. The interim capital and the largest city of
            Uttarakhand is Dehradun. The High Court of the state is in Nainital.
          </p>
        </div>
      </div>
    </div>
  );
}
