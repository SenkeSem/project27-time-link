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
        <article>
          <div className={styles.purple_back}>Outdoor</div>
          <div>Indoor</div>
        </article>
        <article>
          <div>Passive leisure</div>
          <div>Active leisure</div>
        </article>
        <article>
          <div>Number of participants</div>
          <div>2</div>
        </article>
        <article>
          <p>14:00-17:00</p>
        </article>
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
