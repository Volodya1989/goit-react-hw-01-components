import React from "react";
import "./Profile.style.css";
import Stats from "../Stats/index.js";
export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props;

  return (
    <div className="profile">
      <div className="description">
        <img
          src={`${avatar}`}
          alt="User avatar"
          className="avatar"
          width="100px"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <Stats stats={stats} />
    </div>
  );
}
