import React from "react";
import "./LyftBannaItem.css";
import Card from "./Card";
import { FaBolt, FaMale } from "react-icons/fa";

const LyftBannaItem = (props) => {
  console.log(props);
  const { lyftbannas } = props;
  console.log(lyftbannas);
  return (
    <Card className="lyftbanna-card">
      <div className="lyftbanna-content">
        <div className="lyftbanna-title">
          <h4> {lyftbannas.name}</h4>
        </div>
        <div className="lyftbanna-img">
          <img src={lyftbannas.image} alt="people" />
        </div>
        <div className="lyftbanna-content-text">
          <div className="lyftbanna-b">
            <span>
              <FaBolt className="bolt-icon" />
            </span>
            <p> {lyftbannas.benefitOne}</p>
          </div>
          <div className="lyftbanna-b">
            <span>
              <FaMale className="bolt-icon" />
            </span>
            <p> {lyftbannas.bendfitTwo}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LyftBannaItem;
