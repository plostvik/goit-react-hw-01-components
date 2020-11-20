import React from 'react';
import Styles from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem.js';

const Statistics = ({ title, stats }) => {
  return (
    <section className={Styles.statistics}>
      {title && <h2 className={Styles.title}>{title}</h2>}
      <ul className={Styles.statList}>
        {stats.map(el => {
          return <StatisticItem key={el.id} {...el} />;
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Statistics;
