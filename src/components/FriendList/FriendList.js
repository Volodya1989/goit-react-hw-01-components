import FriendListItem from "../FriendListItem";
import PropTypes from "prop-types";

import "./FriendList.style.css";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className="friend-list">
        {friends.map((friend) => {
          return (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
