import React from "react";
import "./articleThumbnail.css";

const testLink = "http://www.google.com"

const ArticleThumbnail = props => (
  <div className="articleThumbnail">
    <a href={testLink}>
      <h3>{props.headline}</h3>
      <p className="byLine">{props.byLine}</p>
      <p>{props.summary}</p>
    </a>
  </div>
);

export default ArticleThumbnail;
