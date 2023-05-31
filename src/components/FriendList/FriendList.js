import React from "react";
import FriendListItem from "../FriendListItem";
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

/* {friends.map(({ avatar, name, id, isOnline }) => {
          return (
            <li className="item friend-item" key={id}>
              <span
                className={`status ${isOnline ? "online" : "offline"}`}
              ></span>
              <img
                className="avatar friend-avatar"
                src={`${avatar}`}
                alt="User avatar"
                width="48"
              />
              <p className="name">{name}</p>
            </li>
          );
        })} */
