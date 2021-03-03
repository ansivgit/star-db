/* eslint-disable react/sort-comp */
import React, { Component } from 'react';

import {
  Header,
  RandomPlanet,
  ListItem,
  PersonDetails,
} from '..';

import './app.css';

export default class App extends Component {
  state = {
    selectedPerson: null,
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="info-container container">
          <div className="list-item-container col-md-4">
            <ListItem onItemSelected={this.onPersonSelected} />
          </div>
          <div className="person-details-container col-md-7">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
