import "./Header.css";
import Burger from "./Burger";
import Navlist from "./Navlist";
import React, { Component } from "react";

export default class Navigation extends Component {
  state = {
    navigationClick: window.innerWidth < 769 ? false : true,
    burgerClicked: false,
  };

  handleNavigation = () => {
    this.setState((prevState) => {
      return { navigationClick: !prevState.navigationClick };
    });
  };
  render() {
    let navlist = this.state.navigationClick ? <Navlist /> : null;
    return (
      <>
        <div className="navbar">
          <Burger burgerHandler={this.handleNavigation} />
          {navlist}
        </div>
      </>
    );
  }
}
