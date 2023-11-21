import React from 'react';

import styles from './Registration.module.scss';

import { Link } from 'react-router-dom';

function Registration() {
  return (
    <div className={styles.container}>
      <img src="img/logo.png" alt="logo" />
      <input type="text" placeholder="Linkname" />
      <input type="text" placeholder="Password" />
      <Link to="/main">
        <button>
          <p>Log In</p>
        </button>
      </Link>
      <h5> © Copyright.</h5>
      <h5>All Rights Reserved</h5>
    </div>
  );
}

export default Registration;
