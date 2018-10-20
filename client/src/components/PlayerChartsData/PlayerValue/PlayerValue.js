import React from 'react';

import styles from './PlayerValue.module.css';

const PlayerValue = props => {
  const formatValue = value => {
    return (value / 10).toFixed(1);
  };

  return (
    <React.Fragment>
      <div className="col">
        <div className="card">
          <div className={`card-header ${styles.ValueHeader}`}>Team Value</div>
          <div className={`card-body ${styles.ValueBody}`}>
            <h5 className="card-title">
              {formatValue(props.player.entry.value)}
            </h5>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className={`card-header ${styles.ValueHeader}`}>In The Bank</div>
          <div className={`card-body ${styles.ValueBody}`}>
            <h5 className="card-title">
              {formatValue(props.player.entry.bank)}
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlayerValue;
