import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      <button
        className="btn btn-info"
        onClick={onLogin}
        type="submit"
      >
        Login
      </button>
    </div>
  );
};

LoginPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
