import React from "react";
import "./reasons.css";
import tick from "../../assets/tick.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import video from "../../assets/video.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="WhyUs">
      <div className="Reasons-left">
        <img src={video} alt="video" />
      </div>
      <div className="Reasons-right">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>Choose Us?</span>
        </div>
        <div className="Reasons-details-right">
          <div>
            <img src={tick} alt="tick"></img>
            <span>Reason 1</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>Reason 2</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>Reason 3</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>Reason 4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
