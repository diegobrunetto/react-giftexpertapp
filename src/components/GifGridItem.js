import React from "react";
import PropTypes from "prop-types";

import "../index.css";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn nes-container is-rounded ">
      <img src={url} alt={title} className="image" />
      <p className="title">{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
