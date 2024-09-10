import React from 'react';
import P from 'prop-types';
import './style.css';

export const TextInput = ({ handleChange, searchValue }) => (
  <input
    className="text-input"
    type="search"
    placeholder="Pesquisa por palavra"
    onChange={handleChange}
    value={searchValue}
  />
);

TextInput.propTypes = {
  handleChange: P.func.isRequired,
  searchValue: P.string.isRequired,
};
