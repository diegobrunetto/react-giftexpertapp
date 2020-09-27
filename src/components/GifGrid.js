import React from "react";
import PropTypes from "prop-types";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "../components/GifGridItem.js";

import "../index.css";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div className="nes-container with-title is-centered">
      <h3 className="title">{category}</h3>

      {loading && (
        <p className="animate__animated animate__flash nes-text">Loading...</p>
      )}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
