/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import ProgressBar from '../progress-bar/progress-bar';

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
    }

    componentDidMount() {
      getData()
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
