/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import ProgressBar from '../progress-bar/progress-bar';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
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
      this.props.getData()
        .then((data) => {
          this.setState({
            data,
          });
        });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <ProgressBar />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
