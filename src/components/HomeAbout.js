import React from "react";
import "./HomeAbout.css";
import homeImg from "../images/driver_section_2x.webp";
import {
 
  FaLongArrowAltRight,
  FaMoneyBill,
  FaClock,
  FaBolt,
} from "react-icons/fa";
const HomeAbout = () => {
  return (
    <div className="home-about">
      {/* <div className="home-about-title">
        <h2>about us</h2>
        <h4>a new way for working with professionals.</h4>
      </div> */}

      <div className="home-about-content">
        <div className="home-about-img-container">
          <img src={homeImg} alt="home-img" />
        </div>
        <div className="home-about-text-container">
          <div className="home-about-title">
            <h4>drive with lyft</h4>
            <div className="home-about-title-h2">
              <h2>Set your own hours. </h2>
              <h2>Earn on your own terms.</h2>
            </div>

            <p>
              Maybe you’re saving up for school. Or keeping flexible hours to
              spend more time with your family. It’s a great time to get in the
              driver’s seat, connect with your community, and earn a little
              extra cash. Plus, you can tell people you’ve got the best boss in
              town: you.
            </p>
          </div>
          <div className="home-about-content">
            <div className="home-about-content-icon">
              <FaMoneyBill className="circle-icon" />
            </div>
            <div className="">
              <h4>Reliable earnings</h4>
              <p>
                Make money, keep your tips, and use in-app tools to help
                maximize your earnings.
              </p>
            </div>
          </div>

          <div className="home-about-content">
            <div className="home-about-content-icon">
              <FaClock className="circle-icon" />
            </div>
            <div className="">
              <h4>A flexible schedule</h4>
              <p>Be your own boss and drive whenever it works for you.</p>
            </div>
          </div>
          <div className="home-about-content">
            <div className="home-about-content-icon">
              <FaBolt className="circle-icon" />
            </div>
            <div className="">
              <h4>Get paid promptly</h4>
              <p>
                Cash out your earnings whenever you want with Express Pay and
                Lyft Direct.
              </p>
            </div>
          </div>
          <div className="home-about-btn-div">
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
      </div>
    </div>
  );
};

export default HomeAbout;
