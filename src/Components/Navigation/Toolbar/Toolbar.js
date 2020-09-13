import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
const Toolbar = (props) => (
  <header className="Toolbar">
    <div>MENU</div>
    <div className="ToolLogo">
      <Logo />
    </div>
    <NavigationItems />
  </header>
);

export default Toolbar;
