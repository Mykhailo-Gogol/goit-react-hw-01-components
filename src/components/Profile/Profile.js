import React, { Component } from "react";
import PropTypes, { shape } from "prop-types";

import * as s from "./Profile.module.css";

class Profile extends Component {
  render() {
    const { avatar, name, tag, location, stats } = this.props.profile;

    return (
      <div className={s.profile}>
        <div className={s.profile__top}>
          <img className={s.profile__image} src={avatar} />
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
  }
}

Profile.defaultProps = {
  profile: {
    avatar:
      "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg",
    name: "User",
    tag: "#",
    location: "Location",
    followers: "0",
    views: "0",
    likes: "0",
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
