import React from 'react';

import EventInfo from '../EventInfo';

const EventsList = props => {
  if (!props.events) {
    return <p> Ładowanie... </p>;
  } else {
    return (
      <ul>
        {props.events.map(event => (
          <EventInfo key={event.event_id} event={event} />
        ))}
      </ul>
    );
  }
};

export default EventsList;
