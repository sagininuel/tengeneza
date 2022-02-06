import React from "react";
import "./TrolleyIcon.css";

function TrolleyIcon() {
  return (
    <div className="trolley-icon">
      <div className="vector-container">
        <img className="vector-3" src="/img/vector-3-1@2x.svg" />
        <img className="vector-4" src="/img/vector-4-1@2x.svg" />
      </div>
      <div className="ellipse-container">
        <div className="ellipse-2 border-1-5px-grape"></div>
        <div className="ellipse-3 border-1-5px-grape"></div>
      </div>
    </div>
  );
}

export default TrolleyIcon;
