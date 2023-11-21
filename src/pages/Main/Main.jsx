import React from 'react';

import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.logo_box}>
        <div className={styles.logo_item}>
          <img src="img/profile-logo.png" alt="profile" />
          <p>Profile</p>
        </div>
        <div className={styles.logo_item}>
          <img src="img/chat-logo.png" alt="profile" />
          <p>Chat</p>
        </div>
        <div className={styles.logo_item}>
          <img src="img/schedule-logo.png" alt="profile" />
          <p>Schedule</p>
        </div>
        <div className={styles.logo_item}>
          <img src="img/activites-logo.png" alt="profile" />
          <p>Activities</p>
        </div>
      </div>
      <button>Upcoming Events</button>
      <img className={styles.main_logo} src="img/main-timelink-logo.png" alt="main-timelink" />
    </div>
  );
}

export default Main;
