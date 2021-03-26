import {createUseStyles} from 'react-jss'
import PropTypes, { arrayOf } from "prop-types";
import FriendListItem from "../FriendListItem";

const useStyles = createUseStyles({
  friendList: {
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: 200,
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: '#ffffff',
  marginBottom: 150,
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
  }
})

const FriendList = ({ friends }) => {
  const s = useStyles()
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
