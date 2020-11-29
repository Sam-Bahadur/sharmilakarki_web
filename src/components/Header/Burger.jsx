import React from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Burger(props) {
  return (
    <div className="burger" onClick={props.burgerHandler}>
      <h2>
        <GiHamburgerMenu />
      </h2>
    </div>
  );
}
