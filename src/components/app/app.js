import React, { Component } from 'react';

import {
  Header,
  RandomPlanet,
  PersonList,
  PersonDetails,
  Row,
  ErrorBoundry,
  SwapiServiceProvider,
} from '..';
// import PeoplePage from '../people-page/people-page';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import './app.css';

export default class App extends Component {
  state = {
    // swapiService: new SwapiService(),
    swapiService: new DummySwapiService(),
    hasError: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      return {
        swapiService: new Service(),
      };
    });
  };

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
        <SwapiServiceProvider value={this.state.swapiService}>
          <div>
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />

            <Row leftItem={list} rightItem={details} />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
