import React from "react";
import "./Banner.css";
// import { Link } from "react-router-dom";
import img1 from "../images/home_hero_1_tile.webp";
import img2 from "../images/Driver_wearing_a_mask_in_the_car.webp";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-left">
            <h4>ready when you are</h4>
            <h1>Hop in. Crack a window. Let's get back out there.</h1>
            <div className="">
              <button className="btn btn-bigger">
                {/* <Link to="/property/new">add property</Link> */}
                Apply to drive
              </button>
              <button className="btn-alt btn-bigger">
                {/* <Link to="/property/new">add property</Link> */}
                sign up to ride
              </button>
            </div>
          </div>
          <div className="banner-right">
            <div className="banner-right-div">
              <div className="banner-right-image-div banner-img1">
                <img src={img1} alt="driver and lady" />
              </div>
              <div className="banner-right-image-div banner-img2">
                <img src={img2} alt="driver and lady" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
