import React, { Component } from 'react';
import classnames from 'classnames';
import moment from 'moment';
import 'moment-timezone';

class EventItem extends Component {
  isNext(event) {
    if (event === true) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { event } = this.props;

    const deadlineUTC = moment(event.deadline_time);
    const deadlineChi = deadlineUTC
      .tz('America/Chicago')
      .format('ddd MMM Do h:mm a z');

    let activeContent;
    if (event.is_current === true && event.finished === true) {
      activeContent = (
        <span>
          <button
            type="button"
            className="btn btn-success active-btn"
            style={{ opacity: '85%' }}
            disabled
          >
            Active
          </button>
          <hr />
        </span>
      );
    } else if (event.is_next === true) {
      activeContent = (
        <span>
          <button type="button" className="btn btn-outline-danger" disabled>
            <i>Coming Soon...</i>
          </button>
          <hr />
        </span>
      );
    } else {
      activeContent = (
        <div>
          <div className="row">
            <div className="col">
              <h3>
                <span className="badge badge-success">Finshed</span>
              </h3>
              <hr />
            </div>
            <div className="col">
              <h3>
                <span className="badge badge-success">Checked</span>
              </h3>
              <hr />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="card">
        <div
          className={classnames('card-header', {
            'border-success': event.is_current,
            'text-success': event.is_current
          })}
        >
          {event.name}
        </div>
        <div className="card-body">
          {activeContent}

          <div className="row">
            <div className="col">Avgerage Score</div>
            <div className="col">Highest Score</div>
          </div>
          <div className="row">
            <div className="col">
              {event.average_entry_score !== 0
                ? event.average_entry_score
                : 'N/A'}
            </div>
            <div className="col">
              {event.highest_score !== null ? event.highest_score : 'N/A'}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <small
            className={classnames({
              'text-danger': this.isNext(event.is_next),
              'text-muted': !this.isNext(event.is_next)
            })}
          >
            Deadline: {deadlineChi}
          </small>
        </div>
      </div>
    );
  }
}

export default EventItem;
