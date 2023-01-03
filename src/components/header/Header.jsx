import React from "react";
import Logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="company logo" />
      </div>
      <div className="header-menu">
        <ul>
          <li>Home</li>
          <li>Mechanisms</li>
          <li>Why Us</li>
          <li>Plans</li>
          <li>Our Team</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
