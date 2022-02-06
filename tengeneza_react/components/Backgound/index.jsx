import React from "react";
import "./Backgound.css";

function Backgound(props) {
  const { backgound } = props;

  return (
    <div className="backgound" style={{ backgroundImage: `url(${backgound})` }}>
      <div className="overlap-group-2">
        <img className="rectangle-36" src="/img/rectangle-36@1x.svg" />
        <img className="rectangle-37" src="/img/rectangle-37@1x.svg" />
        <img className="line-3" src="/img/line-3@1x.svg" />
        <img className="line-4" src="/img/line-4@1x.svg" />
        <img className="line-5" src="/img/line-4@1x.svg" />
      </div>
    </div>
  );
}

export default Backgound;
