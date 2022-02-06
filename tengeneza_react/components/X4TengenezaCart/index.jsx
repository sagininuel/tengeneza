import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Background from "../Background";
import Footer from "../Footer";
import ImageFrame from "../ImageFrame";
import TrolleyIcon from "../TrolleyIcon";
import "./X4TengenezaCart.css";

function X4TengenezaCart(props) {
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
    overlapGroup8,
    title3,
    cupcake1,
    title4,
    title5,
    cupcake2,
    title6,
    title7,
    cupcake3,
    title8,
    title9,
    image3,
    title10,
    title11,
    title12,
    title13,
    title14,
    title15,
    checkOut,
    viewCart,
    backgroundProps,
    imageFrameProps,
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
      <form className="x4-tengeneza-cart screen" name="form12" action="form12" method="post">
        <div className="overlap-group9">
          <Background className={backgroundProps.className} />
          <div className="made-with-laughter-1">
            <div className="overlap-group1-3">
              <div className="title-10 wendyone-normal-black-120px">{title}</div>
              <img className="image-29-1" src={image29} />
              <img className="image-28-1" src={image28} />
            </div>
            <div className="subtitle-40 lato-normal-black-18px-2">{subtitle}</div>
            <a href="javascript:SubmitForm('form12')">
              <div className="group-4-2">
                <div className="overlap-group-10">
                  <div className="oder-now-1 lato-normal-corn-field-16px">{oderNow}</div>
                </div>
              </div>
            </a>
          </div>
          <div className="rabbit-1">
            <div className="overlap-group3-1">
              <div className="overlap-group2-2 lato-normal-black-18px-2">
                <img className="image-21-1" src={image21} />
                <div className="image-24-1"></div>
                <div className="widget-wrapper">
                  <a href="javascript:SubmitForm('form12')">
                    <img className="image-22" src={image22} />
                  </a>
                </div>
                <img className="image-26-1" src={image26} />
                <img className="image-25-1" src={image25} />
                <div className="subtitle-41">{subtitle2}</div>
                <div className="subtitle-42">{subtitle3}</div>
              </div>
              <img className="image-27-1" src={image27} />
            </div>
            <div className="subtitle-43 lato-normal-black-18px-2">{subtitle4}</div>
          </div>
          <Footer />
          <ImageFrame className={imageFrameProps.className} />
          <img className="image-18-1 animate-enter7" src={image18} />
          <div className="simple-sweet-life-1">
            <div className="title-11 wendyone-normal-white-120px">{title2}</div>
            <div className="subtitle-44 lato-normal-white-18px">{subtitle5}</div>
            <a href="javascript:SubmitForm('form12')">
              <div className="group-4-3">
                <div className="overlap-group-11">
                  <div className="order-now-3 lato-normal-chalet-green-16px">{orderNow}</div>
                </div>
              </div>
            </a>
          </div>
          <div className="top-bar-1">
            <div className="overlap-group6-1">
              <div className="order-now-4 lato-normal-white-18px">{orderNow2}</div>
              <Link to="/2-our-story-video-map">
                <div className="our-services-2 lato-normal-white-18px">{ourServices}</div>
              </Link>
            </div>
            <div className="get-it-right-once-2 lato-black-white-18px">{getItRightOnce}</div>
          </div>
          <div className="overlap-group7-1">
            <TrolleyIcon />
            <div className="ellipse-2-5"></div>
            <div className="number-2 lato-normal-grape-14px">{number}</div>
          </div>
          <div className="overlap-group8-1" style={{ backgroundImage: `url(${overlapGroup8})` }}>
            <div className="flex-col-8">
              <div className="flex-row-8">
                <div className="title-12">{title3}</div>
                <img className="vector-5" src="/img/vector-5-1@2x.svg" />
              </div>
              <img className="vector-6" src="/img/vector-6@2x.svg" />
            </div>
            <div className="flex-row-9">
              <img className="cupcake-1" src={cupcake1} />
              <div className="title-13 lato-bold-grape-20px">{title4}</div>
              <div className="title-14 lato-bold-grape-26px">{title5}</div>
            </div>
            <div className="flex-row-10">
              <img className="cupcake-2" src={cupcake2} />
              <div className="title-15 lato-bold-grape-20px">{title6}</div>
              <div className="title-16 lato-bold-grape-26px">{title7}</div>
            </div>
            <div className="flex-row-11">
              <img className="cupcake-3" src={cupcake3} />
              <div className="title-17 lato-bold-grape-20px">{title8}</div>
              <div className="title-18 lato-bold-grape-26px">{title9}</div>
            </div>
            <div className="flex-row-12">
              <img className="image-3" src={image3} />
              <div className="title-container-5">
                <div className="title-19 lato-bold-grape-20px">{title10}</div>
                <div className="title-20 lato-bold-grape-26px">{title11}</div>
              </div>
            </div>
            <img className="vector-7" src="/img/vector-7@2x.svg" />
            <div className="title-container-6">
              <div className="title-21 lato-bold-grape-20px">{title12}</div>
              <div className="title-22 lato-bold-grape-26px">{title13}</div>
            </div>
            <div className="title-container-7">
              <div className="title-23 lato-bold-grape-20px">{title14}</div>
              <div className="title-24 lato-bold-grape-26px">{title15}</div>
            </div>
            <a href="javascript:SubmitForm('form12')" className="align-self-flex-center">
              <div className="cta-5">
                <a href="javascript:SubmitForm('form12')">
                  <div className="group-1">
                    <div className="overlap-group-12">
                      <div className="check-out lato-normal-corn-field-16px">{checkOut}</div>
                    </div>
                  </div>
                </a>
              </div>
            </a>
            <Link to="/5-check-out" className="align-self-flex-center">
              <div className="view-cart lato-normal-grape-16px">{viewCart}</div>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default X4TengenezaCart;
