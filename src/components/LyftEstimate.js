import React from "react";
import "./LyftEstimate.css";
import { FaCircle } from "react-icons/fa";

const LyftEstimate = () => {
  return (
    <div className="lyft-estimate">
      <div className="lyft-estimate-title">
        <h2>Ready to roll?</h2>
        <h2>Get a Lyft estimate.</h2>
      </div>
      <div className="form-div">
        <form className="lyft-estimate-form">
          <div className="form-group">
            <div className="input-with-icon">
              {/* <i className="fas fa-key"></i> */}
              <FaCircle className="circle-icon" />
              <input
                type="text"
                placeholder="Enter pickup location"
                id="password"
                name="password"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-with-icon">
              {/* <i className="fas fa-key"></i> */}
              <FaCircle className="circle-icon" />
              <input
                type="text"
                placeholder="Enter drop off location"
                id="password"
                name="password"
              />
            </div>
          </div>
          <button className="btn-alt btn-bigger">Get Estimate</button>
        </form>
      </div>
    </div>
  );
};

export default LyftEstimate;
