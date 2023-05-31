import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item friend-item">
      <span className={`status ${isOnline ? "online" : "offline"}`}></span>
      <img
        className="avatar friend-avatar"
        src={`${avatar}`}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
