import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="boom text-warning">BOOM!</span>
      <span className="text-warning text-center">
        something has gone terribly wrong (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
