import React, { Component } from 'react';

import {
  Row,
  PlanetList,
  PlanetDetails,
} from '..';

export default class PlanetPage extends Component {
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
        leftItem={<PlanetList onItemSelected={this.onItemSelected} />}
        rightItem={<PlanetDetails itemId={selectedItem} />}
      />
    );
  }
}
