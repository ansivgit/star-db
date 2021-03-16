/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ProgressBar from '../progress-bar/progress-bar';
import ErrorIndicator from '../error-indicator/error-indicator';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    }

    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    update() {
      this.setState({
        loading: true,
        error: false,
      });

      this.props.getData()
        .then((data) => {
          this.setState({
            data,
            loading: false,
          });
        })
        .catch(() => {
          this.setState({
            loading: false,
            error: true,
          });
        });
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <ProgressBar />;
      }

      if (error) {
        return <ErrorIndicator />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
