import React from 'react';

import styles from './Schedule.module.scss';

import { Link } from 'react-router-dom';

function Schedule() {
  return (
    <div className={styles.container}>
      <header>
        <article>
          <Link to="/main">
            <img src="/img/back-button.svg" alt="back_button" />
          </Link>
          <h2>November 2023</h2>
        </article>
        <ul>
          <li>Day</li>
          <li>Week</li>
          <li>Month</li>
          <li>Year</li>
        </ul>
      </header>

      <table>
        <tr id="Week">
          <td></td>
          <td>Mon. 13</td>
          <td>Tue. 14</td>
          <td>Wed. 15</td>
          <td>Thu. 16</td>
          <td>Fri. 17</td>
          <td>Sat. 18</td>
          <td>Sun. 19</td>
        </tr>
        <tr>
          <td>08:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.colorBFD440}>Appointment</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>09:00</td>
          <td></td>
          <td className={styles.color54B152}>Gym</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>10:00</td>
          <td></td>
          <td className={styles.color54B152}>Gym</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>11:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>12:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>13:00</td>
          <td className={styles.colorBFD440}>Consultation</td>
          <td></td>
          <td></td>
          <td className={styles.color54B152}>Lecture</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>14:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.color54B152}>Lecture</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>15:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>16:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>17:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>18:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>19:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>20:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>21:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>22:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>

      <footer>
        <Link to="/friendLink">
          <button>Match my calendar with</button>
        </Link>
      </footer>
    </div>
  );
}

export default Schedule;
