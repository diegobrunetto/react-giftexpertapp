import React, { useState } from "react";
import PropTypes from "prop-types";
import "nes.css/css/nes.min.css";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState(""); // ''

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="nes-input"
      />
      <button className="nes-btn" onSubmit={handleSubmit}>
        Ver Gifs
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
