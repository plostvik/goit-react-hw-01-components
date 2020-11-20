import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../default-avatar.jpg';
import Styles from '../FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  let statusClass = isOnline ? Styles.statusOnline : Styles.statusOffline;
  return (
    <li className={Styles.item}>
      <span className={statusClass}></span>
      <img
        className={Styles.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={Styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.defaultProps = {
  avatar: defaultAvatar,
  name: 'Anonymous',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};
