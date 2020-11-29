import React, { Component } from "react";

export default class NewsSingle extends Component {
  render() {
    const { date, year, title, sdesc, link } = this.props;
    return (
      <>
        <div className="news_flex">
          <div className="news_date">
            <h3>{date}</h3>
            <h5>{year}</h5>
          </div>
          <div className="news_content">
            <div className="news_title">
              <a href={link} target="_blank">
                <h3>{title}</h3>
              </a>
              <h5>{sdesc}</h5>
            </div>
          </div>
        </div>
        <div className="news_dividor"></div>
      </>
    );
  }
}
