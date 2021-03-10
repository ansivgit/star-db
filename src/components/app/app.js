import React, { Component } from 'react';

import {
  Header,
  // RandomPlanet,
  PersonList,
  PersonDetails,
  Row,
  ErrorBoundry,
} from '..';
// import PeoplePage from '../people-page/people-page';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const list = <PersonList onItemSelected={() => { }} />;

    const details = (
      <PersonDetails itemId={5} />
    );

    return (
      <ErrorBoundry>
        <div>
          <Header />
          {/* <RandomPlanet /> */}

          <Row leftItem={list} rightItem={details} />

        </div>
      </ErrorBoundry>
    );
  }
}
