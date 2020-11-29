import React, { Component } from "react";
import "./news.css";
import ndata from "./news.json";
import NewsSingle from "./NewsSingle";

export default class News extends Component {
  render() {
    return (
      <div className="news_container">
        {ndata.map((data) => {
          return (
            <NewsSingle
              key={data.id}
              {...data}
              // date={data.date}
              // year={data.year}
              // title={data.title}
              // desc={data.sdesc}
              // link={data.link}
            />
          );
        })}
      </div>
    );
  }
}
