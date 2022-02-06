import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X2OurStoryVideoMap from "./components/X2OurStoryVideoMap";
import X3Tengeneza from "./components/X3Tengeneza";
import X4TengenezaCart from "./components/X4TengenezaCart";
import X5CheckOut from "./components/X5CheckOut";
import X1Homepage from "./components/X1Homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/2-our-story-video-map">
          <X2OurStoryVideoMap {...x2OurStoryVideoMapData} />
        </Route>
        <Route path="/3-tengeneza">
          <X3Tengeneza {...x3TengenezaData} />
        </Route>
        <Route path="/4-tengeneza-cart">
          <X4TengenezaCart {...x4TengenezaCartData} />
        </Route>
        <Route path="/5-check-out">
          <X5CheckOut {...x5CheckOutData} />
        </Route>
        <Route path="/:path(|1-homepage)">
          <X1Homepage {...x1HomepageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const backgoundData = {
    backgound: "/img/image-90@1x.png",
};

const storyData = {
    backgoundProps: backgoundData,
};

const x2OurStoryVideoMapData = {
    title: "Services customized with you",
    subtitle: <>The art of design runs deep in our lineage.. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /><br />Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</>,
    orderNow: "Order Now",
    ourServices: "Our services",
    getItRightOnce: "Get It Right Once!",
    number: "8",
    title2: "once upon a time..",
    subtitle2: "The art of design runs deep in our lineage.. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image15: "/img/image-15@1x.png",
    title3: "The Simple, Sweet Life",
    subtitle3: "The art of design runs deep in our lineage.. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    tengeneza: "TENGENEZA",
    image16: "/img/image-16@1x.png",
    image17: "/img/image-17@2x.png",
    subtitle4: "Check Out Our Samples",
    title4: "Tengeneza",
    subtitle5: "Our Values",
    subtitle6: "Journey With Us",
    subtitle7: "Get a post to your email",
    inputType: "text",
    inputPlaceholder: "Email address",
    place: "SEND",
    copyright: "©",
    subtitle8: "Tengeneza 2022",
    subtitle9: "Cookies policy",
    subtitle10: "Terms of use",
    title5: "Come and visit the Tengeneza store",
    storyProps: storyData,
};

const x3TengenezaData = {
    title: "Made with laughter",
    image29: "/img/image-29@2x.png",
    image28: "/img/image-28@2x.png",
    subtitle: "The art of design runs deep in our lineage.. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    oderNow: "Oder Now",
    image21: "/img/image-21@1x.png",
    image22: "/img/image-22@1x.png",
    image26: "/img/image-26@2x.png",
    image25: "/img/image-25@2x.png",
    subtitle2: "The art of design runs deep in our lineage.. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    subtitle3: "The art of design runs deep in our lineage.. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    image27: "/img/image-27@2x.png",
    subtitle4: "The art of design runs deep in our lineage.. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    image18: "/img/image-18@2x.png",
    title2: "The Simple, Sweet Life",
    subtitle5: <>Couple up till you are married up!<br />The art of design runs deep in our lineage.. Lorem Ipsum is simply dummy text of the printing and typesetting.</>,
    orderNow: "Order Now",
    orderNow2: "Order Now",
    ourServices: "Our Services",
    getItRightOnce: "Get It Right Once!",
    number: "8",
};

const background2Data = {
    className: "background-2",
};

const imageFrame2Data = {
    className: "image-frame-1",
};

const x4TengenezaCartData = {
    title: "Made with laughter",
    image29: "/img/image-29@2x.png",
    image28: "/img/image-28@2x.png",
    subtitle: "The art of design runs deep in our lineage.. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    oderNow: "Oder Now",
    image21: "/img/image-21@1x.png",
    image22: "/img/image-22@1x.png",
    image26: "/img/image-26@2x.png",
    image25: "/img/image-25@2x.png",
    subtitle2: "The art of design runs deep in our lineage.. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    subtitle3: "The art of design runs deep in our lineage.. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    image27: "/img/image-27@2x.png",
    subtitle4: "The art of design runs deep in our lineage.. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    image18: "/img/image-18@2x.png",
    title2: "The Simple, Sweet Life",
    subtitle5: <>Couple up till you are married up!<br />The art of design runs deep in our lineage.. Lorem Ipsum is simply dummy text of the printing and typesetting.</>,
    orderNow: "Order Now",
    orderNow2: "Order Now",
    ourServices: "Our Services",
    getItRightOnce: "Get It Right Once!",
    number: "8",
    overlapGroup8: "/img/image-43@1x.png",
    title3: "Mfuko wangu",
    cupcake1: "/img/cupcake-1@2x.png",
    title4: "logo  x  1",
    title5: "Kshs.499",
    cupcake2: "/img/cupcake-2@2x.png",
    title6: "Business Card  x  7",
    title7: "Kshs. 699",
    cupcake3: "/img/cupcake-3-1@2x.png",
    title8: "Flyer   x  3",
    title9: "Kshs. 599",
    image3: "/img/image-3-1@2x.png",
    title10: "Sticker   x  10",
    title11: "Kshs. 399",
    title12: " Discount",
    title13: "Kshs. 199",
    title14: "Total to pay",
    title15: "Kshs. 1999",
    checkOut: "CHECK OUT",
    viewCart: "VIEW CART",
    backgroundProps: background2Data,
    imageFrameProps: imageFrame2Data,
};

const footer3Data = {
    className: "footer-3",
};

const x5CheckOutData = {
    image47: "/img/image-47@1x.png",
    title: "Check out",
    subtitle: "Complete your order and we'll bring it to your door.",
    shop: "Shop",
    ourValues: "Our Values",
    tengeneza: "Tengeneza",
    cupcake5: "/img/cupcake-5@2x.png",
    title2: "Logo",
    number: "1",
    title3: "Kshs. 499",
    cupcake52: "/img/cupcake-5-1@2x.png",
    title4: "Business Cards",
    number2: "7",
    title5: "Kshs. 699",
    cupcake6: "/img/cupcake-6-1@2x.png",
    title6: "Flyers",
    number3: "3",
    title7: "Kshs. 599",
    cupcake62: "/img/cupcake-6@2x.png",
    title8: "Stickers",
    number4: "10",
    title9: "Kshs. 399",
    spanText: "Total ",
    spanText2: "t",
    spanText3: "o ",
    spanText4: "p",
    spanText5: "ay",
    title10: "Kshs.1999",
    placeOrder: "PLACE ORDER",
    rectangle45: "/img/rectangle-45@2x.png",
    title11: "Lipa na M-Pesa",
    footerProps: footer3Data,
};

const cTAs2Data = {
    className: "ct-as-2-2",
};

const cTAs3Data = {
    className: "ct-as-3",
};

const cTAs4Data = {
    className: "ct-as-2-3",
};

const x1HomepageData = {
    title: "Simple and Real-time.",
    subtitle: <>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has type and scrambled it to make.Lorem Ipsum is simply dummy text of the printing and typeset.<br /><br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has type and scrambled it to make.Lorem Ipsum is simply dummy text of the printing and typeset.<br /><br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has type and scrambled it to make.Lorem Ipsum is simply dummy text of the printing and typeset.</>,
    tengeneza: "TENGENEZA",
    title2: "Tengeneza nasi!",
    subtitle2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has type and scrambled it to make.",
    orderNow: "Order Now",
    title3: "If Kantai can tie...",
    subtitle3: "The art of design runs deep in our lineage.. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ourStory: "OUR STORY",
    image11: "/img/image-11@2x.png",
    title4: "Take it easy, we got you...",
    cupcake3: "/img/cupcake-3@2x.png",
    title5: "Business Card",
    subtitle4: "Lorem Ipsum is simply dummy text of the printing.",
    number: "2",
    addToCart: "ADD TO CART",
    title6: " Logo",
    subtitle5: "Lorem Ipsum is simply dummy text of the printing.",
    image3: "/img/image-3@2x.png",
    title7: "Social distance",
    subtitle6: "Lorem Ipsum is simply dummy text of the printing.",
    number2: "0",
    addToCart2: "ADD TO CART",
    image4: "/img/image-4@2x.png",
    title8: "Wedding cards",
    subtitle7: "Lorem Ipsum is simply dummy text of the printing.",
    number3: "0",
    addToCart3: "ADD TO CART",
    image5: "/img/image-5@2x.png",
    title9: "Safety awareness",
    subtitle8: "Lorem Ipsum is simply dummy text of the printing.",
    image6: "/img/image-6@2x.png",
    title10: "  Logo",
    subtitle9: "Lorem Ipsum is simply dummy text of the printing.",
    image7: "/img/image-7@2x.png",
    title11: "Baby shower",
    subtitle10: "Lorem Ipsum is simply dummy text of the printing.",
    number4: "0",
    addToCart4: "ADD TO CART",
    image8: "/img/image-8@2x.png",
    title12: "Totally nuts",
    subtitle11: "Lorem Ipsum is simply dummy text of the printing.",
    image9: "/img/image-9@2x.png",
    title13: "Pink Vanilla",
    subtitle12: "Lorem Ipsum is simply dummy text of the printing.",
    image10: "/img/image-10@2x.png",
    subtitle13: "Check out our samples",
    title14: "Tengeneza",
    subtitle14: "Our values",
    subtitle15: "Journey With Us",
    subtitle16: "Get a post to your Email",
    inputType: "text",
    inputPlaceholder: "Email address",
    place: "SEND",
    copyright: "©",
    subtitle17: "Tengeneza 2022",
    subtitle18: "Cookies policy",
    subtitle19: "Terms of use",
    number5: "8",
    orderNow2: "Order Now",
    ourServices: "Our services",
    getItRightOnce: "Get It Right Once!",
    image95: "/img/image-95@1x.png",
    title15: "Flyer",
    subtitle20: "Lorem Ipsum is simply dummy text of the printing.",
    number6: "3",
    addToCart5: "ADD TO CART",
    image97: "/img/image-97@2x.png",
    title16: "Canvas",
    subtitle21: "Lorem Ipsum is simply dummy text of the printing.",
    number7: "1",
    addToCart6: "ADD TO CART",
    mini_Party_Catering_Carrot_Cupcake_: "/img/mini-party-catering-carrot-cupcake-large-2@2x.png",
    image2: "/img/image-2@1x.png",
    cTAsProps: cTAs2Data,
    cTAs2Props: cTAs3Data,
    cTAs3Props: cTAs4Data,
};

