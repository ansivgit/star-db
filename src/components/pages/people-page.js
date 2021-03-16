import React, { Component } from 'react';

import {
  Row,
  PersonList,
  PersonDetails,
} from '..';

export default class PeoplePage extends Component {
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
        leftItem={<PersonList onItemSelected={this.onItemSelected} />}
        rightItem={<PersonDetails itemId={selectedItem} />}
      />
    );
  }
}
