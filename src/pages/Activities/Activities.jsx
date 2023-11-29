import React from 'react';

import styles from './Activities.module.scss';

import { Link } from 'react-router-dom';

function Activities() {
  return (
    <div className={styles.container}>
      <div className={styles.logo_box}>
        <Link to="/main">
          <img width={47} height={46} src="img/back-button.svg" alt="back-button" />
        </Link>
        <img src="img/profile-timelink.png" alt="profile-timelink" />
      </div>
      <h2>Filter</h2>
      <div className={styles.filter_box}>
        <ul>
          <li>Outdoor</li>
          <li className={styles.active}>Indoor</li>
        </ul>
        <ul>
          <li className={styles.active}>Passive leisure</li>
          <li>Active leisure</li>
        </ul>
        <ul>
          <li>Number of participants</li>
          <input type="text" placeholder="3" />
        </ul>
        <ul>
          <input className={styles.timeInput} type="text" placeholder="Time" />
        </ul>
        <div className={styles.more_box}>
          <p>More</p>
          <img src="img/right.svg" alt="right" />
        </div>
      </div>
      <Link to="/football">
        <button>Tap to generate an activity</button>
      </Link>
    </div>
  );
}

export default Activities;
