import React from 'react';

import { Link } from 'react-router-dom';

import styles from './FriendLink.module.scss';

function FriendLink() {
  const [activeFriend, setActiveFriend] = React.useState();

  const friendList = ['Maria Danilova', 'Dmitrii Markov', 'Mark Befus', 'Hanna Pekhouskaya'];

  return (
    <div className={styles.container}>
      <nav>
        <Link to="/schedule">
          <img src="img/back-button.svg" alt="back-button" />
        </Link>
        <img width={200} height={30} src="img/FriendLinks.png" alt="FriendLinks" />
      </nav>

      {friendList.map((name, index) => (
        <article key={index} onClick={() => setActiveFriend(index)}>
          <img className={activeFriend === index && styles.active} src="img/m.svg" alt="d" />

          {activeFriend === index && (
            <img width={37} height={37} src="img/orange.svg" alt="orange" />
          )}

          <h4>{name}</h4>
        </article>
      ))}
      <button>Match</button>
    </div>
  );
}

export default FriendLink;
