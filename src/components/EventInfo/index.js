import React from 'react';

import { Link } from 'react-router-dom';

const EventInfo = props => {
  const { title, place, date, description, event_tags, accuracyPercentage } = props.event;
  return (
    <li>
      <Link to={`/events/${props.event.event_id}`}>
        <p> Tytuł: {title} </p>
        <p> Miejsce: {place} </p>
        <p> Data: {date} </p>
        <p> Opis: {description} </p>
        <ul>
          {JSON.parse(event_tags).map(tag => (
            <li key={tag}> {tag} </li>
          ))}
        </ul>
        {accuracyPercentage !== undefined ? <p> Zgodność: {accuracyPercentage}%</p> : null}
        <p> -------------------- </p>
      </Link>
    </li>
  );
};

export default EventInfo;
