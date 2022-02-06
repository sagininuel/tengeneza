import React from "react";
import { Link } from "react-router-dom";
import Tengeneza from "../Tengeneza";
import CTAs from "../CTAs";
import TrolleyIcon from "../TrolleyIcon";
import "./X1Homepage.css";

function X1Homepage(props) {
  const {
    title,
    subtitle,
    tengeneza,
    title2,
    subtitle2,
    orderNow,
    title3,
    subtitle3,
    ourStory,
    image11,
    title4,
    cupcake3,
    title5,
    subtitle4,
    number,
    addToCart,
    title6,
    subtitle5,
    image3,
    title7,
    subtitle6,
    number2,
    addToCart2,
    image4,
    title8,
    subtitle7,
    number3,
    addToCart3,
    image5,
    title9,
    subtitle8,
    image6,
    title10,
    subtitle9,
    image7,
    title11,
    subtitle10,
    number4,
    addToCart4,
    image8,
    title12,
    subtitle11,
    image9,
    title13,
    subtitle12,
    image10,
    subtitle13,
    title14,
    subtitle14,
    subtitle15,
    subtitle16,
    inputType,
    inputPlaceholder,
    place,
    copyright,
    subtitle17,
    subtitle18,
    subtitle19,
    number5,
    orderNow2,
    ourServices,
    getItRightOnce,
    image95,
    title15,
    subtitle20,
    number6,
    addToCart5,
    image97,
    title16,
    subtitle21,
    number7,
    addToCart6,
    mini_Party_Catering_Carrot_Cupcake_,
    image2,
    cTAsProps,
    cTAs2Props,
    cTAs3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="x1-homepage screen" name="form18" action="form18" method="post">
        <div className="overlap-group7-2">
          <div className="back-ground">
            <Tengeneza />
          </div>
          <div className="simple-and-realtime animate-enter8" show-on-scroll>
            <div className="title-37 wendyone-normal-black-90px">{title}</div>
            <div className="subtitle-47 lato-normal-black-18px">{subtitle}</div>
            <div className="overlap-group-19">
              <div className="tengeneza-2 lato-normal-corn-field-16px">{tengeneza}</div>
            </div>
          </div>
          <div className="miss-cupcake">
            <div className="title-38 wendyone-normal-black-120px">{title2}</div>
            <div className="subtitle-48 lato-normal-black-18px">{subtitle2}</div>
            <a href="#title">
              <div className="cta-7">
                <div className="overlap-group-20">
                  <div className="order-now-5 lato-normal-corn-field-16px">{orderNow}</div>
                </div>
              </div>
            </a>
          </div>
          <div className="once-upon-a-time-1">
            <div className="text-2">
              <div className="title-39 wendyone-normal-black-120px">{title3}</div>
              <div className="subtitle-49 lato-normal-black-18px">{subtitle3}</div>
              <a href="javascript:SubmitForm('form18')">
                <div className="cta-8">
                  <div className="overlap-group-21">
                    <div className="our-story lato-normal-corn-field-16px">{ourStory}</div>
                  </div>
                </div>
              </a>
            </div>
            <img className="image-11 animate-enter9" show-on-scroll src={image11} />
          </div>
          <div className="title-40 wendyone-normal-black-90px animate-enter10" id="title" show-on-scroll>
            {title4}
          </div>
          <div className="cart9 animate-enter11" show-on-scroll>
            <img className="cupcake-3-1" src={cupcake3} />
            <div className="cupcake-info-2">
              <div className="title-35 wendyone-normal-black-32px">{title5}</div>
              <div className="subtitle-46 lato-normal-black-18px">{subtitle4}</div>
              <div className="ct-as">
                <div className="overlap-group1-4 border-2px-black">
                  <img className="minus-1" src="/img/minus@2x.svg" />
                  <div className="number-6 avenir-black-black-20px">{number}</div>
                  <img className="plus-3" src="/img/plus@2x.svg" />
                </div>
                <div className="overlap-group-22">
                  <div className="add-to-cart lato-normal-white-16px">{addToCart}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart8 animate-enter12" show-on-scroll>
            <div className="cupcake-info">
              <div className="title-41 wendyone-normal-black-32px">{title6}</div>
              <div className="subtitle-46 lato-normal-black-18px">{subtitle5}</div>
              <CTAs />
            </div>
            <img className="image-3-1" src={image3} />
          </div>
          <div className="cart7 animate-enter13" show-on-scroll>
            <div className="cupcake-info">
              <div className="title-36 wendyone-normal-black-32px">{title7}</div>
              <div className="subtitle-46 lato-normal-black-18px">{subtitle6}</div>
              <div className="ct-as">
                <div className="overlap-group1-4 border-2px-black">
                  <img className="minus-1" src="/img/minus@2x.svg" />
                  <div className="number-6 avenir-black-black-20px">{number2}</div>
                  <img className="plus-3" src="/img/plus@2x.svg" />
                </div>
                <div className="overlap-group-18">
                  <div className="add-to-cart-1 lato-normal-white-16px">{addToCart2}</div>
                </div>
              </div>
            </div>
            <img className="image-4" src={image4} />
          </div>
          <div className="cart6 animate-enter14" show-on-scroll>
            <div className="cupcake-info">
              <div className="title-36 wendyone-normal-black-32px">{title8}</div>
              <div className="subtitle-46 lato-normal-black-18px">{subtitle7}</div>
              <div className="ct-as">
                <div className="overlap-group1-4 border-2px-black">
                  <img className="minus-1" src="/img/minus@2x.svg" />
                  <div className="number-6 avenir-black-black-20px">{number3}</div>
                  <img className="plus-3" src="/img/plus@2x.svg" />
                </div>
                <div className="overlap-group-23">
                  <div className="add-to-cart-2 lato-normal-white-16px">{addToCart3}</div>
                </div>
              </div>
            </div>
            <img className="image-5" src={image5} />
          </div>
          <div className="cart5 animate-enter15" show-on-scroll>
            <div className="cupcake-info-1">
              <div className="title-42 wendyone-normal-black-32px">{title9}</div>
              <div className="subtitle-46 lato-normal-black-18px">{subtitle8}</div>
              <CTAs className={cTAsProps.className} />
            </div>
            <img className="image-6" src={image6} />
          </div>
          <div className="cart4 animate-enter16" show-on-scroll>
            <div className="cupcake-info-3">
              <div className="title-43 wendyone-normal-black-32px">{title10}</div>
              <div className="subtitle-50 lato-normal-black-18px">{subtitle9}</div>
              <CTAs className={cTAs2Props.className} />
            </div>
            <img className="image-7" src={image7} />
          </div>
          <div className="cart3 animate-enter17" show-on-scroll>
            <div className="cupcake-info-4">
              <div className="title-44 wendyone-normal-black-32px">{title11}</div>
              <div className="subtitle-51 lato-normal-black-18px">{subtitle10}</div>
              <div className="ct-as">
                <div className="overlap-group1-4 border-2px-black">
                  <img className="minus-1" src="/img/minus@2x.svg" />
                  <div className="number-6 avenir-black-black-20px">{number4}</div>
                  <img className="plus-3" src="/img/plus@2x.svg" />
                </div>
                <div className="overlap-group-18">
                  <div className="add-to-cart-3 lato-normal-corn-field-16px">{addToCart4}</div>
                </div>
              </div>
            </div>
            <img className="image-8" src={image8} />
          </div>
          <div className="cart2 animate-enter18" show-on-scroll>
            <div className="cupcake-info-1">
              <div className="title-45 wendyone-normal-black-32px">{title12}</div>
              <div className="subtitle-46 lato-normal-black-18px">{subtitle11}</div>
              <CTAs className={cTAs3Props.className} />
            </div>
            <img className="image-9" src={image9} />
          </div>
          <div className="cart1 animate-enter19" show-on-scroll>
            <div className="cupcake-info-1">
              <div className="title-35 wendyone-normal-black-32px">{title13}</div>
              <div className="subtitle-46 lato-normal-black-18px">{subtitle12}</div>
              <CTAs />
            </div>
            <img className="image-10" src={image10} />
          </div>
          <div className="footer-4">
            <div className="flex-row-15">
              <div className="flex-col-9 lato-bold-white-18px">
                <div className="subtitle-52">{subtitle13}</div>
                <div className="title-container-8">
                  <div className="title-46">{title14}</div>
                  <div className="subtitle-53 lato-bold-white-18px">{subtitle14}</div>
                </div>
                <div className="subtitle-54">{subtitle15}</div>
              </div>
              <div className="flex-col-10">
                <div className="subtitle-55 lato-bold-white-18px">{subtitle16}</div>
                <div className="overlap-group5-2 border-2px-white">
                  <input className="subtitle-56" name="subtitle" placeholder={inputPlaceholder} type={inputType} />
                </div>
              </div>
              <div className="cta-9">
                <div className="overlap-group-24">
                  <div className="place-4">{place}</div>
                </div>
              </div>
            </div>
            <div className="flex-row-16 lato-bold-white-18px">
              <div className="copyright-4">{copyright}</div>
              <div className="subtitle-57">{subtitle17}</div>
              <div className="subtitle-container lato-bold-white-18px">
                <div className="subtitle-58">{subtitle18}</div>
                <div className="subtitle-59">{subtitle19}</div>
              </div>
            </div>
          </div>
          <a href="javascript:SubmitForm('form18')">
            <div className="shopping-cart-3">
              <div className="overlap-group6-2">
                <TrolleyIcon />
                <div className="ellipse-1-1"></div>
                <div className="number-7">{number5}</div>
              </div>
            </div>
          </a>
          <div className="top_bar-1">
            <div className="order-now-6">{orderNow2}</div>
            <Link to="/2-our-story-video-map">
              <div className="our-services-3 lato-normal-black-18px">{ourServices}</div>
            </Link>
            <Link to="/3-tengeneza">
              <div className="get-it-right-once-3 lato-normal-black-18px">{getItRightOnce}</div>
            </Link>
          </div>
          <Link to="/2-our-story-video-map">
            <img className="image-95 animate-enter20" src={image95} />
          </Link>
          <div className="cart10 animate-enter21" show-on-scroll>
            <div className="group-30">
              <div className="title-47 wendyone-normal-black-32px">{title15}</div>
              <div className="subtitle-60 lato-normal-black-18px">{subtitle20}</div>
              <div className="ct-as-1">
                <div className="overlap-group1-4 border-2px-black">
                  <img className="minus-1" src="/img/minus@2x.svg" />
                  <div className="number-6 avenir-black-black-20px">{number6}</div>
                  <img className="plus-3" src="/img/plus@2x.svg" />
                </div>
                <div className="overlap-group-25">
                  <div className="add-to-cart-4 lato-normal-white-16px">{addToCart5}</div>
                </div>
              </div>
            </div>
            <img className="image-97" src={image97} />
          </div>
          <div className="cart11 animate-enter22" show-on-scroll>
            <div className="group-29">
              <div className="title-48 wendyone-normal-black-32px">{title16}</div>
              <div className="subtitle-61 lato-normal-black-18px">{subtitle21}</div>
              <div className="ct-as-1">
                <div className="overlap-group1-4 border-2px-black">
                  <img className="minus-1" src="/img/minus@2x.svg" />
                  <div className="number-6 avenir-black-black-20px">{number7}</div>
                  <img className="plus-3" src="/img/plus@2x.svg" />
                </div>
                <div className="overlap-group-26">
                  <div className="add-to-cart-5 lato-normal-white-16px">{addToCart6}</div>
                </div>
              </div>
            </div>
            <img className="mini_party_catering_" src={mini_Party_Catering_Carrot_Cupcake_} />
          </div>
          <img className="image-2 animate-enter23" show-on-scroll src={image2} />
        </div>
      </form>
    </div>
  );
}

export default X1Homepage;
