import React from "react";
import "./ImageFrame.css";

function ImageFrame(props) {
  const { className } = props;

  return (
    <div className={`image-frame animate-enter4 ${className || ""}`}>
      <div className="image-container-1">
        <img className="image-20" src="/img/image-20@2x.png" />
        <img className="image-19" src="/img/image-19@2x.png" />
      </div>
    </div>
  );
}

export default ImageFrame;
