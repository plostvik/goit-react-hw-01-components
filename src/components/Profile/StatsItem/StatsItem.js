import React from 'react';

const StatsItem = ({ el: [key, value] }) => {
  return (
    <li>
      <span className="label">{key} </span>
      <span className="quantity">{value}</span>
    </li>
  );
};

export default StatsItem;
