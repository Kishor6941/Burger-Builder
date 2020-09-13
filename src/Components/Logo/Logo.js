import React from "react";
import "./Logo.css";
import burgerLogo from "../../assets/images/burger-logo.png";
const Logo = (props) => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default Logo;
