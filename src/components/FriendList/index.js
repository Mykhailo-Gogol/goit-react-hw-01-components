import React, { Component } from "react";
import PropTypes from "prop-types";

import * as s from "./FriendList.module.css";

class FriendList extends Component {
  render() {
    const friendsData = this.props.friends;

    return (
      <ul className={s.friendList}>
        {friendsData.map((friend) => {
          const isOnline = friend.isOnline
            ? `${s.status}  ${s.isActive}`
            : s.status;

          return (
            <li key={friend.id} className={s.item}>
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
        })}
      </ul>
    );
  }
}

FriendList.defaultProps = {
  friends: [
    {
      avatar: "https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",
      name: "Name",
      isOnline: false,
      id: 121212,
    },
  ],
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
