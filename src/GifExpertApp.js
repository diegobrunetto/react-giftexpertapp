import React, { useState } from "react";

import "nes.css/css/nes.min.css";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

import "./index.css";

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2 className="nes-text">Busca tus Gifs favoritos</h2>
      <AddCategory setCategories={setCategories} />
      <ul>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
