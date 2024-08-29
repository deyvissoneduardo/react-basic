import React from "react";
import "./style.css";

export const TextInput = ({ handleChange, searchValue }) => (
  <input
    className="text-input"
    type="search"
    placeholder="Pesquisa por palavra"
    onChange={handleChange}
    value={searchValue}
  />
);
