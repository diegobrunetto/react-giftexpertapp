import React, { useState } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

import "./index.css";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Kobe"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
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
