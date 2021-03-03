/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/sort-comp */
import React from 'react';

import {
  Header,
  RandomPlanet,
  ListItem,
  PersonDetails,
} from '../index';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="info-container container">
        <div className="list-item-container col-md-4">
          <ListItem />
        </div>
        <div className="person-details-container col-md-7">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
