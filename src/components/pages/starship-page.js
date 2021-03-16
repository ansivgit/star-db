import React, { Component } from 'react';

import {
  Row,
  StarshipList,
  StarshipDetails,
} from '..';

export default class StarshipPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        leftItem={<StarshipList onItemSelected={this.onItemSelected} />}
        rightItem={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}
