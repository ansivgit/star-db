/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './header.css';

const Header = () => {
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
    </div>
  );
};

export default Header;
