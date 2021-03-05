import React, { Component } from 'react';

import {
  ListItem,
  PersonDetails,
} from '..';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';

import './people-page.css';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
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

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="info-container container">
        <div className="list-item-container col-md-4">
          <ListItem
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
          />
        </div>
        <div className="person-details-container col-md-7">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
