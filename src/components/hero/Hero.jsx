import React from "react";
import Header from "../header/Header";
import "./hero.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-left">
        <Header />
      </div>
      <div className="Hero-right">Right</div>
    </div>
  );
};

export default Hero;
