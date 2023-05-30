import React from "react";
import "./Statistics.style.css";
const Statistics = ({ stats, title }) => {
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

  return (
    <section className="statistics">
      <h2 className="title">{title ? title : "Upload stats1"}</h2>

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
