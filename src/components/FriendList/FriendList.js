import React from "react";
import FriendListItem from "../FriendListItem";
import PropTypes from "prop-types";

import "./FriendList.style.css";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className="friend-list">
        {friends.map((friend) => {
          return (
            <li className="item friend-item" key={friend.id}>
              <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};
