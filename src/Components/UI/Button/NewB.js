import classNames from "classnames";
import React from "react";
import "./NewB.css";
const button = (props) => (
  <button
    className={[classNames.Button, classNames[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);
export default button;
