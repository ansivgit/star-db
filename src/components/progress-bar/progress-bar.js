/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './progress-bar.css';

const ProgressBar = () => {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        // aria-valuenow="15"
        // aria-valuemin="0"
        // aria-valuemax="100"
      />
    </div>
  );
};

export default ProgressBar;
