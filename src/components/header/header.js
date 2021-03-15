/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header container d-flex">
      <h3>
        <a href="#">
          Star DB
        </a>
      </h3>
      <ul className="d-flex nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="#">People</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Planets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Starships</a>
        </li>
      </ul>
      <button
        type="button"
        className="btn-change-service btn btn-info"
        onClick={onServiceChange}
      >
        Change service
      </button>
    </div>
  );
};

export default Header;
