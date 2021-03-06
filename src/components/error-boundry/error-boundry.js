/* eslint-disable react/prop-types */
import React, { Component } from 'react';

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
