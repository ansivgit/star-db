import React from 'react';

import {
  ItemList,
  withData,
  withSwapiService,
} from '..';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    );
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, model }) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = withSwapiService(
  mapPersonMethodsToProps,
  withData(
    withChildFunction(ItemList, renderName),
  ),
);

const PlanetList = withSwapiService(
  mapPlanetMethodsToProps,
  withData(
    withChildFunction(ItemList, renderName),
  ),
);

const StarshipList = withSwapiService(
  mapStarshipMethodsToProps,
  withData(
    withChildFunction(ItemList, renderNameAndModel),
  ),
);

export {
  PersonList,
  PlanetList,
  StarshipList,
};
