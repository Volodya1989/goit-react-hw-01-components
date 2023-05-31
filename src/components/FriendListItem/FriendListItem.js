import React from "react";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={`status ${isOnline ? "online" : "offline"}`}></span>
      <img
        className="avatar friend-avatar"
        src={`${avatar}`}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </>
  );
};

export default FriendListItem;
