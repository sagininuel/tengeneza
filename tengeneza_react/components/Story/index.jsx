import React from "react";
import Backgound from "../Backgound";
import "./Story.css";

function Story(props) {
  const { backgoundProps } = props;

  return (
    <div className="story">
      <div className="overlap-group1">
        <Backgound backgound={backgoundProps.backgound} />
        <img className="component-4" src="/img/component-4@1x.svg" />
      </div>
    </div>
  );
}

export default Story;
