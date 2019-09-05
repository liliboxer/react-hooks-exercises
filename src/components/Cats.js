import React from 'react';
import PropTypes from 'prop-types';
import Cat from './Cat';

function Cats({ cats }) {
  const catList = cats.map(cat => (
    <li key={cat.name}>
      <Cat cat={cat}/>
    </li>
  ));

  return <ul>{catList}</ul>;
}

Cats.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired
};

export default Cats;
