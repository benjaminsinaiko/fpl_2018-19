import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    // Update button checker
    let currentAndChecked =
      event.is_current === true && event.data_checked === true;

    let activeContent;

    if (event.is_previous === true) {
      // Previous Gameweek
      activeContent = (
        <span>
          <button
            type="button"
            className="btn btn-outline-success active-btn"
            disabled
          >
            Completed
          </button>
          <hr />
        </span>
      );
    } else if (event.is_current === true) {
      // Current Gameweek
      if (event.finished === false) {
        activeContent = (
          <span>
            <button
              type="button"
              className="btn btn-success active-btn"
              disabled
            >
              Active
            </button>
            <hr />
          </span>
        );
      } else {
        activeContent = (
          <div>
            <div className="row">
              <div className="col">
                <button
                  type="button"
                  className={classnames('btn', {
                    'btn-outline-danger': event.finished === false,
                    'btn-outline-success': event.finished === true
                  })}
                  disabled
                >
                  Games Done
                </button>
                <hr />
              </div>
              <div className="col">
                <button
                  type="button"
                  className={classnames('btn', {
                    'btn-outline-danger': event.data_checked === false,
                    'btn-outline-success': event.data_checked === true
                  })}
                  disabled
                >
                  Points Updated
                </button>
                <hr />
              </div>
            </div>
          </div>
        );
      }
    } else {
      // Next Gameweek
      activeContent = (
        <span>
          <button type="button" className="btn btn-warning active-btn" disabled>
            <i>Comming Soon...</i>
          </button>
          <hr />
        </span>
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
                : '0'}
            </div>
            <div className="col">
              {event.highest_score !== null ? event.highest_score : '0'}
            </div>
          </div>
          <Link to="/update">
            {currentAndChecked ? (
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                disabled
              >
                Update
              </button>
            ) : null}
          </Link>
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
