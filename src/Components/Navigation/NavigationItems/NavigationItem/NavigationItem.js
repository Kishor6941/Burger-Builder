import React from "react";
import "./NavigationItem.css";

const NavigationItem = (props) => (
  <li className="NavItem">
    <a href={props.link} className="active">
      {props.children}
    </a>
  </li>
);

export default NavigationItem;
