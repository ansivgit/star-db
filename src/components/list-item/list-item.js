/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ProgressBar from '../progress-bar/progress-bar';

import './list-item.css';

export default class ListItem extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  }

  componentDidMount() {
    this.swapiService
      .getAllData('people')
      .then((peopleList) => {
        this.setState({
          peopleList,
        });
      });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          className="list-group-item list-group-item-action"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
          onKeyPress={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <ProgressBar />;
    }

    const items = this.renderItems(peopleList);

    return (
      <ul className="list-item list-group">
        {items}
      </ul>
    );
  }
}
