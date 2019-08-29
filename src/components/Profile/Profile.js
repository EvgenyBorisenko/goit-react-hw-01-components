import React from 'react';
import PropTypes from 'prop-types';
import style from './Profile.module.css';
// import Photo from '../../img/my-photo.jpg';

const Profile = ({ propUser }) => {
  const { name, tag, location, avatar, stats } = propUser;
  const { followers, views, likes } = stats;

  return (
    <div className={style.container}>
      <img className={style.photo} src={avatar} width="200px" alt="some alt" />
      <h2 className={style.name}>{name}</h2>
      <h3 className={style.tag}>{tag}</h3>
      <h4 className={style.location}>{location}</h4>
      <ul className={style.info}>
        <li>followers {followers}</li>
        <li>views {views}</li>
        <li>likes {likes}</li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  propUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Profile;
