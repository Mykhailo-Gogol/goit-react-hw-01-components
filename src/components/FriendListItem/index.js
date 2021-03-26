import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 100,
    padding: [5, 10],
    '&:hover': {
      backgroundColor: '#606060',
    },
    '&:hover > .name': {
      color: '#fff'
    },
    '&:not(:last-child)': {
      borderBottom: '1px solid #606060',
    }
  },
  status: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: (isOnline) => (isOnline ? 'lightgreen' : 'lightcoral' ) 
  },
  avatar: {
    marginRight: 10,
    marginLeft: 10
  },
  name: {
    color: '#212121',
    width: 50
  }
})

const FriendListItem = ({ friend }) => {
  const {isOnline, avatar, name} = friend
  const s = useStyles(isOnline)

  return (
    <li className={s.item}>
      <span className={s.status}></span>
      <img
        className={s.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
