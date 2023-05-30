import React from "react";
import "./FriendList.style.css";

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <div>
      <ul className="friend-list">
        {friends.map(({ avatar, name, id, isOnline }) => {
          return (
            <li className="item friend-item" key={id}>
              <span
                className={`status ${isOnline ? "online" : "offline"}`}
              ></span>
              <img
                className="avatar"
                src={`${avatar}`}
                alt="User avatar"
                width="48"
              />
              <p className="name">{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
//   <section className="statistics">
//     <h2 className="title">{d ? d : "Upload stats1"}</h2>

//     <ul className="stat-list">
//       {stats.map(({ label, percentage, id }) => {
//         return (
//           <li
//             key={id}
//             className="item-statistics"
//             style={{ backgroundColor: getRandomHexColor() }}
//           >
//             <span className="label">{label}</span> <br />
//             <span className="percentage">{percentage}%</span>
//           </li>
//         );
//       })}
//     </ul>
//   </section>;

export default FriendList;
