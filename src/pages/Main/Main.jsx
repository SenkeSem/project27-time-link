import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.logo_box}>
        <div className={styles.logo_item}>
          <Link to="/profile">
            <img src="img/profile-logo.png" alt="profile" />
          </Link>
          <p>Profile</p>
        </div>
        <div className={styles.logo_item}>
          <Link to="/chat">
            <img src="img/chat-logo.png" alt="chat" />
          </Link>
          <p>Chat</p>
        </div>
        <div className={styles.logo_item}>
          <img src="img/schedule-logo.png" alt="schedule" />
          <p>Schedule</p>
        </div>
        <div className={styles.logo_item}>
          <Link to="/activites">
            <img src="img/activites-logo.png" alt="activites" />
          </Link>
          <p>Activities</p>
        </div>
      </div>
      <button>Upcoming Events</button>
      <img className={styles.main_logo} src="img/main-timelink-logo.png" alt="main-timelink" />
    </div>
  );
}

export default Main;
