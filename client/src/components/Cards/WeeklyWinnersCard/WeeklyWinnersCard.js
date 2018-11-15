import React from 'react';

import styles from './WeeklyWinnersCard.module.css';

const weeklyWinnersCard = props => {
  let weeklyWinner = props.winners.reverse().map((player, index) => {
    return (
      <div key={index} className="col-sm-3 mb-4">
        <div className="card h-100">
          <div className="card text-center">
            <div className={`card-header ${styles.CardHeader}`}>
              GW {Math.abs(index - props.winners.length)} |{' '}
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
