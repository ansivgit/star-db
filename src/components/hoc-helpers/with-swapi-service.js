/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { SwapiServiceConsumer } from '../swapi-servis-context/swapi-servis-context';

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodsToProps(swapiService);

            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
