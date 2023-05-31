import React from "react";
import PropTypes from "prop-types";

import "./Statistics.style.css";
const Statistics = ({ stats, title }) => {
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ label, percentage, id }) => {
          return (
            <li
              key={id}
              className="item-statistics"
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{label}</span> <br />
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      percentage: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
  title: PropTypes.string,
};
