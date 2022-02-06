import React from "react";
import "./CTAs.css";

function CTAs(props) {
  const { className } = props;

  return (
    <div className={`ct-as-2-1 ${className || ""}`}>
      <div className="overlap-group1-5 border-2px-black">
        <img className="minus-2" src="/img/minus@2x.svg" />
        <div className="number-8 avenir-black-black-20px">0</div>
        <img className="plus-4" src="/img/plus@2x.svg" />
      </div>
      <div className="overlap-group-28">
        <div className="add-to-cart-6 lato-normal-white-16px">ADD TO CART</div>
      </div>
    </div>
  );
}

export default CTAs;
