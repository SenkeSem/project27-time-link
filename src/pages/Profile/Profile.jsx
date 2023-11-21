import React from 'react';

import styles from './Profile.module.scss';

import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.logo_box}>
        <Link to="/main">
          <img width={47} height={46} src="img/back-button.png" alt="back-button" />
        </Link>
        <img src="img/profile-timelink.png" alt="profile-timelink" />
      </div>
      <div className={styles.user_box}>
        <div className={styles.user_picture}>
          <img src="img/profile-picture.png" alt="profile-picture" />
          <p>Profile Picture</p>
        </div>
        <div className={styles.user_info}>
          <input type="text" placeholder="Linkname" />
          <input type="text" placeholder="Age" />
          <input type="text" placeholder="Location" />
          <img width={14} height={14} src="img/pencil.png" alt="pencil" />
        </div>
      </div>
      <div className={styles.hobbies_box}>
        <h3>Hobbies</h3>
        <input type="text" />
      </div>
      <div className={styles.interests_box}>
        <h3>Interests</h3>
        <input type="text" />
      </div>
      <button className={styles.save_btn}>Save</button>
    </div>
  );
}

export default Profile;
