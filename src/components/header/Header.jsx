import React from "react";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, SetMenuOpened] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="company logo" />
      </div>
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => SetMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <div className="header-menu">
          <ul>
            <li>
              <Link
                onClick={() => SetMenuOpened(false)}
                to="Home"
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => SetMenuOpened(false)}
                to="Mechanisms"
                smooth={true}
              >
                Mechanisms
              </Link>
            </li>
            <li>
              <Link
                onClick={() => SetMenuOpened(false)}
                to="WhyUs"
                smooth={true}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => SetMenuOpened(false)}
                to="Plans"
                smooth={true}
              >
                Plans
              </Link>
            </li>
            <li>
              {" "}
              <Link
                onClick={() => SetMenuOpened(false)}
                to="OurTeam"
                smooth={true}
              >
                Our Team
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
