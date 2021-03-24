import React from "react";
import * as s from "../FriendList.module.css";

const FriendListItem = ({ friend }) => {
  const isOnline = friend.isOnline ? `${s.status}  ${s.isActive}` : s.status;
  return (
    <li className={s.item}>
      <span className={isOnline}></span>
      <img
        className={s.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{friend.name}</p>
    </li>
  );
};

export default FriendListItem;
