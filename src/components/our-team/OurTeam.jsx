import React from "react";
import { useState } from "react";
import "./our-team.css";
import { teamData } from "../../data/teamData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const OurTeam = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = teamData.length;
  return (
    <div className="our-team" id="OurTeam">
      <div className="left-team">
        <div className="our-team-header">
          <span>Our </span>
          <span className="stroke-text">Leadership </span>
          <span>Team</span>
        </div>

        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {teamData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {teamData[selected].name}
          </span>{" "}
          <span>{teamData[selected].status}</span>
        </span>
      </div>
      <div className="right-team">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={teamData[selected].image}
          alt="person"
        />
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
