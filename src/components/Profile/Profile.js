import React from 'react';
import './Profile.css';
import StatsItem from './StatsItem/StatsItem.js';

const Profile = ({ user }) => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        {Object.entries(stats).map(el => {
          return <StatsItem key={stats[el[0]]} el={el} />;
        })}
      </ul>
    </div>
  );
};

export default Profile;
