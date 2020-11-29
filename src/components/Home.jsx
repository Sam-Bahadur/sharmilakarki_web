import React, { Component } from "react";
import Slideshow from "./Body/Slideshow";
import Background from "./Background/Background";
import Contactme from "./Contactme/Contactme";
// import Form from "./Contact/form/Form";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Slideshow />
        <Background />
        <Contactme />
      </div>
    );
  }
}
