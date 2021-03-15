import React, { Component } from 'react';

import {
  Header,
  RandomPlanet,
  PersonList,
  PersonDetails,
  PlanetList,
  PlanetDetails,
  StarshipList,
  StarshipDetails,
  Row,
  ErrorBoundry,
  SwapiServiceProvider,
} from '..';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import './app.css';

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    // swapiService: new DummySwapiService(),
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

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div>
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />

            <Row
              leftItem={<PersonList onItemSelected={() => { }} />}
              rightItem={<PersonDetails itemId={11} />}
            />

            <Row
              leftItem={<PlanetList onItemSelected={() => { }} />}
              rightItem={<PlanetDetails itemId={5} />}
            />

            <Row
              leftItem={<StarshipList onItemSelected={() => { }} />}
              rightItem={<StarshipDetails itemId={9} />}
            />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
