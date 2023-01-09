import React from "react";
import Header from "../header/Header";
import "./hero.css";
import hero_img from "../../assets/hero_image.png";
import hero_img_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import bars from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
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

      {/* Right Part */}
      <div className="hero-right">
        <button className="btn">Join Now</button>
        <div className="fast-recovery">
          <img src={heart} alt="heart" />
          <span>50%</span>
          <span>Fast Recovery</span>
        </div>

        {/* hero images */}

        <img src={hero_img} alt="hero images" className="hero-img" />
        <img
          src={hero_img_back}
          alt="hero-img-back"
          className="hero-img-back"
        />
        <div className="bars">
          <img src={bars} alt="" />
          <div>
            <span>Advance</span>
            <span>Shock</span>
            <span>Treatment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
