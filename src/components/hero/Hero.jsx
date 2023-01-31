import React from "react";
import Header from "../header/Header";
import "./hero.css";
import hero_img from "../../assets/hero_image.png";
import hero_img_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import bars from "../../assets/calories.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";

import CountUp from "react-countup";

const Hero = () => {
  const [menuOpened, SetMenuOpened] = useState(false);
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="hero-left">
        <Header />
        <div className="hero-tag_line">
          <motion.div
            className="hero-tag_line-div"
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>

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
            <span>
              <CountUp
                end={140}
                start={100}
                duration={5}
                delay={0}
                suffix="+"
              />
            </span>
            <span>stores</span>
          </div>
          <div>
            <span>
              <CountUp
                end={1000}
                start={950}
                duration={5}
                delay={0}
                suffix="+"
              />
            </span>
            <span>Pre-orders</span>
          </div>
          <div>
            <span>
              <CountUp end={50} start={10} duration={5} delay={0} suffix="+" />
            </span>
            <span>products</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn ">
            <Link onClick={() => SetMenuOpened(false)} to="Plans" smooth={true}>
              Buy Now
            </Link>
          </button>
          <button className="btn">
            <Link
              onClick={() => SetMenuOpened(false)}
              to="Mechanisms"
              smooth={true}
            >
              Know More
            </Link>
          </button>
        </div>
      </div>

      {/* Right Part */}
      <div className="hero-right">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="fast-recovery"
        >
          <img src={heart} alt="heart" />
          <span>50%</span>
          <span>Fast Recovery</span>
        </motion.div>

        {/* hero images */}

        <img src={hero_img} alt="hero images" className="hero-img" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_img_back}
          alt="hero-img-back"
          className="hero-img-back"
        />
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="bars"
        >
          <img src={bars} alt="" />
          <div>
            <span>Advance</span>
            <span>Shock</span>
            <span>Treatment</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
