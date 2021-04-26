import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StarshipList } from '..';

const StarshipPage = ({ history }) => {
  return (
    <StarshipList
      onItemSelected={(id) => {
        history.push(id);
      }}
    />
  );
};

StarshipPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default withRouter(StarshipPage);
