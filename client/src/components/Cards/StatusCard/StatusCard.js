import React from 'react';
import moment from 'moment';
import 'moment-timezone';

import styles from './StatusCard.module.css';

const statusCard = props => {
  // Set Chicago timezone
  let deadlineChicago = moment(props.event.deadline_time)
    .tz('America/Chicago')
    .format('ddd MMM Do h:mm a z');

  if (props.event.is_next) {
    deadlineChicago = (
      <span className={styles.NextDeadline}>{deadlineChicago}</span>
    );
  }

  // Set Finished/Coming Soon badge
  let statusBadge = null;
  if (props.event.data_checked) {
    statusBadge = <span className="badge badge-secondary">Finished</span>;
  } else if (props.event.current) {
    statusBadge = <span className="badge badge-success">Live</span>;
  } else if (props.event.is_next) {
    statusBadge = <span className="badge badge-warning">Upcoming</span>;
  }

  return (
    <div className="card">
      <div className="card-header">
        {props.event.name} {statusBadge}
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col">Average Score</div>
          <div className="col">Highest Score</div>
        </div>
        <div className="row">
          <div className={`col ${styles.Score}`}>
            {props.event.average_entry_score !== 0
              ? props.event.average_entry_score
              : '-'}
          </div>
          <div className={`col ${styles.Score}`}>
            {props.event.highest_score !== null
              ? props.event.highest_score
              : '-'}
          </div>
        </div>
      </div>
      <div className="card-footer">
        <small>Deadline: {deadlineChicago}</small>
      </div>
    </div>
  );
};

export default statusCard;
