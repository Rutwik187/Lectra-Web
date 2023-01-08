import React from "react";
import { useState } from "react";
import "./our-team.css";
import { teamData } from "../../data/teamData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const OurTeam = () => {
  const [selected, setSelected] = useState(0);
  const tLength = teamData.length;
  return (
    <div className="our-team">
      <div className="left-team">
        <div className="our-team-header">
          <span>Our </span>
          <span className="stroke-text">Leadership </span>
          <span>Team</span>
        </div>

        <span>{teamData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {teamData[selected].name}
          </span>{" "}
          <span>{teamData[selected].status}</span>
        </span>
      </div>
      <div className="right-team">
        <div></div>
        <div></div>
        <img src={teamData[selected].image} alt="person" />
        <div className="arrows">
          <img
            onClick={() =>
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            }
            src={leftArrow}
            alt="left arrow"
          />
          <img
            onClick={() =>
              selected === tLength - 1
                ? setSelected(1)
                : setSelected((prev) => prev + 1)
            }
            src={rightArrow}
            alt="right arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
