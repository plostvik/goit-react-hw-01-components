import React from 'react';
import propTypes from 'prop-types';

const StatsItem = ({ el: [key, value] }) => {
  return (
    <li>
      <span className="label">{key} </span>
      <span className="quantity">{value}</span>
    </li>
  );
};

StatsItem.propTypes = {
  key: propTypes.string,
  value: propTypes.number,
};

export default StatsItem;
