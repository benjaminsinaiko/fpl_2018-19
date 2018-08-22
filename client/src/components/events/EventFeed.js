import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventItem from './EventItem';

class EventFeed extends Component {
  render() {
    const { events } = this.props;

    let currentEvents = events.filter(event => {
      return (
        event.is_previous === true ||
        event.is_current === true ||
        event.is_next === true
      );
    });
    console.log('currentEvents: ', currentEvents);

    return currentEvents.map(event => (
      <EventItem key={event.id} event={event} />
    ));
  }
}

EventFeed.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventFeed;
