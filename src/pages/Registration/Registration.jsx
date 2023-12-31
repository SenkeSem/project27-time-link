import React, { useEffect } from 'react';

import styles from './Registration.module.scss';

import { Link } from 'react-router-dom';

function Registration() {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const [loginDirty, setLoginDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);

  const [loginError, setLoginError] = React.useState('The login cannot be empty');
  const [passwordError, setPasswordError] = React.useState('The password cannot be empty');
  const [formValid, setFormValid] = React.useState(false);

  useEffect(() => {
    if (loginError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [loginError, passwordError]);

  const loginHandler = (event) => {
    setLogin(event.target.value);

    let value = event.target.value;

    if (value.length > 15 || value.length < 3) {
      setLoginError('A login must contain 3 to 15 characters.');
      if (!value) {
        setLoginError('The password cannot be empty');
      }
    } else {
      setLoginError('');
    }
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);

    let value = event.target.value;

    if (value.length > 15 || value.length < 3) {
      setPasswordError('A password must contain 3 to 15 characters.');
      if (!value) {
        setPasswordError('The password cannot be empty');
      }
    } else {
      setPasswordError('');
    }
  };

  const blurHandler = (event) => {
    switch (event.target.name) {
      case 'login':
        setLoginDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <div className={styles.container}>
      <img src="img/logo.png" alt="logo" />
      <form>
        {loginDirty && loginError && (
          <div className={styles.loginErrorMessage} style={{ color: 'red' }}>
            {loginError}
          </div>
        )}
        <input
          required
          onChange={(event) => loginHandler(event)}
          onBlur={(event) => blurHandler(event)}
          value={login}
          name="login"
          type="text"
          placeholder="Linkname"
        />
        {passwordDirty && passwordError && (
          <div className={styles.passwordErrorMessage} style={{ color: 'red' }}>
            {passwordError}
          </div>
        )}
        <input
          required
          onChange={(event) => passwordHandler(event)}
          onBlur={(event) => blurHandler(event)}
          value={password}
          name="password"
          type={passwordVisible ? 'text' : 'password'}
          placeholder="Password"
        />

        {
          <img
            onClick={() => setPasswordVisible(!passwordVisible)}
            src={passwordVisible ? 'img/visibility_icon.svg' : 'img/off_visibility_icon.svg'}
            alt="visibility_icon"
          />
        }

        <Link to={formValid && '/main'}>
          <button className={formValid ? '' : styles.notValid} type="submit">
            <p>Log In</p>
          </button>
        </Link>
      </form>
      <div className={styles.companyInfo}>
        <h5> © Copyright.</h5>
        <h5>All Rights Reserved</h5>
      </div>
    </div>
  );
}

export default Registration;
