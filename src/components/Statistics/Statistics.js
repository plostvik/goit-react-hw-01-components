import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem.js';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
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
