import PropTypes, { arrayOf } from "prop-types";
import * as s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.defaultProps = {
  friends: [
    {
      avatar: "https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",
    },
  ],
};

FriendList.propTypes = {
  friends: arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
