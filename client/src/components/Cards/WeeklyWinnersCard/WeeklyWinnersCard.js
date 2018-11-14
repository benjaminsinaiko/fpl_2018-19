import React from 'react';

import styles from './WeeklyWinnersCard.module.css';

const weeklyWinnersCard = props => {
  const finishedWeek = props.status.filter(week => week.finished === true).pop()
    .id;

  const finishedWinners = props.winners.slice(0, finishedWeek);

  let weeklyWinner = finishedWinners.reverse().map((player, index) => {
    return (
      <div key={index} className="col-sm-3 mb-4">
        <div className="card h-100">
          <div className="card text-center">
            <div className={`card-header ${styles.CardHeader}`}>
              GW {Math.abs(index - finishedWinners.length)} |{' '}
              <span className={styles.Score}>
                {player[0].score}
                pts
              </span>
            </div>
            <div className={`card-body ${styles.CardBody}`}>
              <h5 className="card-text">{player[0].team}</h5>
              <p className="card-text">{player[0].name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="row">{weeklyWinner}</div>;
};

export default weeklyWinnersCard;
