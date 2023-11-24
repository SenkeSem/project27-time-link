import React from 'react';

import styles from './Chat.module.scss';

import { Link } from 'react-router-dom';

function Chat() {
  return (
    <div className={styles.container}>
      <nav>
        <Link to="/main">
          <img src="img/back-button.svg" alt="back-button" />
        </Link>
        <img src="img/plus.svg" alt="plus" />
      </nav>
      <article className={styles.first}>
        <img src="img/m.svg" alt="m" />
        <section>
          <h4>Maria Danilova</h4>
          <h5>Wanna grab some coffee?</h5>
        </section>
        <p>16:50</p>
      </article>
      <article>
        <img src="img/d.svg" alt="d" />
        <section>
          <h4>Dmitrii Markov</h4>
          <h5>Did she reply to your email?</h5>
        </section>
        <p>16:50</p>
      </article>
      <article>
        <img src="img/m.svg" alt="m" />
        <section>
          <h4>Mark Befus</h4>
          <h5>Can you book a room in the library?</h5>
        </section>
        <p>16:50</p>
      </article>
      <article>
        <img src="img/h.svg" alt="h" />
        <section>
          <h4>Hanna Pekhouskaya</h4>
          <h5>I updated the prototype</h5>
        </section>
        <p>16:50</p>
      </article>
      <article>
        <img src="img/s.svg" alt="s" />
        <section>
          <h4>Seminar</h4>
          <h5>Alright. I’ll book the room</h5>
        </section>
        <p>16:50</p>
      </article>
      <img className={styles.friendLink} src="img/new-friend-link.png" alt="new-friend-link" />
    </div>
  );
}

export default Chat;
