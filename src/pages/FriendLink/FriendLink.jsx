import React from 'react';

import { Link } from 'react-router-dom';

import styles from './FriendLink.module.scss';

function FriendLink() {
  const [activeFriend, setActiveFriend] = React.useState(false);

  return (
    <div className={styles.container}>
      <nav>
        <Link to="/schedule">
          <img src="img/back-button.svg" alt="back-button" />
        </Link>
        <img width={200} height={30} src="img/FriendLinks.png" alt="FriendLinks" />
      </nav>
      <article>
        <img
          onClick={() => setActiveFriend(!activeFriend)}
          className={activeFriend ? styles.active : ''}
          src="img/m.svg"
          alt="m"
        />
        {activeFriend && <img width={37} height={37} src="img/orange.svg" alt="orange" />}
        <h4>Maria Danilova</h4>
      </article>
      <article>
        <img src="img/d.svg" alt="d" />
        <h4>Dmitrii Markov</h4>
      </article>
      <article>
        <img src="img/m.svg" alt="m" />
        <h4>Mark Befus</h4>
      </article>
      <article>
        <img src="img/h.svg" alt="h" />
        <h4>Hanna Pekhouskaya</h4>
      </article>
      <button>Match</button>
    </div>
  );
}

export default FriendLink;
