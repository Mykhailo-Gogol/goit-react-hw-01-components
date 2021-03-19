import * as s from "./FriendListFunc.module.css";
import PropTypes from "prop-types";

const FriendListFunc = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => {
        const isOnline = friend.isOnline
          ? `${s.status}  ${s.isActive}`
          : s.status;

        return (
          <li key={friend.id} className={s.item}>
            <span className={isOnline}></span>
            <img
              className={s.avatar}
              src={friend.avatar}
              alt="User illustration"
              width="48"
            />
            <p className={s.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendListFunc.defaultProps = {
  friends: [],
};

FriendListFunc.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendListFunc;
