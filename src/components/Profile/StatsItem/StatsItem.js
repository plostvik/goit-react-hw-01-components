import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Profile.module.css';

const StatsItem = ({ el: [key, value] }) => {
  return (
    <li className={Styles.statsItem}>
      <span className={Styles.label}>{key} </span>
      <span className={Styles.quantity}>{value}</span>
    </li>
  );
};

StatsItem.propTypes = {
  el: PropTypes.array,
};

export default StatsItem;
