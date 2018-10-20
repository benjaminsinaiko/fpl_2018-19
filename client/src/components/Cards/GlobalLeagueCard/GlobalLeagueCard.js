import React from 'react';

import styles from './GlobalLeagueCard.module.css';

const globalLeagueCard = props => {
  return (
    <div className={styles.GlobalLeague}>
      <div className="card">
        <div className={`card-header ${styles.CardHeader}`}>Global Leagues</div>
        <div className={`card-body ${styles.CardBody}`}>
          <div className="row">
            <div className="col">Overall</div>
            <div className="col">USA</div>
          </div>
          <div className="row">
            <div className={`col ${styles.Scores}`}>{props.overall.total}</div>
            <div className={`col ${styles.Scores}`}>{props.usa.total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default globalLeagueCard;
