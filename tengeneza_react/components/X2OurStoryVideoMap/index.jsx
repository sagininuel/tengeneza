import React from "react";
import { Link } from "react-router-dom";
import Story from "../Story";
import TrolleyIcon from "../TrolleyIcon";
import "./X2OurStoryVideoMap.css";

function X2OurStoryVideoMap(props) {
  const {
    title,
    subtitle,
    orderNow,
    ourServices,
    getItRightOnce,
    number,
    title2,
    subtitle2,
    image15,
    title3,
    subtitle3,
    tengeneza,
    image16,
    image17,
    subtitle4,
    title4,
    subtitle5,
    subtitle6,
    subtitle7,
    inputType,
    inputPlaceholder,
    place,
    copyright,
    subtitle8,
    subtitle9,
    subtitle10,
    title5,
    storyProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="x2-our-story-video-map screen" name="form3" action="form3" method="post">
        <div className="overlap-group5">
          <Story backgoundProps={storyProps.backgoundProps} />
          <a href="javascript:SubmitForm('form3')">
            <div className="text">
              <div className="title">{title}</div>
              <div className="subtitle lato-normal-black-18px-2">{subtitle}</div>
            </div>
          </a>
          <div className="top_bar">
            <div className="order-now lato-normal-grape-18px">{orderNow}</div>
            <div className="our-services">{ourServices}</div>
            <Link to="/3-tengeneza">
              <div className="get-it-right-once lato-normal-grape-18px">{getItRightOnce}</div>
            </Link>
          </div>
          <a href="javascript:SubmitForm('form3')">
            <div className="shopping-cart">
              <div className="overlap-group2">
                <TrolleyIcon />
                <div className="ellipse-1"></div>
                <div className="number lato-normal-grape-14px">{number}</div>
              </div>
            </div>
          </a>
          <div className="once-upon-a-time">
            <div className="title-container">
              <h1 className="title-1">{title2}</h1>
              <div className="subtitle-1 lato-normal-black-18px">{subtitle2}</div>
            </div>
            <img className="image-15 animate-enter" src={image15} />
          </div>
          <div className="the-simple-sweet-life">
            <div className="text-1">
              <div className="title-2 wendyone-normal-black-90px">{title3}</div>
              <div className="subtitle-2 lato-normal-black-18px-2">{subtitle3}</div>
              <a href="javascript:SubmitForm('form3')">
                <div className="cta">
                  <div className="overlap-group">
                    <div className="tengeneza lato-normal-corn-field-16px">{tengeneza}</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="image-container">
              <img className="image-16 animate-enter1" show-on-scroll src={image16} />
              <img className="image-17 animate-enter2" src={image17} />
            </div>
          </div>
          <div className="video">
            <iframe
              style={{ border: 0 }}
              id="ytplayer"
              type="text/html"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ORGr7F9vZno?rel=0&mute=1&autoplay=1"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <div className="rectangle-23"></div>
          <div className="footer">
            <div className="flex-row">
              <div className="flex-col lato-bold-blue-charcoal-18px">
                <div className="subtitle-3">{subtitle4}</div>
                <div className="title-container-1">
                  <div className="title-3">{title4}</div>
                  <div className="subtitle-4 lato-bold-blue-charcoal-18px">{subtitle5}</div>
                </div>
                <div className="subtitle-5">{subtitle6}</div>
              </div>
              <div className="flex-col-1">
                <div className="subtitle-6 lato-bold-blue-charcoal-18px">{subtitle7}</div>
                <div className="overlap-group4">
                  <input className="subtitle-7" name="subtitle" placeholder={inputPlaceholder} type={inputType} />
                </div>
              </div>
              <div className="cta-1">
                <div className="overlap-group-1">
                  <div className="place lato-normal-white-16px">{place}</div>
                </div>
              </div>
            </div>
            <div className="flex-row-1 lato-bold-blue-charcoal-18px">
              <div className="copyright">{copyright}</div>
              <div className="subtitle-8">{subtitle8}</div>
              <div className="subtitle-9">{subtitle9}</div>
              <div className="subtitle-10">{subtitle10}</div>
            </div>
          </div>
          <div className="title-4 animate-enter3">{title5}</div>
          <div className="map"></div>
        </div>
      </form>
    </div>
  );
}

export default X2OurStoryVideoMap;
