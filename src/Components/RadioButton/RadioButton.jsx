import React from 'react';
import './style.css';

const RadioButton = ({ label, isSelected, onRadioBoxChange }) => (
  <div className="form-check">
    <label>
      <input
        type="radio"
        name={label}
        checked={isSelected}
        onChange={onRadioBoxChange}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);
export default RadioButton;