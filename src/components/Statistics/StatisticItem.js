import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Statistics.module.css';

const randomColor = () => {
  let random1 = Math.round(Math.random() * 255);
  let random2 = Math.round(Math.random() * 255);
  let random3 = Math.round(Math.random() * 255);
  return `rgb(${random1}, ${random2}, ${random3})`;
};

const StatisticItem = ({ label, percentage }) => {
  console.log(randomColor());
  return (
    <li
      className={Styles.item}
      style={{
        backgroundColor: randomColor(),
      }}
    >
      <span className={Styles.label}>{label}</span>
      <span className={Styles.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticItem;
