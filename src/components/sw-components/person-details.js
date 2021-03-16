/* eslint-disable react/prop-types */
import React from 'react';

import {
  ItemDetails,
  Record,
  withSwapiService,
} from '..';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
      <Record field="hairColor" label="Hair Color" />

    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage,
  };
};

export default withSwapiService(mapMethodsToProps, PersonDetails);
