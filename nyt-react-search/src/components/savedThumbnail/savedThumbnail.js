import React from "react";
import "./savedThumbnail.css";

const SavedThumbnail = props => (
  <div className="articleThumbnail">
    <a href={props.link} target="_blank">
      <h3>{props.headline}</h3>
      <p className="byLine">{props.byLine}</p>
      <p>{props.summary}</p>
    </a>
  </div>
);

export default SavedThumbnail;
