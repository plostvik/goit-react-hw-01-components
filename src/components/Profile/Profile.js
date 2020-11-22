import React from 'react';
import styles from './Profile.module.css';
import StatsItem from './StatsItem/StatsItem.js';
import defaultImg from './default.jpg';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={`${name} avatar`} className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{`@${tag}`}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.entries(stats).map(el => {
          return <StatsItem key={stats[el[0]]} el={el} />;
        })}
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImg,
  location: 'Unknown',
  name: 'Anonymous',
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Profile;
