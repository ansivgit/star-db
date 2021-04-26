import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  Header,
  RandomPlanet,
  PeoplePage,
  PlanetPage,
  StarshipPage,
  SecretPage,
  LoginPage,
  ErrorBoundry,
  SwapiServiceProvider,
  StarshipDetails,
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
    isLoggedIn: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
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

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="container">

              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Switch>
                <Route
                  path="/"
                  render={() => <h2 className="my-3">Welcome to StarDB</h2>}
                  exact
                />

                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetPage} />
                <Route path="/starships" exact component={StarshipPage} />

                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />

                <Route
                  path="/secret"
                  render={() => (
                    <SecretPage isLoggedIn={isLoggedIn} />
                  )}
                />

                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin}
                    />
                  )}
                />

                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
