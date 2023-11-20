import React from 'react';

import style from './Registration.module.scss';

function Registration() {
  return (
    <div className={style.container}>
      <img src="img/logo.png" alt="logo" />
      <input type="text" placeholder="Linkname" />
      <input type="text" placeholder="Password" />
      <button>
        <p>Log In</p>
      </button>
      <h5> © Copyright.</h5>
      <h5>All Rights Reserved</h5>
    </div>
  );
}

export default Registration;
