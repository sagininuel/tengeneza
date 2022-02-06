import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Background from "../Background";
import Footer from "../Footer";
import ImageFrame from "../ImageFrame";
import TrolleyIcon from "../TrolleyIcon";
import "./X3Tengeneza.css";

function X3Tengeneza(props) {
  const {
    title,
    image29,
    image28,
    subtitle,
    oderNow,
    image21,
    image22,
    image26,
    image25,
    subtitle2,
    subtitle3,
    image27,
    subtitle4,
    image18,
    title2,
    subtitle5,
    orderNow,
    orderNow2,
    ourServices,
    getItRightOnce,
    number,
  } = props;

  useEffect(() => {
    var image = document.querySelectorAll(".image-22");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 1.2,
      overflow: false,
      delay: 0.4,
      transition: "none",
    });
  }, []);

  return (
    <div className="container-center-horizontal">
      <form className="x3-tengeneza screen" name="form7" action="form7" method="post">
        <div className="overlap-group8">
          <a href="javascript:SubmitForm('form7')">
            <div className="background">
              <Background />
            </div>
          </a>
          <div className="made-with-laughter">
            <div className="overlap-group1-1">
              <div className="title-5 wendyone-normal-black-120px">{title}</div>
              <img className="image-29" src={image29} />
              <img className="image-28" src={image28} />
            </div>
            <div className="subtitle-11 lato-normal-black-18px-2">{subtitle}</div>
            <div className="group-4">
              <div className="overlap-group-3">
                <div className="oder-now lato-normal-corn-field-16px">{oderNow}</div>
              </div>
            </div>
          </div>
          <div className="rabbit">
            <div className="overlap-group3">
              <div className="overlap-group2-1 lato-normal-black-18px-2">
                <img className="image-21" src={image21} />
                <div className="image-24"></div>
                <div className="widget-wrapper">
                  <a href="javascript:SubmitForm('form7')">
                    <img className="image-22" src={image22} />
                  </a>
                </div>
                <img className="image-26" src={image26} />
                <img className="image-25" src={image25} />
                <div className="subtitle-12">{subtitle2}</div>
                <div className="subtitle-13">{subtitle3}</div>
              </div>
              <img className="image-27" src={image27} />
            </div>
            <div className="subtitle-14 lato-normal-black-18px-2">{subtitle4}</div>
          </div>
          <Footer />
          <ImageFrame />
          <img className="image-18 animate-enter5" src={image18} />
          <div className="simple-sweet-life">
            <div className="title-6 wendyone-normal-white-120px">{title2}</div>
            <div className="subtitle-15 lato-normal-white-18px">{subtitle5}</div>
            <a href="javascript:SubmitForm('form7')">
              <div className="group-4-1">
                <div className="overlap-group-4">
                  <div className="order-now-1 lato-normal-chalet-green-16px">{orderNow}</div>
                </div>
              </div>
            </a>
          </div>
          <div className="top-bar">
            <div className="overlap-group6">
              <div className="order-now-2 lato-normal-white-18px">{orderNow2}</div>
              <Link to="/2-our-story-video-map">
                <div className="our-services-1 lato-normal-white-18px">{ourServices}</div>
              </Link>
            </div>
            <div className="get-it-right-once-1 lato-black-white-18px">{getItRightOnce}</div>
          </div>
          <a href="javascript:SubmitForm('form7')">
            <div className="shopping-cart-1">
              <div className="overlap-group7">
                <TrolleyIcon />
                <div className="ellipse-2-4"></div>
                <div className="number-1 lato-normal-grape-14px">{number}</div>
              </div>
            </div>
          </a>
        </div>
      </form>
    </div>
  );
}

export default X3Tengeneza;
