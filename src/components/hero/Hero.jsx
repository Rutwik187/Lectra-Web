import React from "react";
import Header from "../header/Header";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <Header />
        <div className="hero-tag_line">
          <div className="hero-tag_line-div"></div>
          <span className="hero-tag_line-span">
            the best fitness friend in the town{" "}
          </span>
        </div>
        <div className="hero-heading">
          <div>
            <span>Helping </span>
            <span
              className="
            stroke-text"
            >
              You
            </span>
          </div>
          <div>
            <span>Recover </span>
            <span className="stroke-text">Smarter</span>
          </div>
          <span className="hero-sub_heading">
            Lectra Tape is a wireless and Portable Electric Muscle Stimulator
            embedded into Athletic tape utilizing proprietary technology to
            conduct the shock.
          </span>
        </div>
        <div className="hero-figures">
          <div>
            <span>140+</span>
            <span>stores</span>
          </div>
          <div>
            <span>+1000</span>
            <span>Pre-orders</span>
          </div>
          <div>
            <span>50+</span>
            <span>products</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn ">Buy Now</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="hero-right">right</div>
    </div>
  );
};

export default Hero;
