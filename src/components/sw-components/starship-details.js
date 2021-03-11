/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

import {
  ItemDetails,
  Record,
  withSwapiService,
} from '..';

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />

    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
