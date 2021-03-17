import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../error-indicator/error-indicator';

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  }

  componentDidCatch(error, info) {
    <div>
      {error}
      {info}
    </div>;

    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.node.isRequired,
};
