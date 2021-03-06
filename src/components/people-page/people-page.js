import React, { Component } from 'react';

import {
  Row,
  ListItem,
  ItemDetails,
} from '..';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';

import './people-page.css';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  }

  render() {
    const listItem = (
      <ListItem
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >

        {(item) => `${item.name} (${item.birthYear})`}

      </ListItem>
    );

    const itemDetails = <ItemDetails itemId={this.state.selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row leftItem={listItem} rightItem={itemDetails} />;
      </ErrorBoundry>
    );
  }
}
