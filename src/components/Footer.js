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
                <a href="/">Price drop</a>
              </li>
              <li>
                <a href="/">New products</a>
              </li>
              <li>
                <a href="/">Best sales</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>rider</h4>
            <ul>
              <li>
                <a href="/">Delivery</a>
              </li>
              <li>
                <a href="/">Legal notice</a>
              </li>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Secure payment</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>lyft</h4>
            <ul>
              <li>
                <a href="/">New products</a>
              </li>
              <li>
                <a href="/">Best sales</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
              <li>
                <a href="/">Sitemap</a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h4>Contact details</h4>
            <ul>
              <div className="rider-lyft-app-div">
                <a href="/">Lyft driver app</a>
              </div>
              <div className="rider-lyft-app-div">
                <a href="/">Lyft rider app</a>
              </div>
              <div className="rider-lyft-app-div">
                <a href="/">Ride on web</a>
              </div>
            </ul>
          </div>
        </div>

        <div className="footer-two">
          <p>
            copyright &copy; of
            <span>
              <b> bnk-homes </b>
            </span>
            2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
