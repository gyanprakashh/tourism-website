import React from "react";
import Footer from './Footer'
import {NavLink} from "react-router-dom";

export default function AboutPage() {
  return (
    <>
    <div className="container">
      <h1
        className="row mt-5 text-center"
        style={{
          color: "#3c2946",
          fontSize: "65px",
          fontWeight: "900",
          fontFamily: "'Josefin Sans', sans-serif",
          marginLeft: "25%",
          marginRight: "auto",
        }}
      >
        About the Travel Point
      </h1><br></br><br></br>
      <div className="row " >
        <h5 >Travels Point is an informative website of Uttarakhand dedicated to fostering travelling empathy through our story-telling
          blogs.<br></br><br></br>
        </h5>
        <h5>We aim to provide a platform for those whoe's heart crave for some serious adventure and some life thrilling & breath-taking experiences.
        We bring all these experiences together to create a lasting and impactful record of life on earth.<br></br><br></br>
       Our platform provide you specified location based weather reports to help travellers experience more adveneturous destination and gain
         a unique and memorable travel perspective. We travel a destination with a story to tell, seeking hidden gems, local specialities, off-the 
         beaten track experiences and jaw-dropping natural scenery for this to happen.We also include a section where user can share his own experience
         and provide details information , local guides and some untouched local insight.<br></br><br></br>
       </h5>
       <img src="https://www.traveltourister.com/admin/include/upload/service/detail5b98d7284645cA-Trip-of-a-Lifetime-in-Uttarakhand.png" alt="banner"></img>
       <h5><br></br><br></br>
       Share your experience <NavLink to="/create-blogs">here.</NavLink>
          <br></br><br></br>
         Have question? We would love to hear from you. Email us at: support@travelspoint.com</h5>

      </div>
     
    </div>
    <Footer />
    </>
  );
}
