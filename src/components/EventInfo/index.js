import React from 'react';

const EventInfo = props => {
  const { place, date, description } = props.event;
  return (
    <li>
      <p> Miejsce: {place} </p>
      <p> Data: {date} </p>
      <p> Opis: {description} </p>
      <p> -------------------- </p>
    </li>
  );
};

export default EventInfo;
