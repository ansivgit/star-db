/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ProgressBar from '../progress-bar/progress-bar';
import ErrorIndicator from '../error-indicator/error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  }

  updatePlanet = () => {
    const id = Math.round(Math.random() * 17) + 2;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;

    const hasData = (!loading && !error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const progress = loading ? <ProgressBar /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet card container rounded">
        {progress}
        {errorMessage}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const IMAGESURL = 'https://starwars-visualguide.com/assets/img/planets/';

  const {
    id,
    name,
    population,
    rotationPeriod,
    diameter,
  } = planet;

  return (
    // eslint-disable-next-line react/jsx-fragments
    <React.Fragment>
      <img
        className="planet-image"
        alt={`planet ${name}`}
        src={`${IMAGESURL}${id}.jpg`}
      />
      <div>
        <h4 className="text-white">{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod} hrs</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter} km</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
