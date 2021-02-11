/* eslint-disable jsx-a11y/img-redundant-alt */
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
                alt="User photo"
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
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
