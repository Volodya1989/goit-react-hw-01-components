import React from "react";
import PropTypes from "prop-types";

export default function Stats({ stats }) {
  const { followers, views, likes } = stats;

  return (
    <>
      <ul className="stats">
        <li className="item">
          <span className="label">Followers</span>
          <br />
          <span className="quantity">{followers}</span>
        </li>
        <li className="item">
          <span className="label">Views</span>
          <br />
          <span className="quantity">{views}</span>
        </li>
        <li className="item">
          <span className="label">Likes</span> <br />
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </>
  );
}

Stats.propTypes = {
  stats: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }),
};
