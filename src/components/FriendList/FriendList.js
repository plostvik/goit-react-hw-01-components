import React from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem.js';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(el => {
        return (
          <FriendListItem
            key={el.id}
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default FriendList;
