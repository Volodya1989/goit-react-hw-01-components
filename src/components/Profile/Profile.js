import React from "react";
import PropTypes from "prop-types";
import Stats from "../Stats/index.js";

import "./Profile.style.css";
export default function Profile({ username, tag, location, avatar, stats }) {
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
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <Stats stats={stats} />
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }),
};
