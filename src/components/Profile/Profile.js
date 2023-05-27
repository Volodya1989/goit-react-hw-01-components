import React from "react";
import "./Profile.style.css";

export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props;

  return (
    // <div className={css.profile}>
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
      <ul className="stats">
        <li className="item">
          <span className="label">Followers</span>
          <br />
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="item">
          <span className="label">Views</span>
          <br />
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="item">
          <span className="label">Likes</span> <br />
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
