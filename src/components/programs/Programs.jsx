import React from "react";
import "./programs.css";
import RightArrow from "../../assets/rightArrow.png";

import { programsData } from "../../data/programsData";
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="program-header">
        <span className="stroke-text">Explore Our</span>
        <span>Three mechanism of actions</span>
        <span className="stroke-text">To heal you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="right arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
