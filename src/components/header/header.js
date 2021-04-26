/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          Star DB
        </Link>
      </h3>
      <ul className="d-flex nav nav-pills">
        <li className="nav-item">
          <Link to="/people/" className="nav-link">People</Link>
        </li>
        <li className="nav-item">
          <Link to="/planets/" className="nav-link">Planets</Link>
        </li>
        <li className="nav-item">
          <Link to="/starships/" className="nav-link">Starships</Link>
        </li>
        <li className="nav-item">
          <Link to="/secret" className="nav-link">Secret</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
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

Header.defaultProps = {
  onServiceChange: () => {},
};

Header.propTypes = {
  onServiceChange: PropTypes.func,
};

export default Header;
