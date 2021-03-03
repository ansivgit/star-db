/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ProgressBar from '../progress-bar/progress-bar';

import './random-planet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  }

  updatePlanet() {
    const id = Math.round(Math.random() * 20) + 1;

    this.swapiService
      .getItem('planets', id)
      .then(this.onPlanetLoaded);
  }

  render() {
    const { planet, loading } = this.state;

    const progress = loading ? <ProgressBar /> : null;
    const content = !loading ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet card container rounded">
        {progress}
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
