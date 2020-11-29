import React from "react";
import "./videos.css";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import { Component } from "react";
import Video from "./Video";
import ytdata from "./youtube.json";

export default class Videos extends Component {
  render() {
    return (
      <div>
        <div className="video_container">
          <div className="videos">
            {/* <img src={ytdata[0].image} alt="" /> */}
            {ytdata.map((data) => {
              return (
                <Video
                  key={data.id}
                  yid={data.yid}
                  desc={data.desc}
                  yimg={data.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
