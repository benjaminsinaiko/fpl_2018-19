import React from 'react';

import styles from './PlayerRank.module.css';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';

const PlayerRank = props => {
  return (
    <React.Fragment>
      <div className={`col ${styles.RankCard}`}>
        <h5 className={styles.RankCardTitle}>Weekly Rank</h5>
        <ProgressBar rank={props.player.entry.summary_event_rank} />
      </div>
      <div className={`col ${styles.RankCard}`}>
        <h5 className={styles.RankCardTitle}>Overall Rank</h5>
        <ProgressBar rank={props.player.entry.summary_overall_rank} />
      </div>
    </React.Fragment>
  );
};

export default PlayerRank;
