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

      <div>
        <div className="list-item-container container">
          <ListItem />
        </div>
        <div className="person-details-container container">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
