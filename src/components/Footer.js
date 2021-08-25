import React from "react";
import "./Footer.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-one">
          <div className="footer-item">
            <h4>driver</h4>
            <ul>
              <li>
                <a href="/">Become a Driver</a>
              </li>
              <li>
                <a href="/">Earnings</a>
              </li>
              <li>
                <a href="/">Cities</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
              <li>
                <a href="/">Safety</a>
              </li>
              <li>
                <a href="/">Application Requirements</a>
              </li>
              <li>
                <a href="/">Express Drive</a>
              </li>
              <li>
                <a href="/">Bonus</a>
              </li>
              <li>
                <a href="/">Lyft Rewards</a>
              </li>
              <li>
                <a href="/">Driving Opportuinities</a>
              </li>
              <li>
                <a href="/">Insurance</a>
              </li>
              <li>
                <a href="/">Hub</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>rider</h4>
            <ul>
              <li>
                <a href="/">Sign up to ride</a>
              </li>
              <li>
                <a href="/">Fare Estimate</a>
              </li>
              <li>
                <a href="/">Lyft Pink</a>
              </li>
              <li>
                <a href="/">Cities</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
              <li>
                <a href="/">Safety</a>
              </li>
              <li>
                <a href="/">Business Profile</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
              <li>
                <a href="/">Airports</a>
              </li>
              <li>
                <a href="/">Gift Cards</a>
              </li>
              <li>
                <a href="/">Donate</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>lyft</h4>
            <ul>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">LyftUp</a>
              </li>
              <li>
                <a href="/">Business</a>
              </li>
              <li>
                <a href="/">Rentals</a>
              </li>
              <li>
                <a href="/">Bikes</a>
              </li>
              <li>
                <a href="/">Scooters</a>
              </li>
              <li>
                <a href="/">Self-Driving</a>
              </li>
              <li>
                <a href="/">Lyft Media</a>
              </li>
              <li>
                <a href="/">Developers</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">Investor Relations</a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            {/* <h4></h4> */}
            <ul>
              <div className="rider-lyft-app-div">
                <div className="rider-lyft-app">
                  <a href="/">Lyft driver app</a>
                </div>
              </div>
              <div className="rider-lyft-app-div">
                <div className="rider-lyft-app">
                  <a href="/">Lyft rider app</a>
                </div>
              </div>
              <div className="rider-lyft-app-div">
                <div className="rider-lyft-app">
                  <a href="/">Ride on web</a>
                </div>
              </div>
            </ul>
          </div>
        </div>

        <div className="footer-two">
          <p>
            <span> <u>Terms</u> </span>
            <span> <u>Privacy</u> </span>
            <span> &copy; 2021, Lyft, Inc.</span>
            <span>CPUC ID No. TCP0032513-P</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
