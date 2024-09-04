import React from 'react';
import './style.css';

export const Button = ({ title, onClick, disabled }) => (
  <button
    className='button'
    onClick={onClick}
    disabled={disabled}
  >
    {title}
  </button>
);
