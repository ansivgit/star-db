import React from 'react';
import PropTypes from 'prop-types';

import './row.css';

const Row = ({ leftItem, rightItem }) => {
  return (
    <div className="info-container container">
      <div className="left-item-container col-md-4">
        {leftItem}
      </div>
      <div className="right-item-container col-md-7">
        {rightItem}
      </div>
    </div>
  );
};

Row.propTypes = {
  leftItem: PropTypes.node.isRequired,
  rightItem: PropTypes.node.isRequired,
};

export default Row;
