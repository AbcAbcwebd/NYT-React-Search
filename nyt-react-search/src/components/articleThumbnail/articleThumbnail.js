import React from "react";
import "./articleThumbnail.css";

const ArticleThumbnail = props => (
  <div className="articleThumbnail">
    <a href={props.link} target="_blank">
      <h3>{props.headline}</h3>
      <p className="byLine">{props.byLine}</p>
      <p>{props.summary}</p>
      <button>Save</button>
    </a>
  </div>
);

export default ArticleThumbnail;
