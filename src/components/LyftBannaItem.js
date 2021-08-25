import React from "react";
import "./LyftBannaItem.css";
import Card from "./Card";

const LyftBannaItem = (props) => {
  console.log(props);
  const { lyftbannas } = props;
  console.log(lyftbannas);
  return (
    <Card className="lyftbanna-card">
      <div className="lyftbanna-content">
        <div className="lyftbanna-b">
          <b> {lyftbannas.name}</b>
        </div>
        <div className="lyftbanna-img">
          <img src={lyftbannas.image} alt="people" />
        </div>
        <div className="lyftbanna-content-text">
          <div className="lyftbanna-b">
            <i> {lyftbannas.name}</i>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LyftBannaItem;
