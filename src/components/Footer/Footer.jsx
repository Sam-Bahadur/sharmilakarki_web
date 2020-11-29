import React, { Component } from "react";
import "./footer.css";
import { FaRegCopyright } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          {/* <div className="empty_div"></div> */}
          <div className="copyright">
            <FaRegCopyright />
            &nbsp;sharmilakarki.com
          </div>
          <div className="media_name">
            designed & developed by
            <span>MAYAN MEDIA</span>
          </div>
        </div>
      </>
    );
  }
}
