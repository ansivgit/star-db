import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Row,
  PersonList,
  PersonDetails,
} from '..';

const PeoplePage = ({ history, match }) => {
  return (
    <Row
      leftItem={(<PersonList onItemSelected={(id) => history.push(id)} />)}
      rightItem={<PersonDetails itemId={match.params.id} />}
    />
  );
};

PeoplePage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  match: PropTypes.shape({ params: PropTypes.shape.isRequired }).isRequired,
};

export default withRouter(PeoplePage);
