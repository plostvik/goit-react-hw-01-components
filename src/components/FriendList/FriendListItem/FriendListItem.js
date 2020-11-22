import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../default-avatar.jpg';
import styles from '../FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  let statusClass = isOnline ? styles.statusOnline : styles.statusOffline;
  return (
    <li className={styles.item}>
      <span className={statusClass}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={styles.name}>{name}</p>
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
