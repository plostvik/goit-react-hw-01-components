import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Profile.module.css';

const StatsItem = ({ el: [key, value] }) => {
  return (
    <li className={styles.statsItem}>
      <span className={styles.label}>{key} </span>
      <span className={styles.quantity}>{value}</span>
    </li>
  );
};

StatsItem.propTypes = {
  el: PropTypes.array,
};

export default StatsItem;
