import {createUseStyles} from 'react-jss'
import PropTypes, { shape } from "prop-types";

const useStyles = createUseStyles({
  profile: {
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 260,
    backgroundColor: '#ffffff',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    borderRadius: 10
  },
  profile__image: {
    display: 'block',
    width: 80,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 5,
    border: '1px solid #282c34c2',
    borderRadius: '50%',
    overflow: 'hidden'
  },
  profile__name: {
    fontFamily: "Verdana",
    fontStyle: 'sans-serif',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    textDecoration: 'underline',
    color: '#282c34c2'
  },
  
  profile__tag: {
    fontFamily: "Verdana",
    fontStyle: 'sans-serif',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 16,
    color: '#282c34c2'
  },
  profile__location: {
    fontFamily: "Verdana",
    fontStyle: 'sans-serif',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 16,
    color: '#282c34c2'
  },
  profile__top: {
    paddingTop: 30,
    paddingBottom: 20,
    borderBottom: '1px solid rgb(77, 77, 77)'
  },
  profile__bottom: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  profile__bottom__item: {
    minWidth: 'calc(260px / 3 - 22px)',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#282c34c2',
    padding: 10
  }
})

const Profile = ({ profile }) => {
  const { avatar, name, tag, location, stats } = profile;
  const s = useStyles()

  return (
    <div className={s.profile}>
      <div className={s.profile__top}>
        <img className={s.profile__image} src={avatar} alt="avatar" />
        <p className={s.profile__name}>{name}</p>
        <p className={s.profile__tag}>&copy;{tag}</p>
        <p className={s.profile__location}>{location}</p>
      </div>
      <div className={s.profile__bottom}>
        <div className={s.profile__bottom__item}>
          Followers {stats.followers}
        </div>
        <div className={s.profile__bottom__item}>Views {stats.views}</div>
        <div className={s.profile__bottom__item}>Likes {stats.likes}</div>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  profile: {
    avatar:
      "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg",
    name: "User",
    tag: "tag",
    location: "Location",
    stats: {
      followers: 0,
      views: 0,
      likes: 0,
    },
  },
};

Profile.propTypes = {
  profile: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string.isRequired,
    stats: shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

export default Profile;
