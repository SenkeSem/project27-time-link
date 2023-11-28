import React from 'react';

import styles from './ActivitiesPage.module.scss';

import { Link } from 'react-router-dom';

const ActivitiesList = [
  { activiteName: 'Football Match', imageUrl: '/img/football.png' },
  { activiteName: 'Shopping', imageUrl: '/img/shopping.png' },
  { activiteName: 'Tennis', imageUrl: '/img/tennis.png' },
  { activiteName: 'Zoo', imageUrl: '/img/zoo.png' },
  { activiteName: 'Amusement park', imageUrl: '/img/park.png' },
  { activiteName: 'Gallery Visit', imageUrl: '/img/gallery.png' },
  { activiteName: 'Ice skating', imageUrl: '/img/ice.png' },
  { activiteName: 'Coffee', imageUrl: '/img/coffee.png' },
];

function ActivitiesPage() {
  const [ActivityNumber, setActivityNumber] = React.useState(0);

  const onClickRegenerate = () => {
    let number = Math.floor(Math.random() * ActivitiesList.length);

    setActivityNumber(number);
  };

  return (
    <div className={styles.container}>
      <img src={ActivitiesList[ActivityNumber].imageUrl} alt="background" />
      <article>
        {/* <input type="color" /> */}
        <h4>Suggested activity:</h4>
        <h3>{ActivitiesList[ActivityNumber].activiteName}</h3>
        <h4>Friday, 15:00-17:00</h4>
      </article>
      <button onClick={onClickRegenerate}>Regenerate</button>
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

export default ActivitiesPage;
