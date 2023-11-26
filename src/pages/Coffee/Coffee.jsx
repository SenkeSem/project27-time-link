import React from 'react';

import styles from './Coffee.module.scss';

import { Link } from 'react-router-dom';

function Coffee() {
  return (
    <div className={styles.container}>
      <article>
        <h4>Suggested activity:</h4>
        <h3>Coffee Time</h3>
        <h4>Friday, 14:00-17:00</h4>
      </article>
      <Link to="/football">
        <button>Regenerate</button>
      </Link>
      <nav>
        <section>
          <img src="img/share.svg" alt="share" />
          <Link to="/chat">
            <p>Share to the chat</p>
          </Link>
        </section>
        <section>
          <img src="img/schedule.svg" alt="schedule" />
          <p>Add to the schedule</p>
        </section>
        <section>
          <img src="img/fillter.svg" alt="fillter" />
          <Link to="/activites">
            <p>Back to filters</p>
          </Link>
        </section>
        <section>
          <img src="img/back.svg" alt="img/back.svg" />
          <Link to="/main">
            <p>Back to the menu</p>
          </Link>
        </section>
      </nav>
    </div>
  );
}

export default Coffee;
