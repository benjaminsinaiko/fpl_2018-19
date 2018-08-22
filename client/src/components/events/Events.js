import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventFeed from './EventFeed';
import Spinner from '../common/Spinner';
import { getEvents } from '../../actions/eventsActions';

class Events extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events, loading } = this.props.events;

    let eventItems;

    if (events === null || loading) {
      eventItems = <Spinner />;
    } else {
      if (events.length > 0) {
        eventItems = <EventFeed events={events} />;
      } else {
        eventItems = <h4>No Events found...</h4>;
      }
    }

    return (
      <div className="events">
        <div className="container events-container">
          <div className="row">
            <div className="col-md-12">
              <div className="card-deck current-events">{eventItems}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Events.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  events: state.events
});

export default connect(
  mapStateToProps,
  { getEvents }
)(Events);
