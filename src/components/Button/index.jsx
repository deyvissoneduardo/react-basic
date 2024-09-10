import React from 'react';
import P from 'prop-types';
import './style.css';

export const Button = ({ title, onClick, disabled = false }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {title}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  title: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
