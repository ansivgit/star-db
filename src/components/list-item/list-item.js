/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import './list-item.css';

export default class ListItem extends Component {
  render() {
    return (
      <ul className="list-item list-group">
        <li className="list-group-item list-group-item-action">
          Luke Skywalker
        </li>
        <li className="list-group-item list-group-item-action">
          Darth Vader
        </li>
        <li className="list-group-item list-group-item-action">
          R2-D2
        </li>
      </ul>
    );
  }
}
