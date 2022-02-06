import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./X5CheckOut.css";

function X5CheckOut(props) {
  const {
    image47,
    title,
    subtitle,
    shop,
    ourValues,
    tengeneza,
    cupcake5,
    title2,
    number,
    title3,
    cupcake52,
    title4,
    number2,
    title5,
    cupcake6,
    title6,
    number3,
    title7,
    cupcake62,
    title8,
    number4,
    title9,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    title10,
    placeOrder,
    rectangle45,
    title11,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="x5-check-out screen" name="form16" action="form16" method="post">
        <div className="overlap-group2-3">
          <div className="flex-row-13">
            <div className="overlap-group5-1">
              <div className="overlap-group4-3">
                <a href="javascript:SubmitForm('form16')">
                  <img className="image-47" src={image47} />
                </a>
                <div className="title-26 wendyone-normal-white-120px">{title}</div>
              </div>
              <div className="subtitle-45">{subtitle}</div>
              <div className="group-18 lato-normal-white-18px">
                <Link to="/1-homepage">
                  <div className="shop lato-normal-white-18px">{shop}</div>
                </Link>
                <div className="our-values">{ourValues}</div>
                <div className="tengeneza-1">{tengeneza}</div>
              </div>
            </div>
            <div className="shopping-cart-2">
              <div className="vector-container-4">
                <img className="vector-3-4" src="/img/vector-3-3@2x.svg" />
                <img className="vector-4-4" src="/img/vector-4-3@2x.svg" />
              </div>
              <div className="ellipse-container-4">
                <div className="ellipse-2-6 border-1-5px-white"></div>
                <div className="ellipse-3-4 border-1-5px-white"></div>
              </div>
            </div>
          </div>
          <div className="overlap-group3-2">
            <img className="vector-7-1" src="/img/vector-7-1@1x.svg" />
            <div className="group-26">
              <div className="group-23">
                <img className="cupcake" src={cupcake5} />
                <div className="title-25 wendyone-normal-white-32px">{title2}</div>
                <div className="overlap-group-13 border-2px-white">
                  <img className="minus" src="/img/minus-15@2x.svg" />
                  <div className="number-3 wendyone-normal-white-20px">{number}</div>
                  <img className="plus" src="/img/plus-15@2x.svg" />
                </div>
                <div className="title-27 wendyone-normal-white-36px">{title3}</div>
              </div>
              <div className="group-128">
                <img className="cupcake" src={cupcake52} />
                <div className="title-25 wendyone-normal-white-32px">{title4}</div>
                <div className="overlap-group-13 border-2px-white">
                  <img className="minus" src="/img/minus-15@2x.svg" />
                  <div className="number-3 wendyone-normal-white-20px">{number2}</div>
                  <img className="plus" src="/img/plus-15@2x.svg" />
                </div>
                <div className="title-28 wendyone-normal-white-36px">{title5}</div>
              </div>
              <div className="group-127">
                <img className="cupcake" src={cupcake6} />
                <div className="title-29 wendyone-normal-white-32px">{title6}</div>
                <div className="overlap-group-14 border-2px-white">
                  <img className="minus" src="/img/minus-15@2x.svg" />
                  <div className="number-4 wendyone-normal-white-20px">{number3}</div>
                  <img className="plus-1" src="/img/plus-15@2x.svg" />
                </div>
                <div className="title-30 wendyone-normal-white-36px">{title7}</div>
              </div>
              <div className="group-24">
                <img className="cupcake" src={cupcake62} />
                <div className="title-31 wendyone-normal-white-32px">{title8}</div>
                <div className="overlap-group-15 border-2px-white">
                  <img className="minus" src="/img/minus-17@2x.svg" />
                  <div className="number-5 wendyone-normal-white-20px">{number4}</div>
                  <img className="plus-2" src="/img/plus-17@2x.svg" />
                </div>
                <div className="title-32 wendyone-normal-white-36px">{title9}</div>
              </div>
              <div className="place-order">
                <div className="flex-row-14">
                  <div className="total-to-pay lato-bold-corn-field-20px">
                    <span className="lato-bold-corn-field-20px">{spanText}</span>
                    <span className="lato-bold-corn-field-20px">{spanText2}</span>
                    <span className="lato-bold-corn-field-20px">{spanText3}</span>
                    <span className="lato-bold-corn-field-20px">{spanText4}</span>
                    <span className="lato-bold-corn-field-20px">{spanText5}</span>
                  </div>
                  <div className="title-33">{title10}</div>
                </div>
                <a href="javascript:SubmitForm('form16')" className="align-self-flex-center">
                  <div className="cta-6">
                    <div className="overlap-group-16">
                      <a href="javascript:SubmitForm('form16')">
                        <div className="place-order-1 lato-normal-white-16px">{placeOrder}</div>
                      </a>
                    </div>
                  </div>
                </a>
              </div>
              <div className="group-126">
                <div className="happy">
                  <iframe
                    style={{ border: 0 }}
                    id="ytplayer"
                    type="text/html"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/r2psKSjlZi8?rel=0&mute=1&autoplay=1"
                    frameborder="0"
                    allowfullscreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen"
                    msallowfullscreen="msallowfullscreen"
                    oallowfullscreen="oallowfullscreen"
                    webkitallowfullscreen="webkitallowfullscreen"
                  ></iframe>
                </div>
                <div className="lipa-na-mpesa">
                  <div className="overlap-group-17">
                    <img className="lipa-na-mpesa-1" src="/img/lipa-na-mpesa@2x.svg" />
                    <a href="javascript:SubmitForm('form16')">
                      <div className="title-34">{title11}</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className={footerProps.className} />
        </div>
      </form>
    </div>
  );
}

export default X5CheckOut;
