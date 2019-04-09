import React from 'react';

import { Link } from 'react-router-dom';

const EventInfo = props => {
  const { place, date, description } = props.event;
  return (
    <li>
      <Link to={`/events/${props.event.event_id}`}>
        <p> Miejsce: {place} </p>
        <p> Data: {date} </p>
        <p> Opis: {description} </p>
        <p> -------------------- </p>
      </Link>
    </li>
  );
};

export default EventInfo;
