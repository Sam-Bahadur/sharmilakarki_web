import React, { Component, useState } from "react";
import "./Header.css";
import logo from "../../img/logo.png";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
// import Burger from "./Burger";

export default class Header extends Component {
  render() {
    const contact =
      window.innerWidth < 769 ? null : (
        <div className="contact_container">
          <NavLink className="navbar_contact" to="/contact">
            Contact
          </NavLink>
        </div>
      );
    return (
      <>
        <div className="nav_banner">
          <div className="navlogo" id="top">
            <div className="navlogo_logo">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="navlogo_text">
              <a href="/">
                <span>Sharmila Karki</span>
              </a>
            </div>
          </div>
          <Navigation />
          {contact}
        </div>
      </>
    );
  }
}
