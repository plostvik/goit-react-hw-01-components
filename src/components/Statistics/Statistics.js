import React from 'react';
import './Statistics.css';
import PropTypes from 'prop-types';

// Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : ''}
      <ul className="stat-list">
        {stats.map(el => {
          return (
            <li className="item" key={el.id}>
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default Statistics;
