import React from "react";
import "./Background.css";

function Background(props) {
  const { className } = props;

  return (
    <div className={`background-1 ${className || ""}`}>
      <div className="overlap-group-5">
        <img className="bg-3" src="/img/bg-3@1x.png" />
        <img className="line-6" src="/img/line-6@1x.svg" />
        <img className="line-7" src="/img/line-7@1x.svg" />
        <img className="rectangle-42" src="/img/rectangle-42@1x.svg" />
        <img className="rectangle-43" src="/img/rectangle-43@1x.svg" />
      </div>
    </div>
  );
}

export default Background;
