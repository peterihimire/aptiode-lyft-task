import React from "react";
import "./HomeLyft.css";
import homeImg from "../images/reliable_eng.webp";
import { FaSearch, FaCircle, FaLongArrowAltRight } from "react-icons/fa";
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
            <h4>drive with lyft</h4>
            <h2>Set your own hours. Earn on your own terms.</h2>
            <p>
              When the time to invest on home comes dont fail to invest with
              bnk-homes and real-estate. we offer competitive home price offer
              and sales that you will always find attractive. Hurry up now and
              grab your best offer now.
            </p>
          </div>
          <div className="home-lyft-content">
            <div className="home-lyft-content-icon">
              <FaCircle className="circle-icon" />
            </div>
            <div className="">
              <h4>Reliable earnings</h4>
              <p>
                When the time to invest on home comes dont fail to invest with
                bnk-homes and real-estate. we offer competitive home
              </p>
            </div>
          </div>

          <div className="home-lyft-content">
            <div className="home-lyft-content-icon">
              <FaCircle className="circle-icon" />
            </div>
            <div className="">
              <h4>A flexible schedule</h4>
              <p>
                When the time to invest on home comes dont fail to invest with
              </p>
            </div>
          </div>
          <div className="home-lyft-content">
            <div className="home-lyft-content-icon">
              <FaCircle className="circle-icon" />
            </div>
            <div className="">
              <h4>Get paid promptly</h4>
              <p>
                When the time to invest on home comes dont fail to invest with
                bnk-homes a
              </p>
            </div>
          </div>
          <div className="home-lyft-btn-div">
            <div className="">
              <button className="btn btn-bigger">Apply to drive</button>
            </div>
            <div className="">
              <div className="more-flex-end">
                {/* <Link to="/properties"> */}
                <div className="more-arrow">
                  <h4>How driver pay works</h4>{" "}
                  <span>{<FaLongArrowAltRight />}</span>
                </div>
                {/* </Link> */}
              </div>
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
