import React from 'react';
import Styles from './Profile.module.css';
import StatsItem from './StatsItem/StatsItem.js';
import defaultImg from './default.jpg';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => {
  console.log(Styles);
  return (
    <div className={Styles.profile}>
      <div className={Styles.description}>
        <img src={avatar} alt={`${name} avatar`} className={Styles.avatar} />
        <p className={Styles.name}>{name}</p>
        <p className={Styles.tag}>{`@${tag}`}</p>
        <p className={Styles.location}>{location}</p>
      </div>

      <ul className={Styles.stats}>
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
