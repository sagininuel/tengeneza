import React from "react";
import "./Footer.css";

function Footer(props) {
  const { className } = props;

  return (
    <div className={`footer-1 ${className || ""}`}>
      <div className="flex-row-2">
        <div className="flex-col-2 lato-bold-oasis-18px">
          <div className="subtitle-16">Shop</div>
          <div className="title-container-2">
            <div className="title-7 wendyone-normal-oasis-32px">Tengeneza</div>
            <div className="subtitle-17 lato-bold-oasis-18px">Our Values</div>
          </div>
          <div className="subtitle-18">Journey With Us</div>
        </div>
        <div className="flex-col-3">
          <div className="subtitle-19 lato-bold-oasis-18px">Get a post straight to your email.</div>
          <div className="overlap-group4-1 border-2px-oasis">
            <input
              className="subtitle-20 lato-bold-oasis-16px"
              name="subtitle"
              placeholder="Email address"
              type="text"
            />
          </div>
        </div>
        <div className="cta-2">
          <div className="overlap-group-7">
            <div className="place-1 lato-normal-grape-16px">SEND</div>
          </div>
        </div>
      </div>
      <div className="flex-row-3 lato-bold-oasis-18px">
        <div className="copyright-1">©</div>
        <div className="subtitle-21">Tengeneza 2022</div>
        <div className="subtitle-22">Cookies policy</div>
        <div className="subtitle-23">Terms of use</div>
      </div>
    </div>
  );
}

export default Footer;
