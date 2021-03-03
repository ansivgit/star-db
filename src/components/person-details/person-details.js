/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './person-details.css';

export default class PersonDetails extends Component {
  PERSONIMGESURL = 'https://starwars-visualguide.com/assets/img/characters/';

  swapiService = new SwapiService();

  state = {
    person: null,
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;

    if (!personId) {
      return;
    }

    this.swapiService
      .getItem('people', personId)
      .then((person) => {
        this.setState({
          person,
        });
      });
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from a List</span>;
    }

    const {
      person: {
        id,
        name,
        gender,
        birthYear,
        height,
        hairColor,
        eyeColor,
      },
    } = this.state;

    return (
      <div className="person-details card mb-3">
        <img
          className="person-image"
          src={`${this.PERSONIMGESURL}${id}.jpg`}
          alt={name}
        />

        <div className="card-body">
          <h4 className="text-white">
            {name}
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>
                {gender}
              </span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>
                {birthYear}
              </span>
            </li>
            <li className="list-group-item">
              <span className="term">Height</span>
              <span>
                {height}
              </span>
            </li>
            <li className="list-group-item">
              <span className="term">Hair Color</span>
              <span>
                {hairColor}
              </span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>
                {eyeColor}
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
