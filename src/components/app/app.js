import React, { Component } from 'react';

import {
  Header,
  // RandomPlanet,
  PersonList,
  PersonDetails,
  Row,
  ErrorBoundry,
  SwapiServiceProvider,
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
        <SwapiServiceProvider value={this.swapiService}>
          <div>
            <Header />
            {/* <RandomPlanet /> */}

            <Row leftItem={list} rightItem={details} />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
