import React from 'react';

import styles from './Activities.module.scss';

import { Link } from 'react-router-dom';

function Activities() {
  const [activeDoor, setActiveDoor] = React.useState(0);
  const [activeLeisure, setActiveLeisure] = React.useState(0);
  const [timeValue, setTimeValue] = React.useState('');

  const DOOR_TYPE = ['Outdoor', 'Indoor'];
  const LEISURE_TYPE = ['Passive leisure', 'Active leisure'];

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
          {DOOR_TYPE.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveLeisure(index)}
              className={activeLeisure === index ? styles.active : ''}>
              {item}
            </li>
          ))}
        </ul>
        <ul>
          {LEISURE_TYPE.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveDoor(index)}
              className={activeDoor === index ? styles.active : ''}>
              {item}
            </li>
          ))}
        </ul>
        <ul>
          <li>Number of participants</li>
          <input type="text" placeholder="3" />
        </ul>
        <ul>
          <input
            value={timeValue}
            onChange={(event) => setTimeValue(event.target.value)}
            className={styles.timeInput}
            type="text"
            placeholder="Time"
          />
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
