import React from 'react'

import styles from './WeeklyWinnersCard.module.css'

const weeklyWinnersCard = props => {
  let weeklyWinner = props.winners.reverse().map((winners, index) => {
    return (
      <div key={index} className={`${styles.Card}`}>
        <div className="card">
          <div className="card text-center">
            <div className={`card-header ${styles.CardHeader}`}>
              GW {Math.abs(index - props.winners.length)} |{' '}
              <span className={styles.Score}>
                {winners[0].score}
                pts
              </span>
            </div>
            <div className={`card-body ${styles.CardBody}`}>
              {winners.map((winner, index) => (
                <React.Fragment key={index}>
                  <h5 className="card-text">{winner.team}</h5>
                  <p className="card-text">{winner.name}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  })

  return <div className={`row ${styles.CardRow}`}>{weeklyWinner}</div>
}

export default weeklyWinnersCard
