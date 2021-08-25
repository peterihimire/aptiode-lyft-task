import React from "react";
import "./HomeLyft.css";
import homeImg from "../images/reliable_eng.webp";
import lyftPinkImg from "../images/LyftPink_Gradient5.webp";
import {

  FaCalendar,
  FaMask,
  FaMale,
} from "react-icons/fa";
const HomeLyft = () => {
  return (
    <div className="home-lyft">
      {/* <div className="home-about-title">
        <h2>about us</h2>
        <h4>a new way for working with professionals.</h4>
      </div> */}

      <div className="home-lyft-content">
        <div className="home-lyft-text-container">
          <div className="home-lyft-title">
            <h4>ride with lyft</h4>
            {/* <h2>Ready, set, go in just a few quick taps.</h2> */}
            <div className="home-lyft-title-h2">
              <h2>Ready, set, go </h2>
              <h2>in just a few quick taps.</h2>
            </div>
            <p>
              Whether you’re following your heart or your busy schedule, we’ll
              get you where you need to go.
            </p>
          </div>
          <div className="home-lyft-icon-text">
            <div className="home-lyft-div ">
              <div className="home-lyft-div-background">
                <div className="home-lyft-content-icon">
                  <FaMale className="circle-icon" />
                </div>
                <div className="">
                  <h4>Get a reliable ride in minutes</h4>
                </div>
              </div>
            </div>

            <div className="home-lyft-div">
              <div className="home-lyft-div-nobackground">
                <div className="home-lyft-content-icon">
                  <FaMask className="circle-icon" />
                </div>
                <div className="">
                  <h4>Know that your driver is wearing a mask</h4>
                </div>
              </div>
            </div>
            <div className="home-lyft-div">
              <div className="home-lyft-div-nobackground">
                <div className="home-lyft-content-icon">
                  <FaCalendar className="circle-icon" />
                </div>
                <div className="">
                  <h4>Schedule your ride in advance</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="home-lyft-btn-div">
            <div className="">
              <button className="btn btn-bigger">Get a ride</button>
            </div>
          </div>
          <div className="home-lyft-pink">
            <div className="home-lyft-pink-img">
              <img src={lyftPinkImg} alt="lyft pink logo" />
            </div>
            <div className="">
              <p>
                <u>Join Lyft Pink </u> to unlock perks like 15% off rideshare,
                free Grubhub+ membership, exclusive offers, and more. All for
                $19.99 a month. Available in the US only.
              </p>
            </div>
          </div>
        </div>
        <div className="home-lyft-img-container">
          <img src={homeImg} alt="home-img" />
        </div>
      </div>
    </div>
  );
};

export default HomeLyft;
