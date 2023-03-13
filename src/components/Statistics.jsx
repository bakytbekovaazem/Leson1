import React from "react";

const Statistics = ({ data }) => {
  <h2 class="title">Upload stats</h2>;
  return (
    <ul className="stat-list">
      {data.map((item) => (
        <li className="item">
          <p className="text">{item.label}</p>
          <p>{item.percentage}%</p>
        </li>
      ))}
    </ul>
  );
};

export default Statistics;
