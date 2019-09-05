import React from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '../Auth0Provider';

function Cat({ cat }) {
  const { isAuthenticated, loading, user } = useAuth0();
  return (
    <>
      <p>owner - {isAuthenticated && !loading ? user.nickname : 'not logged in'}</p>
      <p>{cat.name}</p>
    </>
  );
}

Cat.propTypes = {
  cat: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

export default Cat;
